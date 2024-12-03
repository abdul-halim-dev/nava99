import React, { useState } from 'react'
import { BsClock } from "react-icons/bs";
import { NavLink } from 'react-router-dom'

const Promotion = () => {

   


  return (
    <div className='w-full flex items-center justify-center flex-col gap-8  '>

      <div className='w-full flex items-center justify-center flex-col'>
        {/* here is banner card start  */}
        <div className='hidden lg:flex w-full h-[200px] '>
          <img className='w-full h-full object-cover' src="./src/assets/image/banner1.jpg" alt="" />
        </div>

        {/* here is header section start  */}
        <nav className=' shadow w-full bg-[#d9d9d9] flex items-center justify-center py-4 overflow-x-auto lg:overflow-x-hidden '>
          <ul className='flex items-center justify-center gap-3 px-3 flex-wrap '>
      
            <li>
              <NavLink className="text-[#1c1c1c] px-4 bg-[#9e9e9e] sm:bg-transparent sm:hover:bg-[#c9c9c9] sm:hover:border-[1px] py-[2px] sm:border-[#f56908] rounded-md duration-200 transition-all text-lg font-semibold"> All </NavLink>
            </li>
            <li>
              <NavLink className="text-[#1c1c1c] px-4 hover:bg-[#c9c9c9] hover:border-[1px] py-[2px] border-[#f56908] rounded-md duration-200 transition-all text-lg font-semibold"> Sports </NavLink> </li>
            <li >         <NavLink className='text-[#1c1c1c]  hover:bg-[#c9c9c9] hover:border-[1px] py-[2px] border-[#f56908] px-4 rounded-md duration-200 transition-all text-lg font-semibold '> Live Casino </NavLink>
            </li>
            <li>         <NavLink className='text-[#1c1c1c]  hover:bg-[#c9c9c9] hover:border-[1px] py-[2px] border-[#f56908] px-4 rounded-md duration-200 transition-all text-lg font-semibold '> Slots </NavLink>
            </li>
            <li>         <NavLink className='text-[#1c1c1c]  hover:bg-[#c9c9c9] hover:border-[1px] py-[2px] border-[#f56908] px-4 rounded-md duration-200 transition-all text-lg font-semibold '> Table Games </NavLink>
            </li>
            <li>         <NavLink className='text-[#1c1c1c]  hover:bg-[#c9c9c9] hover:border-[1px] py-[2px] border-[#f56908] px-4 rounded-md duration-200 transition-all text-lg font-semibold '> Lottery  </NavLink>
            </li>
            <li>        <NavLink className='text-[#1c1c1c]  hover:bg-[#c9c9c9] hover:border-[1px] py-[2px] border-[#f56908] px-4 rounded-md duration-200 transition-all text-lg font-semibold '> VIP  </NavLink>
            </li>
            <li>  <NavLink className='text-[#1c1c1c]  hover:bg-[#c9c9c9] hover:border-[1px] py-[2px] border-[#f56908] px-4 rounded-md duration-200 transition-all text-lg font-semibold '> Crash </NavLink> </li>

          </ul>
        </nav>
      </div>

    {/* here is card container start  */}

    <div className='w-full flex items-center justify-center gap-6 flex-wrap px-4'>


    <div className=' rounded-md card_shadow bg-[#ededed]  w-full lg:w-[48%] flex items-center justify-center flex-col gap-3 '>
  <div className='w-full flex items-center justify-center flex-col '>
  <div className='w-full relative card_image '>
      <img className='w-full h-full object-cover' src="./src/assets/image/card1.jpg" alt="" />
    </div>
    <div className='  car_line relative bg-[#ededed] w-full flex items-center justify-center flex-col gap-3 px-3 pt-2 pb-3 '>
    <div className='   z-50 w-full flex items-center justify-between'>
      <h3 className='text-[18px] font-extrabold text-black '>Super Limited Offer 350% Welcome Bonus</h3>
      <span className='hidden lg:flex px-[8px] bg-[#142590] py-[4px] text-white font-semibold text-[12px] '> End in 3 D 7 H  </span>
    </div>
    <div className='w-full flex items-start justify-center gap-2 flex-col '>
      <span className='text-[18px] font-semibold text-[#545454] '>Get it now, Tito 350% Limited Offer !!!</span>
      <span className='text-[12px] font-semibold   flex items-center justify-center gap-2'> <BsClock className='text-xl font-semibold'/> 2023-09-08 20:57:03 to 2024-11-30 23:59:59</span>
    </div>
      <div className='w-full flex items-start justify-start gap-5'>
        <button className='card_button text-white text-[12px] px-2 py-1 font-bold'> Apply Now </button>
        <button className='card_button text-white text-[12px] px-2 py-1 font-bold'> Details </button>
      </div>
    </div>
  </div>


    </div>
     
    <div className=' rounded-md card_shadow bg-[#ededed]  w-full lg:w-[48%] flex items-center justify-center flex-col gap-3 '>
  <div className='w-full flex items-center justify-center flex-col '>
  <div className='w-full relative card_image '>
      <img className='w-full h-full object-cover' src="./src/assets/image/card1.jpg" alt="" />
    </div>
    <div className='  car_line relative bg-[#ededed] w-full flex items-center justify-center flex-col gap-3 px-3 pt-2 pb-3 '>
    <div className='   z-50 w-full flex items-center justify-between'>
      <h3 className='text-[18px] font-extrabold text-black '>Super Limited Offer 350% Welcome Bonus</h3>
      <span className='hidden lg:flex px-[8px] bg-[#142590] py-[4px] text-white font-semibold text-[12px] '> End in 3 D 7 H  </span>
    </div>
    <div className='w-full flex items-start justify-center gap-2 flex-col '>
      <span className='text-[18px] font-semibold text-[#545454] '>Get it now, Tito 350% Limited Offer !!!</span>
      <span className='text-[12px] font-semibold   flex items-center justify-center gap-2'> <BsClock className='text-xl font-semibold'/> 2023-09-08 20:57:03 to 2024-11-30 23:59:59</span>
    </div>
      <div className='w-full flex items-start justify-start gap-5'>
        <button className='card_button text-white text-[12px] px-2 py-1 font-bold'> Apply Now </button>
        <button className='card_button text-white text-[12px] px-2 py-1 font-bold'> Details </button>
      </div>
    </div>
  </div>


    </div>
     
    <div className=' rounded-md card_shadow bg-[#ededed]  w-full lg:w-[48%] flex items-center justify-center flex-col gap-3 '>
  <div className='w-full flex items-center justify-center flex-col '>
  <div className='w-full relative card_image '>
      <img className='w-full h-full object-cover' src="./src/assets/image/card1.jpg" alt="" />
    </div>
    <div className='  car_line relative bg-[#ededed] w-full flex items-center justify-center flex-col gap-3 px-3 pt-2 pb-3 '>
    <div className='   z-50 w-full flex items-center justify-between'>
      <h3 className='text-[18px] font-extrabold text-black '>Super Limited Offer 350% Welcome Bonus</h3>
      <span className='hidden lg:flex px-[8px] bg-[#142590] py-[4px] text-white font-semibold text-[12px] '> End in 3 D 7 H  </span>
    </div>
    <div className='w-full flex items-start justify-center gap-2 flex-col '>
      <span className='text-[18px] font-semibold text-[#545454] '>Get it now, Tito 350% Limited Offer !!!</span>
      <span className='text-[12px] font-semibold   flex items-center justify-center gap-2'> <BsClock className='text-xl font-semibold'/> 2023-09-08 20:57:03 to 2024-11-30 23:59:59</span>
    </div>
      <div className='w-full flex items-start justify-start gap-5'>
        <button className='card_button text-white text-[12px] px-2 py-1 font-bold'> Apply Now </button>
        <button className='card_button text-white text-[12px] px-2 py-1 font-bold'> Details </button>
      </div>
    </div>
  </div>


    </div>
     
    <div className=' rounded-md card_shadow bg-[#ededed]  w-full lg:w-[48%] flex items-center justify-center flex-col gap-3 '>
  <div className='w-full flex items-center justify-center flex-col '>
  <div className='w-full relative card_image '>
      <img className='w-full h-full object-cover' src="./src/assets/image/card1.jpg" alt="" />
    </div>
    <div className='  car_line relative bg-[#ededed] w-full flex items-center justify-center flex-col gap-3 px-3 pt-2 pb-3 '>
    <div className='   z-50 w-full flex items-center justify-between'>
      <h3 className='text-[18px] font-extrabold text-black '>Super Limited Offer 350% Welcome Bonus</h3>
      <span className='hidden lg:flex px-[8px] bg-[#142590] py-[4px] text-white font-semibold text-[12px] '> End in 3 D 7 H  </span>
    </div>
    <div className='w-full flex items-start justify-center gap-2 flex-col '>
      <span className='text-[18px] font-semibold text-[#545454] '>Get it now, Tito 350% Limited Offer !!!</span>
      <span className='text-[12px] font-semibold   flex items-center justify-center gap-2'> <BsClock className='text-xl font-semibold'/> 2023-09-08 20:57:03 to 2024-11-30 23:59:59</span>
    </div>
      <div className='w-full flex items-start justify-start gap-5'>
        <button className='card_button text-white text-[12px] px-2 py-1 font-bold'> Apply Now </button>
        <button className='card_button text-white text-[12px] px-2 py-1 font-bold'> Details </button>
      </div>
    </div>
  </div>


    </div>
     
    <div className=' rounded-md card_shadow bg-[#ededed]  w-full lg:w-[48%] flex items-center justify-center flex-col gap-3 '>
  <div className='w-full flex items-center justify-center flex-col '>
  <div className='w-full relative card_image '>
      <img className='w-full h-full object-cover' src="./src/assets/image/card1.jpg" alt="" />
    </div>
    <div className='  car_line relative bg-[#ededed] w-full flex items-center justify-center flex-col gap-3 px-3 pt-2 pb-3 '>
    <div className='   z-50 w-full flex items-center justify-between'>
      <h3 className='text-[18px] font-extrabold text-black '>Super Limited Offer 350% Welcome Bonus</h3>
      <span className='hidden lg:flex px-[8px] bg-[#142590] py-[4px] text-white font-semibold text-[12px] '> End in 3 D 7 H  </span>
    </div>
    <div className='w-full flex items-start justify-center gap-2 flex-col '>
      <span className='text-[18px] font-semibold text-[#545454] '>Get it now, Tito 350% Limited Offer !!!</span>
      <span className='text-[12px] font-semibold   flex items-center justify-center gap-2'> <BsClock className='text-xl font-semibold'/> 2023-09-08 20:57:03 to 2024-11-30 23:59:59</span>
    </div>
      <div className='w-full flex items-start justify-start gap-5'>
        <button className='card_button text-white text-[12px] px-2 py-1 font-bold'> Apply Now </button>
        <button className='card_button text-white text-[12px] px-2 py-1 font-bold'> Details </button>
      </div>
    </div>
  </div>


    </div>
     
    <div className=' rounded-md card_shadow bg-[#ededed]  w-full lg:w-[48%] flex items-center justify-center flex-col gap-3 '>
  <div className='w-full flex items-center justify-center flex-col '>
  <div className='w-full relative card_image '>
      <img className='w-full h-full object-cover' src="./src/assets/image/card1.jpg" alt="" />
    </div>
    <div className='  car_line relative bg-[#ededed] w-full flex items-center justify-center flex-col gap-3 px-3 pt-2 pb-3 '>
    <div className='   z-50 w-full flex items-center justify-between'>
      <h3 className='text-[18px] font-extrabold text-black '>Super Limited Offer 350% Welcome Bonus</h3>
      <span className='hidden lg:flex px-[8px] bg-[#142590] py-[4px] text-white font-semibold text-[12px] '> End in 3 D 7 H  </span>
    </div>
    <div className='w-full flex items-start justify-center gap-2 flex-col '>
      <span className='text-[18px] font-semibold text-[#545454] '>Get it now, Tito 350% Limited Offer !!!</span>
      <span className='text-[12px] font-semibold   flex items-center justify-center gap-2'> <BsClock className='text-xl font-semibold'/> 2023-09-08 20:57:03 to 2024-11-30 23:59:59</span>
    </div>
      <div className='w-full flex items-start justify-start gap-5'>
        <button className='card_button text-white text-[12px] px-2 py-1 font-bold'> Apply Now </button>
        <button className='card_button text-white text-[12px] px-2 py-1 font-bold'> Details </button>
      </div>
    </div>
  </div>


    </div>
     



    </div>

    </div>
  )
}

export default Promotion