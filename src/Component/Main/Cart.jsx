import AddedProduct from "./AddedProduct";

export default function Cart({ cartAdded, clear }) {

    const price = cartAdded.map(product => product.price);
    const total = (arr) => {
        let sum = 0;
        arr.forEach(num => {
            sum += num;
        });
        return sum;
    }

    return (
        <div className="mt-10 border-2 border-gray-300 p-10 space-y-6 rounded-2xl">
            <p className="text-2xl font-bold">Your Cart</p>
            <div className="space-y-4">
                {
                    cartAdded.map(addedProduct => <AddedProduct key={addedProduct.id} addedProduct={addedProduct}></AddedProduct>)
                }
            </div>
            <div className="flex justify-between">
                <p className="text-gray-400">Total:</p>
                <p className="text-2xl font-bold">${total(price)}</p>
            </div>
            <div onClick={() => clear()} className='btn w-full px-4 py-3 rounded-full bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white'>Proceed To Checkout</div>
        </div>
    )
}