import React, { useEffect, useState} from 'react'
import ItemList from './ItemList';
import './ItemListContainer.css';
import data from '../data.json';
import { useParams } from 'react-router-dom';
import NavBarCards from "./NavBarCards"
import Spinner from "./Spinner"


function ItemListContainer (){
    const [itemContent, setItemContent] = useState([]);
    const [loader, setLoader]= useState(false);
    const { catId } = useParams();

    useEffect(()=>{
      const getItems = new Promise (resolve =>{
        setLoader(true);
        setTimeout(()=> { 
          resolve (data);
       }, 2000);
      } );

      catId
      ? getItems.then (res => {
        setItemContent (res.filter(it=> it.category === catId))
        setLoader(false)
      })
      : getItems.then (res => {
        setItemContent(res)
        setLoader(false)
      });
    },[catId])
    const categories= [
      { addres: '/', text: 'Todos'},
      { addres: '/category/rostro', text: 'rostro'},
      { addres: '/caterory/cuerpo', text: 'cuerpo'},
      { addres: '/category/makeup', text: 'makeup'},
    ]
return(
    <>
     <NavBarCards>{categories}</NavBarCards> 
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