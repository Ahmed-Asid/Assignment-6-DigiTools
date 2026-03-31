import { Check } from "lucide-react"


export default function Product({ product, getProduct, cartAdded }) {

    const isDisabled = cartAdded.some(p => p.id === product.id)
    const handleBuy = (product) => {
        getProduct(product);
    }

    return (
        <div className="p-6 space-y-4 border-2 border-gray-200 rounded-2xl relative">
            <div className={`absolute top-2 right-2 badge badge-soft ${product.tagType === 'new' ? 'badge-success' : product.tagType === 'popular' ? 'badge-primary' : 'badge-warning'}`}>{product.tag}</div>
            <div className="p-3 border border-gray-100 inline-flex rounded-full">
                <img src={`${product.icon}`} alt="" />
            </div>
            <p className="text-2xl font-bold">{product.name}</p>
            <p className="text-[14px] text-gray-500">{product.description}</p>
            <p><span className="text-2xl font-bold">${product.price}</span><span className="text-gray-500">/{product.period}</span></p>
            <div className="text-gray-600 font-medium">
                <p className="flex gap-2"><Check color="#04f62c" />{product.features[0]}</p>
                <p className="flex gap-2"><Check color="#04f62c" />{product.features[1]}</p>
                <p className="flex gap-2"><Check color="#04f62c" />{product.features[2]}</p>
            </div>
            <button onClick={() => handleBuy(product)} className={`btn w-full px-4 py-3 rounded-full text-white ${isDisabled ? 'bg-green-200' : 'bg-linear-to-r from-[#4f39f6] to-[#9514fa]'}`} disabled={isDisabled}>{isDisabled ? 'Added to Cart' : 'Buy Now'}</button>
        </div>
    )
}