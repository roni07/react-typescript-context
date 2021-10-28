import React, {useContext} from 'react';
import {ProductContext} from "../context/ProductContextProvider";
import {Link} from "react-router-dom";
import {DETAILS_PATH} from "../routes";

const List = () => {

    const productContext = useContext(ProductContext);

    return (
        <div className="list">
            <h3>
                This is my product list
                <span className="list-span">
                {productContext.productList?.length}
            </span>
            </h3>
            <ul>
                {
                    productContext.productList?.map(product =>
                        <li key={product.id}>
                            <p>{product.id}</p>
                            <p>{product.name}</p>
                            <p>{product.price}</p>
                            <Link to={{
                                pathname: `${DETAILS_PATH}/${product.id}`,
                                state: {product}
                            }}
                                  className="li-btn">
                                <button>View</button>
                            </Link>
                        </li>
                    )
                }
            </ul>
        </div>
    );
};

export default List;