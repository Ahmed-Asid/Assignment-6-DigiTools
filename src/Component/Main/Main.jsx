import Cart from "./Cart";
import Products from "./Products";
import { Suspense, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';

const fetchProducts = async () => {
    const res = await fetch('/data.json');
    return res.json();
}

export default function Main() {
    const [active, setActive] = useState('products');
    const productsPromise = fetchProducts();
    const [cartAdded, setCartAdded] = useState([]);
    console.log(cartAdded)

    const getProduct = (product) => {
        setCartAdded(p => [...p, product])
    }

    const removeProduct = (addedProduct) => {
        setCartAdded(p => p.filter(r => r.id !== addedProduct.id))
    }

    const clear = () => {
        setCartAdded([]);
    }

    const toggleTab = (tab) => {
        setActive(tab);
    }

    return (
        <>
            <ToastContainer />
            <div className="space-y-4 text-center">
                <p className="text-5xl font-bold">Premium Digital Tools</p>
                <p className="text-gray-400">Choose from our curated collection of premium digital products designed<br />to boost your productivity and creativity.</p>
                <div className="border border-[#f6f6f6FF] p-1 inline-flex rounded-full">
                    <div onClick={() => toggleTab('products')} className={`btn px-4 py-3 rounded-full  ${active === 'products' ? 'bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white' : 'bg-white border-none shadow-none'}`}>Products</div>
                    <div onClick={() => toggleTab('cart')} className={`btn px-4 py-3 rounded-full ${active === 'cart' ? 'bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white' : 'bg-white border-none shadow-none'}`}>Cart({cartAdded.length})</div>
                </div>
            </div>
            {
                active === 'products' && <Suspense fallback={<div className="flex justify-center items-center min-h-[90vh]"><div className="loading loading-dots loading-xl"></div></div>}>
                    <Products productsPromise={productsPromise} getProduct={getProduct} cartAdded={cartAdded} />
                </Suspense>
            }
            {
                active === 'cart' && <Cart cartAdded={cartAdded} clear={clear} removeProduct={removeProduct}></Cart>
            }
        </>
    )
}