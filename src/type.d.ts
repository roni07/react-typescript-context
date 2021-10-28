interface IProduct {
    id: number,
    name: string,
    price: number
}

interface IProductContext {
    productList: IProduct[]
    saveProduct?: (product: IProduct) => void
}