import React, {useContext, useState} from 'react';
import "./add_list.css";
import {ProductContext} from "../context/ProductContextProvider";

const AddToList = () => {

    const productContext = useContext(ProductContext);

    const [product, setProduct] = useState({
        id: "",
        name: "",
        price: ""
    });

    const handInputChange = (e: any) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!product.id || !product.name || !product.price) {

            alert("Please fill up all the field");
            return;
        }

        const data = {
            id: parseInt(product.id),
            name: product.name,
            price: parseInt(product.price)
        }

        if (productContext.saveProduct) productContext.saveProduct(data);

        setProduct({
            id: "",
            name: "",
            price: ""
        });
    }

    return (
        <div className="AddToList">
            <input
                type="text"
                placeholder="Id"
                className="AddToList-input"
                name="id"
                value={product.id}
                onChange={handInputChange}
            />
            <input
                type="text"
                placeholder="Product Name"
                className="AddToList-input"
                name="name"
                value={product.name}
                onChange={handInputChange}
            />
            <input
                type="text"
                placeholder="Price"
                className="AddToList-input"
                name="price"
                value={product.price}
                onChange={handInputChange}
            />
            <button
                className="Add-btn"
                onClick={handleSubmit}
            >
                Add
            </button>
        </div>
    );
};

export default AddToList;