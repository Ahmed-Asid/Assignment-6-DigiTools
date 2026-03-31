export default function Stats() {
    return (
        <div className="bg-linear-to-r from-[#4f39f6] to-[#9514fa] flex justify-center items-center py-15 text-white mt-15">
            <div className="space-y-3">
                <p className="font-extrabold text-6xl">50K+</p>
                <p className="text-2xl font-medium">Active User</p>
            </div>
            <div className="w-0.5 h-20 bg-gray-300 mx-30"></div>
            <div className="space-y-3">
                <p className="font-extrabold text-6xl">200+</p>
                <p className="text-2xl font-medium">Premium Tools</p>
            </div>
            <div className="w-0.5 h-20 bg-gray-300 mx-30"></div>
            <div className="space-y-3">
                <p className="font-extrabold text-6xl">4.9</p>
                <p className="text-2xl font-medium">Rating</p>
            </div>
        </div>
    )
}