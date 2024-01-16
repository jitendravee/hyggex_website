import React from 'react'
import { MdLightbulbOutline } from "react-icons/md";
import { HiOutlineSpeakerWave } from "react-icons/hi2";
import { IoReload } from "react-icons/io5";
import { MdFullscreen } from "react-icons/md";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import logo from '../assets/logo2.svg';
import R2 from '../assets/R2.png'
import { FaCirclePlus } from "react-icons/fa6";


const Hero = () => {
  return (
    <div>
    <div className='flex flex-col items-center'>
      <div>
        <ul className='flex flex-row justify-center items-center text-[20px] mt-6 gap-[40px] text-[#696671] '>
          <li className='hover:underline underline-offset-[9px] hover:text-[#06286E]'>Study</li>
          <li className='hover:underline underline-offset-[9px] hover:text-[#06286E]'>Quiz</li>
          <li className='hover:underline underline-offset-[9px] hover:text-[#06286E]'>Test</li>
          <li className='hover:underline underline-offset-[9px] hover:text-[#06286E]'>Game</li>
          <li className='hover:underline underline-offset-[9px] hover:text-[#06286E]'>Others</li>
        </ul>
      </div>
      <div className='flex w-[712px] h-[393.194px] bg-gradient-to-r from-[#06286E] to-[#164EC0] rounded-3xl mt-5 justify-between items-start '>
        <MdLightbulbOutline className='fill-white w-[34.006px] h-[34.006px] m-3'/> 
         <p className='mt-40 text-[38.257px] text-white font-bold  '>9 + 6 + 7x - 2x - 3</p>
        <HiOutlineSpeakerWave className='fill-white w-[34.006px] h-[34.006px] m-3'/>
      

      </div>
      <div className='w-[30px] h-[30.019px] mt-6 text-[24px] text-[#202B37] font-bold i'>
        <ul className='flex flex-row items-center justify-center gap gap-[43px]'>
          <li><IoReload className='fill-bg-gradient-to-r from-[#06286E] to-[#164EC0] h-[30px] w-[30px] fill-[#06286E] '/></li>
          <li className='flex flex-row items-center gap-[25px]'><IoIosArrowDropleftCircle className='h-[60px] w-[60px] fill-[#06286E]' />01/10<IoIosArrowDroprightCircle  className='h-[60px] w-[60px] fill-[#06286E] '/></li>
          <li><MdFullscreen className='fill-bg-gradient-to-r from-[#06286E] to-[#164EC0] h-[30px] w-[30px] fill-[#06286E]'/></li>
        </ul>
      </div>
    </div>
      <div className=' justify-between flex flex-row mt-20 px-9 md:px-24'>
           <p className='flex flex-row items-center gap-3'><img  alt='rec'src={R2} className='bg-white'/><img alt='logo' src={logo} /></p>
      <p className='text-[#06286E] text-[28px] font-semibold flex flex-row items-center gap-3'><FaCirclePlus className='w-[60px] h-[60px] fill-[#06286E] '/>Create Flashcard</p>
      </div>
    </div>
  )
}

export default Hero