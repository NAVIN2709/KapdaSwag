import React from 'react'

const Footer = () => {
  return (
    <div className="bg-[#e04696] h-[60px] w-screen fixed bottom-0 flex justify-around items-center p-2">
        <img src="/house.svg" className='h-[35px]' alt="home"></img>
        <img src="/chat.svg" className='h-[45px]'></img>
        <img src="/heart.svg" className='h-[40px]'></img>
        <img src="/profile.svg" className='h-[35px]'></img>
    </div>
  )
}

export default Footer
