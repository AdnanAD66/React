import React from 'react'

function Footer() {
return (
    <div className="w-full bottom-0 left-0">
        <div className='flex justify-between items-center  bg-blue-800 px-[150px] py-6 text-amber-50'>
            <h1 className='text-3xl font-bold '>Footer</h1>
            <ul className='flex gap-8 text-weight-semibold text-lg cursor-pointer'>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Contact</li>
                <li>Help</li>
            </ul>
        </div>
    </div>
)
}

export default Footer
