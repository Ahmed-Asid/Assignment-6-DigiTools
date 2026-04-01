import { FaInstagram, FaFacebookF, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
    return (
        <footer className="bg-[#0b1120] text-gray-400 py-16 px-10 font-sans">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 pb-12">

                    <div className="lg:col-span-2 max-w-sm">
                        <h2 className="text-white text-3xl font-bold mb-4">DigiTools</h2>
                        <p className="text-sm leading-relaxed">
                            Premium digital tools for creators, professionals, and businesses.
                            Work smarter with our suite of powerful tools.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4 text-lg">Product</h3>
                        <ul className="space-y-3 text-sm">
                            <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Templates</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
                        </ul>
                    </div>

                    <div>
                        <p className="text-white font-semibold mb-4 text-lg">Company</p>
                        <ul className="space-y-3 text-sm">
                            <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
                        </ul>
                    </div>

                    <div>
                        <p className="text-white font-semibold mb-4 text-lg">Resources</p>
                        <ul className="space-y-3 text-sm mb-8">
                            <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <p className="text-white font-semibold mb-4 text-lg">Social Links</p>
                        <div className="flex gap-3">
                            <a href="#" className="btn btn-circle btn-sm bg-white border-none hover:bg-gray-200">
                                <FaInstagram size={18} className="text-[#0b1120]" />
                            </a>
                            <a href="#" className="btn btn-circle btn-sm bg-white border-none hover:bg-gray-200">
                                <FaFacebookF size={16} className="text-[#0b1120]" />
                            </a>
                            <a href="#" className="btn btn-circle btn-sm bg-white border-none hover:bg-gray-200">
                                <FaXTwitter size={16} className="text-[#0b1120]" />
                            </a>
                        </div>
                    </div>

                </div>
                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
                    <p>© 2026 Digitools. All rights reserved.</p>
                    <div className="flex gap-8 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-white transition-colors">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};