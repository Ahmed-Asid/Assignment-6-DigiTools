import Products from "./Products";
import { Suspense, useState } from 'react'

const fetchProducts = async () => {
    const res = await fetch('/data.json');
    return res.json();
}

export default function Main() {
    const [active, setActive] = useState('products');
    const productsPromise = fetchProducts();

    const toggleTab = (tab) => {
        setActive(tab);
    }

    return (
        <>
            <div className="space-y-4 text-center">
                <p className="text-5xl font-bold">Premium Digital Tools</p>
                <p className="text-gray-400">Choose from our curated collection of premium digital products designed<br />to boost your productivity and creativity.</p>
                <div className="border border-[#f6f6f6FF] p-1 inline-flex rounded-full">
                    <div onClick={() => toggleTab('products')} className={`btn px-4 py-3 rounded-full  ${active === 'products' ? 'bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white' : 'bg-white border-none shadow-none'}`}>Products</div>
                    <div onClick={() => toggleTab('cart')} className={`btn px-4 py-3 rounded-full ${active === 'cart' ? 'bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white' : 'bg-white border-none shadow-none'}`}>Cart({ })</div>
                </div>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-7.5 justify-center">
                <Suspense fallback={<div className="flex justify-center"><div className="mx-auto loading loading-dots loading-xl"></div></div>}>
                    <Products productsPromise={productsPromise}></Products>
                </Suspense>
            </div>
        </>
    )
}