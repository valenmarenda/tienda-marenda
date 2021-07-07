import React from 'react';
import {Link} from 'react-router-dom'

export default function CartWishListContent(pId){

const id = pId.pId

return (
    <> 
    <Link to={`/productDetail/${id}`}>
    <button className="btn">Lo llevo </button>
    </Link>
    </>
)

}