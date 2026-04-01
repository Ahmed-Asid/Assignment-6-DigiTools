import { useEffect, useState } from "react";

export default function Pricing() {
    const [pricing, setPricing] = useState([]);

    useEffect(() => {
        fetch("/pricing.json")
            .then((res) => res.json())
            .then((data) => setPricing(data.pricing));
    }, []);

    return (
        <div className="w-[90%] md:w-[85%] lg:w-[75%] mx-auto py-30 space-y-10 flex flex-col items-center">
            <div className="grid md:grid-cols-3 gap-6 w-full">
                {pricing.map((price) => (
                    <div key={price.id} className={`p-6 rounded-2xl border border-gray-200 ${price.highlight ? 'bg-linear-to-r from-[#4f39f6] to-[#9514fa]' : 'bg-gray-50'} flex flex-col space-y-6 relative`}>
                        {price.highlight && <div className="badge badge-warning text-amber-700 absolute -top-2 right-32">{price.tag}</div>}
                        <div className="space-y-3">
                            <p className={`text-xl font-bold ${price.highlight && 'text-white'}`}>{price.name}</p>
                            <p className={`text-gray-500 text-sm ${price.highlight && 'text-white'}`}>{price.description}</p>
                            <p>
                                <span className={`text-4xl font-bold ${price.highlight && 'text-white'}`}>${price.price}</span>
                                <span className={`text-gray-500 ${price.highlight && 'text-white'}`}>/{price.period}</span>
                            </p>
                            <div className={`text-gray-600 space-y-2 text-sm ${price.highlight && 'text-white'}`}>
                                {price.features.map((f, i) => (
                                    <p key={i}>✓ {f}</p>
                                ))}
                            </div>
                        </div>
                        <button className={`btn mt-auto w-full py-3 rounded-full  ${price.highlight ? 'bg-white' : 'bg-linear-to-r from-[#4f39f6] to-[#9514fa]'}`}>
                            <p className={`font-semibold ${price.highlight ? 'bg-clip-text text-transparent bg-linear-to-r from-[#4f39f6] to-[#9514fa]' : 'text-white'}`}>
                                {price.buttonText}
                            </p>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}