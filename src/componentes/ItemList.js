import Item from "./Item"

const ItemList = (itemContent) => {

return (
<div>
    {itemContent.children?.map(i => {
        return (
            <Item
            title={i.title}
            img= {i.img}
            price= {i.price}
            key= {i.id}
            >
            </Item>
        )
    })}
</div>
)
};

export default ItemList;
