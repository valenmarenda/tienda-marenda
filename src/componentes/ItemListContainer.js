import React, { } from 'react'
import ItemCount from './ItemCount'
import ItemList from './ItemList';
import { useEffect, useState } from "react";
import './ItemListContainer.css';

function ItemListContainer(){
    const dataItems = [
        {
            "id": 1,
            "title": "Crema Cuerpo",
            "price": "$1800",
            "img": "https://d3ugyf2ht6aenh.cloudfront.net/stores/702/918/products/sin-titulo-2020-08-29t170444-8651-16bad57dd82e8aeefc15987319315696-1024-1024.jpg"
          },
          {
            "id": 2,
            "title": "Crema",
            "price": "$1800",
            "img": "https://d3ugyf2ht6aenh.cloudfront.net/stores/702/918/products/sin-titulo-2020-08-29t170444-8651-16bad57dd82e8aeefc15987319315696-1024-1024.jpg"
          },
          {
            "id": 3,
            "title": "Crema rostro",
            "price": "$1800",
            "img": "https://d3ugyf2ht6aenh.cloudfront.net/stores/702/918/products/sin-titulo-2020-08-29t170444-8651-16bad57dd82e8aeefc15987319315696-1024-1024.jpg"
          },
          {
            "id": 4,
            "title": "Crema Cuerpo",
            "price": "$1800",
            "img": "https://d3ugyf2ht6aenh.cloudfront.net/stores/702/918/products/sin-titulo-2020-08-29t170444-8651-16bad57dd82e8aeefc15987319315696-1024-1024.jpg"
          },
    ];
    
    
    const [itemContent, setItemContent] = useState(null);
    useEffect(()=>{
    const promise = new Promise ((resolve)=>{
      setTimeout(()=>{
        resolve(dataItems);
      }, 2000);
    })
    promise.then (
      function (value){
        setItemContent(value)
      },
      function(reason){
    
      }
    )
    },[])
return(
    <div>
    <div className="ItemListContainer">
    <h1>Aqui irá el catálogo <span>😻</span></h1>
    <ItemCount stock={5} initial={1}/>
    </div>
    <ItemList>{itemContent}</ItemList>
    </div>
)
}

export default ItemListContainer;