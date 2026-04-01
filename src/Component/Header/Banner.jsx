import { Play } from "lucide-react";
import hero from '../../assets/banner.png'


export default function Banner() {
    return (
        <div className="flex flex-col md:flex-row items-center gap-15 mt-15">
            <div className="flex flex-col gap-8 md:w-[60%]">

                <div className="space-y-4">
                    <div className="px-4 py-2 rounded-full bg-[#e1e7ff] inline-flex gap-2 items-center">
                        <div className="w-4 h-4 rounded-full bg-linear-to-r from-[#4f39f633] to-[#9514fa33] flex items-center justify-center">
                            <div className="w-3 h-3 rounded-full bg-linear-to-r from-[#4f39f666] to-[#9514fa66] flex items-center justify-center">
                                <div className="w-1.5 h-1.5 rounded-full bg-linear-to-r from-[#4f39f6] to-[#9514fa]"></div>
                            </div>
                        </div>
                        <span className="bg-linear-to-r from-[#4f39f6] to-[#9514fa] bg-clip-text text-transparent">New: AI-Powered Tools Available</span>
                    </div>

                    <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold">Supercharge Your Digital Workflow</p>
                    <p className="text-gray-400 text-lg">Access premium AI tools, design assets, templates, and productivity <br /> software—all in one place. Start creating faster today. <br /> Explore Products
                    </p>
                </div>

                <div className="flex gap-4">
                    <div className='btn px-4 py-3 rounded-full bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white'>Get Started</div>
                    <div className='btn px-4 py-3 rounded-full bg-linear-to-r from-[#4f39f6] to-[#9514fa] border border-[#4f39f6] bg-clip-text text-transparent'><Play color="#4f39f6" strokeWidth={1.5} /> Watch Demo</div>
                </div>
            </div>

            <div className="object-contain">
                <img src={hero} alt="" className="w-full" />
            </div>
        </div>
    )
}