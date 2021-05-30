import React, { } from 'react'
import { useEffect, useState } from "react";
import './ItemListContainer.css';
import ItemDetail from './ItemDetail';
import ItemDetailInfo from './ItemDetailInfo'
import './ItemDetailContainer.css'

function ItemDetailContainer(){
    const dataItems = 
        {
            "id": 1,
            "title": "Hydrapore Crema Gel",
            "price": "$2200",
            "img": "https://d3ugyf2ht6aenh.cloudfront.net/stores/702/918/products/sin-titulo-2020-08-29t170444-8651-16bad57dd82e8aeefc15987319315696-1024-1024.jpg",
            "desc": "Crema gel muy suave y fresca para rostro.",
          };

    
    const [itemDetail, setItemDetail] = useState(0);
    useEffect(()=>{
    const promise = new Promise ((resolve)=>{
      setTimeout(()=>{
        resolve(dataItems);   
      }, 2000);
    })
    promise.then (
      function (value){
        setItemDetail(value)
      },
    )
    }, )

return( itemDetail && 
  <div>
    <ItemDetail
      title={itemDetail.title}
       img={itemDetail.img}
       price={itemDetail.price}
       key={itemDetail.id}
       desc={itemDetail.desc}>
    </ItemDetail>
     <div className="item-detail-info-container">
      <ItemDetailInfo> </ItemDetailInfo>
     </div>
   </div>
)
}

export default ItemDetailContainer;