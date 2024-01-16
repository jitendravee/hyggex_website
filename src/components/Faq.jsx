import React, { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";

const Faq = () => {
  const [Bar, setBar] = useState('');
  const [r, setr] = useState('');
  const [ar, setar] = useState('');

  const toogleBar = () => {
    setBar(!Bar);
  };
  const toogler = () => {
    setr(!r);
  };
  const tooglear = () => {
    setar(!ar);
  };

  return (
    <div className='px-9 md:px-24 mt-32'>
      <div>
        <h1 className='text-[48px] font-bold tracking-[0.24px] text-[#06286E]'>FAQ</h1>
        <ul className='flex flex-col py-16 text-[24px] font-semibold gap-9'>
        <li className='flex flex-row items-center justify-between rounded-xl py-17 border p-6' ><div className=''>Can education flashcards be used for test preparation?<div className=''> <IoIosArrowDown className='block cursor-pointer  inset-y-0 right-0' onClick={toogler} />{
            r && (
              <>
                <p className='text-md font-light '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus voluptatum quod soluta sunt repellat at nulla ea maxime, odit sint ullam in quis quasi consequatur ducimus repudiandae iusto consectetur accusantium.</p>
              </>
            )
          }</div></div> </li>
          <li className='flex flex-row items-center justify-between rounded-xl py-17 border p-6' ><div className=''>Can education flashcards be used for test preparation?<div className=''> <IoIosArrowDown className='block cursor-pointer  inset-y-0 right-0' onClick={tooglear} />{
            ar && (
              <>
                <p className='text-md font-light '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus voluptatum quod soluta sunt repellat at nulla ea maxime, odit sint ullam in quis quasi consequatur ducimus repudiandae iusto consectetur accusantium.</p>
              </>
            )
          }</div></div> </li>
          <li className='flex flex-row items-center justify-between rounded-xl py-17 border p-6' ><div className=''>Can education flashcards be used for test preparation?<div className=''> <IoIosArrowDown className='block cursor-pointer  inset-y-0 right-0' onClick={toogleBar} />{
            Bar && (
              <>
                <p className='text-md font-light '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus voluptatum quod soluta sunt repellat at nulla ea maxime, odit sint ullam in quis quasi consequatur ducimus repudiandae iusto consectetur accusantium.</p>
              </>
            )
          }</div></div> </li>
        </ul>
      </div>
    </div>
  );
};

export default Faq;