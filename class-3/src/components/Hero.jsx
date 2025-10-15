import React from 'react'

function Hero() {
return (
    <div className="flex flex-col md:flex-row items-center justify-between mt-20 px-[150px] bg-zinc-50">
        <div className="md:w-1/2 w-full md:pr-12">
            <h1 className="text-5xl font-bold mb-6">Welcome to Our Website</h1>
            <p className="text-lg text-gray-600 mb-8">
                We provide the best services to help you succeed.
            </p>
            <div className="flex">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
                    Get Started
                </button>
                <button className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300 transition duration-300 ml-4">
                    Learn More
                </button>
            </div>
        </div>
        <div className="md:w-1/2 w-full mt-10 md:mt-0 flex justify-center">
            <img
                src="../src/assets/images/car1.png"
                alt="Hero"
                className="rounded-lg shadow-lg max-w-xs md:max-w-md"
            />
        </div>
    </div>
)
}

export default Hero
