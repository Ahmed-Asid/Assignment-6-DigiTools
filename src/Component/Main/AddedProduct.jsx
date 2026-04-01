import { toast } from 'react-toastify';

export default function AddedProduct({ addedProduct, removeProduct }) {

    const handleRemove = () => {
        removeProduct(addedProduct);
        toast.error(`${addedProduct.name} removed from the cart!`)
    }

    return (
        <div className="p-4 rounded-2xl bg-gray-100 flex justify-between items-center">
            <div className="flex flex-col sm:flex-row gap-4">
                <div className="p-3 border border-gray-200 w-fit rounded-full bg-white">
                    <img src={`${addedProduct.icon}`} alt="" />
                </div>
                <div>
                    <p className="text-xl">{addedProduct.name}</p>
                    <p className="text-gray-400">${addedProduct.price}</p>
                </div>
            </div>
            <div onClick={() => handleRemove()} className="btn btn-ghost text-red-500">Remove</div>
        </div>
    )
}