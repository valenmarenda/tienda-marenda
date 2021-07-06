import React, { } from 'react'
import { useEffect, useState } from "react";
import './ItemListContainer.css';
import ItemDetail from './ItemDetail';
import ItemDetailInfo from './ItemDetailInfo'
import './ItemDetailContainer.css'
import { useParams } from 'react-router';
import { getFireStore} from '../firebase/firebase'

function ItemDetailContainer(){
  const [itemDetail, setItemDetail] = useState([]);
  const { pId } = useParams();
  
  useEffect(()=>{
  const db= getFireStore();
  const itemCollection = db.collection("items");
  const productid = pId;
  const item = itemCollection.doc(productid);
  
    item.get().then((doc) =>{
     if (!doc.exists){
     console.log("no existe el item");
     return;
     }
    setItemDetail([{id: doc.id, ...doc.data()}]);
     }).catch((error) =>{
       console.log("error", error);
     }).finally(()=>{
       
     })
     
   },[pId]);
   
return(
  <>
  {itemDetail.length === 0 && <h1>No existe el item</h1>}
  <div>
   {itemDetail?.map(it=>{
    return(
      <ItemDetail
      title={it.title}
       img={it.img}
      price={it.price}
        key={it.id}
       desc={it.desc}
       id= {it.id}
       stock={it.stock}>
     </ItemDetail>
      
    )
   })}


     <div className="item-detail-info-container">
     <ItemDetailInfo></ItemDetailInfo>
    </div>
   </div>
   </>
)
}

export default ItemDetailContainer;