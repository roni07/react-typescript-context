import React from 'react';
import {useHistory} from "react-router-dom";

const Details: React.FC<any> = ({location}) => {

    const history = useHistory();
    // const {id} = useParams(); // we can get id from here

    const {product} = location.state;

    return (
        <div>
            <button onClick={() => history.goBack()}>Go To Previous</button>
            <p>This is details page</p>
            <p>{product.id} {product.name} {product.price}</p>
        </div>
    );
};

export default Details;