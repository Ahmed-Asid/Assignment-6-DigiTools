import user from '../../assets/user.png';
import box from '../../assets/package.png';
import rocket from '../../assets/rocket.png';

export default function Steps() {
    return (
        <div className="bg-gray-200 mt-30 py-30">
            <div className="w-[90%] md:w-[85%] lg:w-[75%] mx-auto space-y-10 flex flex-col items-center">
                <div className="space-y-4">
                    <p className="text-5xl font-bold">Get Started in 3 Steps</p>
                    <p className="text-gray-400">Start using premium digital tools in minutes, not hours.</p>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7.5">
                    <div className="border border-gray-300 bg-white rounded-2xl px-6 py-20 space-y-4 relative flex flex-col justify-center items-center text-center">
                        <p className="py-1.5 px-3 font-semibold text-white bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-center rounded-full absolute top-2 right-2">01</p>
                        <div className="bg-linear-to-r from-[#4f39f633] to-[#9514fa33] p-5 rounded-full w-fit">
                            <img src={user} alt="" />
                        </div>
                        <p className='text-2xl font-bold'>Create Account</p>
                        <p className='text-gray-400'>Sign up for free in seconds. No credit card required to get started.</p>
                    </div>
                    <div className="border border-gray-300 bg-white rounded-2xl px-6 py-20 space-y-4 relative flex flex-col justify-center items-center text-center">
                        <p className="py-1.5 px-3 font-semibold text-white bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-center rounded-full absolute top-2 right-2">02</p>
                        <div className="bg-linear-to-r from-[#4f39f633] to-[#9514fa33] p-5 rounded-full w-fit">
                            <img src={box} alt="" />
                        </div>
                        <p className='text-2xl font-bold'>Choose Products</p>
                        <p className='text-gray-400'>Browse our catalog and select the tools
                            that fit your needs.</p>
                    </div>
                    <div className="border border-gray-300 bg-white rounded-2xl px-6 py-20 space-y-4 relative flex flex-col justify-center items-center text-center">
                        <p className="py-1.5 px-3 font-semibold text-white bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-center rounded-full absolute top-2 right-2">03</p>
                        <div className="bg-linear-to-r from-[#4f39f633] to-[#9514fa33] p-5 rounded-full w-fit">
                            <img src={rocket} alt="" />
                        </div>
                        <p className='text-2xl font-bold'>Start Creating</p>
                        <p className='text-gray-400'>Download and start using your premium
                            tools immediately.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}