import AddedProduct from "./AddedProduct";
import { toast } from 'react-toastify';

export default function Cart({ cartAdded, clear, removeProduct }) {

    const price = cartAdded.map(product => product.price);
    const total = (arr) => {
        let sum = 0;
        arr.forEach(num => {
            sum += num;
        });
        return sum;
    }

    const handleCheckout = () => {
        toast.success("Checkout successful! Your products are ready to use :)");
        clear();
    }
    return (
        <div className="mt-10 border-2 border-gray-300 p-10 space-y-6 rounded-2xl">
            <p className="text-2xl font-bold">Your Cart</p>
            <div className="space-y-4">
                {
                    cartAdded.map(addedProduct => <AddedProduct key={addedProduct.id} addedProduct={addedProduct} removeProduct={removeProduct}></AddedProduct>)
                }
            </div>
            <div className="flex justify-between">
                <p className="text-gray-400">Total:</p>
                <p className="text-2xl font-bold">${total(price)}</p>
            </div>
            <div onClick={() => handleCheckout()} className='btn w-full px-4 py-3 rounded-full bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white'>Proceed To Checkout</div>
        </div>
    )
}