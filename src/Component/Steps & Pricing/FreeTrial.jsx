export default function FreeTrial() {
    return (
        <div className="w-full py-20 px-6 bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-center text-white">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                    Ready To Transform Your Workflow?
                </h1>
                <p className="text-lg md:text-xl text-white/80 mb-10">
                    Join thousands of professionals who are already using Digitools to work smarter.
                    <br />
                    Start your free trial today.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
                    <button className="btn bg-white px-6 py-3 rounded-full font-semibold">
                        <span className="bg-linear-to-r from-[#4f39f6] to-[#9514fa] bg-clip-text text-transparent">
                            Explore Products
                        </span>
                    </button>
                    <button className="btn px-6 py-3 rounded-full font-semibold border border-white text-white bg-transparent">
                        View Pricing
                    </button>
                </div>
                <p className="text-sm text-white/70">
                    14-day free trial • No credit card required • Cancel anytime
                </p>
            </div>
        </div>
    );
}