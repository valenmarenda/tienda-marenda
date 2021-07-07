import Item from "./Item"
import './ItemList.css'

const ItemList = (itemContent) => {
   
return (
<div className="cards-container">
    
    {itemContent.children?.map(i => {
        return (
            <Item 
            title={i.title}
            img= {i.img}
            pId= {i.id}
            cat={i.category}
            price= {i.price}
            id={i.id} 
            key={i.id}
            >
            </Item>
        )
    })}
</div>
)
};

export default ItemList;
