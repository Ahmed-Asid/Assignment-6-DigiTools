import { use } from "react"
import Product from "./Product";

export default function Products({ productsPromise }) {
    console.log(productsPromise)
    const data = use(productsPromise);
    const products = data.products;
    console.log(products)
    return (
        <>
            {
                products.map(product => <Product product={product} key={product.id}></Product>)
            }
        </>
    )
}