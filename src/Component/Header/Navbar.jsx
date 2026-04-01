import { Menu, ShoppingCart } from 'lucide-react';

export default function Navbar() {
    return (
        <div className='flex justify-between font-semibold items-center py-4'>
            <div className='flex items-center'>
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <Menu></Menu>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><a href="#">Products</a></li>
                        <li><a href="#">Features</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">Testimonials</a></li>
                        <li><a href="#">FAQ</a></li>
                    </ul>
                </div>
                <p className='text-2xl lg:text-3xl font-bold bg-linear-to-r from-[#4f39f6] to-[#9514fa] bg-clip-text text-transparent py-1'>DigiTools</p>
            </div>
            <div className='hidden lg:flex'>
                <ul className='flex gap-6'>
                    <li><a href="#">Products</a></li>
                    <li><a href="#">Features</a></li>
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#">Testimonials</a></li>
                    <li><a href="#">FAQ</a></li>
                </ul>
            </div>
            <div className='flex items-center'>
                <div className="dropdown dropdown-end inline-block sm:hidden">
                    <div tabIndex={0} role="button" className="btn btn-ghost sm:hidden">
                        <Menu></Menu>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content right-0 bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow flex flex-col gap-1 justify-center">
                        <ShoppingCart></ShoppingCart>
                        <a href="#"><p>Login</p></a>
                        <div className='btn px-2 py-1.5 md:px-4 md:py-3 rounded-[1000px] bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white'>Get Started</div>
                    </ul>
                </div>

                <div className='hidden items-center gap-2 md:gap-4 sm:flex'>
                    <ShoppingCart></ShoppingCart>
                    <a href="#"><p>Login</p></a>
                    <div className='btn px-2 py-1.5 md:px-4 md:py-3 rounded-[1000px] bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white'>Get Started</div>
                </div>

            </div>
        </div>
    )
}