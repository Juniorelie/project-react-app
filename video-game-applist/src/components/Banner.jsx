import React from 'react'
import { useEffect } from 'react'

function Banner({gameBanner}) {
    useEffect(() => {
        console.log("gameBanner", gameBanner)
    })
  return (
    <div>
        <div className='absolute ml-1'>
            <h2 className="text-[24px] text-white font-bold">{gameBanner.name}</h2>
            <button className="bg-red-600 text-white font-bold px-2 p-1">Order Now</button>
        </div>
        <img src={gameBanner.background_image} alt="Game Image"
        className="md:h-[320px] w-full object-cover rounded-xl" />
    </div>
  )
}

export default Banner
