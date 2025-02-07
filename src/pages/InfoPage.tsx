import React, { useState } from 'react';

export default function InfoPage() {
  return (
    <div className='overflow-hidden w-full h-screen bg-primary flex justify-center items-center'>
      <div className='relative mx-auto'>
        <div className='absolute -top-20 left-1/2 transform -translate-x-1/2 w-120 h-50 bg-[#B5EFFF] flex items-center justify-center rounded-2xl'>
          <div className='text-[#69b6cb] font-gangwon-edu text-xl pb-15'>
            내 삶에서 가장 좋은 날은 오늘이야
          </div>
        </div>
        <div className='relative top-10 left-1/2 transform -translate-x-1/2 w-90 h-60'>
          <img
            src='/computer.svg'
            className='absolute top-1 left-1/2 transform -translate-x-1/2 w-45'
          />
          <div className=''>
            <img
              src='/mail.svg'
              className='absolute top-12 left-1/2 transform -translate-x-1/2 w-10 cursor-pointer'
            />
            <span className='relative top-11 left-1/2 transform translate-x-4 flex size-3'>
              <span className='absolute -top-0.5 -left-0.5 inline-flex h-full w-full animate-ping rounded-full bg-[#ff7b96] opacity-80'></span>
              <span className='relative inline-flex size-2 rounded-full bg-[#FF5375]'></span>
            </span>
          </div>
          <img src='/desk.svg' className='absolute bottom-0' />
          <img src='/book.svg' className='absolute right-6 bottom-3.5 w-7' />
          <img src='/stand.svg' className='absolute top-7.5 left-6 w-15' />
          <img src='/dangdangee.svg' className='absolute top-21.5 right-6 w-10' />
          <div className='absolute left-10 bottom-2 text-white text-sm'>
            <p>Frontend Engineer</p>
            <p className='font-bold'>GyeongRyun Kim</p>
          </div>
        </div>
      </div>
    </div>
  );
}
