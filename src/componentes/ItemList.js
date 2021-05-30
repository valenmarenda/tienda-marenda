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
            price= {i.price}
            key= {i.id}
            cat={i.category}
            >
            </Item>
        )
    })}
</div>
)
};

export default ItemList;
