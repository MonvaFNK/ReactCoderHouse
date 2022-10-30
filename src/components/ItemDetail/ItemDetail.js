import { useState } from "react";
import { Link } from "react-router-dom";
import Item from "../ItemList/Item";

const ItemDetail = ({product}) => {

    return (
        <Item product={product} />
    );
}

export default ItemDetail;