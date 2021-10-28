import React, {createContext, useState} from 'react';

export const ProductContext = createContext<Partial<IProductContext>>({});

const ProductContextProvider: React.FC = ({children}) => {

    const [productList, setProductList] = useState<IProduct[]>([
        {
            id: 1,
            name: "Heloin Jed",
            price: 250
        }
    ]);

    const saveProduct = (data: IProduct) => {
        setProductList([
            ...productList,
            data
        ]);
    }

    return (
        <ProductContext.Provider
            value={{
                productList,
                saveProduct
            }}
        >
            {
                children
            }
        </ProductContext.Provider>
    );
};

export default ProductContextProvider;