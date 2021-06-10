import React, { } from 'react'
import { useEffect, useState } from "react";
import './ItemListContainer.css';
import ItemDetail from './ItemDetail';
import ItemDetailInfo from './ItemDetailInfo'
import './ItemDetailContainer.css'
import { useParams } from 'react-router';
import data from '../data.json';

function ItemDetailContainer(){
  const [itemDetail, setItemDetail] = useState([]);
  const { pId } = useParams();
  useEffect(()=>{
    const getItems = new Promise (resolve =>{
      setTimeout(()=> { 
        resolve (data);
     }, 2000);
    } );
    pId
    ? getItems.then (res => setItemDetail(res.filter(i=> i.id === Number(pId))))
    : getItems.then ();
    },[pId]);

return(
  <div>
    {itemDetail?.map(it=>{
      return(
        <ItemDetail
        title={it.title}
         img={it.img}
         price={it.price}
         key={it.id}
         desc={it.desc}
         id= {it.id} >
      </ItemDetail>
      
      )
    })}

     <div className="item-detail-info-container">
      <ItemDetailInfo> </ItemDetailInfo>
     </div>
   </div>
)
}

export default ItemDetailContainer;