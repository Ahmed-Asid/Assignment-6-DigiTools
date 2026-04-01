import { use } from "react"
import Product from "./Product";

export default function Products({ productsPromise, getProduct, cartAdded }) {
    console.log(productsPromise)
    const data = use(productsPromise);
    const products = data.products;
    console.log(products)
    return (
        <>
            <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-7.5 justify-center">
                {
                    products.map(product => <Product product={product} key={product.id} getProduct={getProduct} cartAdded={cartAdded}></Product>)
                }
            </div>
        </>
    )
}