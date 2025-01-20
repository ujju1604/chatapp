import React from 'react'

function Chatuser() {
    return (
        <>
            <div className='pl-5 pt-5 pb-3 h-[12vh] flex space-x-4 bg-gray-900 hover:bg-gray-600 duration-300'>
                <div className="avatar online">
                    <div className="w-16 rounded-full">
                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                </div>
                <div>
                <h1 className='font-bold text-xl'>ujjal das</h1>
                <span className='text-sm'>Online</span>
            </div>
            </div>

        </>
    )
}

export default Chatuser
