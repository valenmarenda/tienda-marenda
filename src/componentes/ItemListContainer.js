import React, { useEffect, useState} from 'react'
import ItemList from './ItemList';
import './ItemListContainer.css';
import { useParams } from 'react-router-dom';
import Spinner from "./Spinner";
import { getFireStore} from '../firebase/firebase'


function ItemListContainer (){
    const [itemContent, setItemContent] = useState([]);
    const [loader, setLoader]= useState(false);
    const { catId } = useParams();


useEffect(()=> {
      setLoader (true);
     const db= getFireStore();
     const itemCollection = db.collection("items");
     const filteredItems = catId ? itemCollection.where('category','==',catId) : itemCollection
     filteredItems.get().then((querySnapshot)=>{
        if (querySnapshot.size === 0){
         console.log("no result");
        }
       setItemContent(querySnapshot.docs.map(doc=> {return {"id": doc.id, ...doc.data()}}));
     }).finally(()=>{
       setLoader(false)
     })
    },[catId]);
    


return(
    <>

     <div className="container-home">
       <h1>Tienda online</h1>
       <div className="container-item-list">
         {loader && <Spinner/>}
         <ItemList>{itemContent}</ItemList>
       </div>
     </div>
    </>
)
}

export default ItemListContainer;