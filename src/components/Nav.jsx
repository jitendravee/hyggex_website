import React from 'react'
import Rectangle from '../assets/R1.png'
import Home from '../assets/Home.svg';
import Arrow from '../assets/Arrow.svg';
const Nav = () => {
  return (
    <div className='flex flex-col'>
      <div className='flex flex-row justify-between p-4  px-8 md:px-24  items-center'>
      <h1 className='text-xl font-semibold flex flex-row items-center gap-1 text-[#06286E]'><img alt='logo' className="bg-white fill-[#06286E]" src={Rectangle  }/> HyggeX</h1>  
        <ul className='flex flex-row gap-4 md:gap-9 text-md font-normal items-center'>
          <li>Home</li>
          <li>Flashcard</li>
          <li>Contact</li>
          <li>FAQ</li>
          <button className=' bg-gradient-to-r from-[#06286E] to-[#164EC0] p-2 px-8 rounded-3xl text-white' type='login'>Login</button>
        </ul>
      </div>
      <div className=' py-8 px-8 md:px-24 flex flex-row items-center'>
<img alt='Home' src={Home} />
<img alt='Arrow' src={Arrow} />
<p className='text-[#696671]'>Flashcard</p>
<img alt='Arrow' src={Arrow} />
<p className='text-[#696671]'>Mathematics</p>
<img alt='Arrow' src={Arrow} />
<p className='text-[#06286E]'>Relation and Function</p>

      </div>
      <div className='p-4 px-8 text-[32px] font-medium  text-gradient-to-r from-[#06286E] to-[#164EC0] md:px-24'>
  <h1 className='text-[#06286E]'>Relations and Functions ( Mathematics )</h1>
</div>
    </div>
  )
}

export default Nav