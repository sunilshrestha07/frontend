import React from 'react'
import { Link } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import Foods from '../components/Foods'

export default function Home() {
  return (
    <>
    <div className="">
      <div className=" md:flex gap-10">
        {/* sidebar */}
        <div className=" hidden md:block  md:w-1/6 z-10 ">
          <Sidebar/>
        </div>

        {/* homecomponets */}
        <div className=" md:w-9/12 md:mx-10 sm:mt-3 ">
          {/* purpleBox section */}
          <div className=" mx-2 mt-3 mb-3">
            <div className=" w-full  h-32 sm:h-36 md:h-40 lg:h-48 rounded-3xl bg-customPurple flex justify-evenly items-center">
              <div className=" font-hanuman text-center font-medium w-3/4 lg:w-2/4">
                <div className=" text-sm mb-2 md:text-lg">
                  <p>Fast and Yummy</p>
                  <p>Good for Your Tummy</p>
                </div>
                <div className="mb-2">
                  <p className=' text-xs md:text-sm'>After order has been paid and sent it can be counted in the system</p>
                </div>
                <div className=" flex justify-center items-center">
                  <Link to='' className=' bg-yellow-100 font-hanuman rounded-lg text-xs md:text-sm py-1 px-2 text-center'>View Details</Link>
                </div>
              </div>
                <div className="  ">
                  <img className=' lg:h-full lg:w-60 mix-blend-color-burn ' src="/assets/ilu.svg" alt="" />
                </div>
            </div>
          </div>

          {/* scroll box with food category */}
          <div className=" mx-2">
            <div className=" w-full h-28 sm:h-[8.5rem] overflow-x-scroll lg:overflow-hidden lg:w-11/12 rounded-3xl scrollbar-hide lg:flex lg:justify-center ">
                <div className="flex w-screen h-full gap-3 sm:gap-5 md:gap-6 justify-center lg:ml-16">
                    <div className="flex-none w-20 sm:w-28 h-[6.5rem] sm:h-[8.5rem] bg-gray-100  rounded-lg overflow-hidden">
                      <Link to='/foodview'>
                      <img src="/assets/bf.png" alt="Image" className="w-24 sm:w-32 aspect-square object-cover -mt-1"/>
                      <p className='text-xs font-hanuman  flex flex-col  items-center mt-1'>BreakFast</p>
                      </Link>
                    </div> 
                    <div className="flex-none w-20 sm:w-28 h-[6.5rem] sm:h-[8.5rem] bg-gray-100  rounded-lg overflow-hidden">
                      <Link to='/foodview'>
                      <img src="/assets/sna.jpg" alt="Image" className="w-24 sm:w-32 aspect-square object-cover -mt-1"/>
                      <p className='text-xs font-hanuman  flex flex-col  items-center mt-1'>Snacks</p>
                      </Link>
                    </div> 
                    <div className="flex-none w-20 sm:w-28 h-[6.5rem] sm:h-[8.5rem] bg-gray-100  rounded-lg overflow-hidden">
                      <Link to='/foodview'>
                      <img src="/assets/salad.jpg" alt="Image" className="w-24 sm:w-32 aspect-square object-cover -mt-1"/>
                      <p className='text-xs font-hanuman  flex flex-col  items-center mt-1'>Salad</p>
                      </Link>
                    </div> 
                    <div className="flex-none w-20 sm:w-28 h-[6.5rem] sm:h-[8.5rem] bg-gray-100  rounded-lg overflow-hidden">
                      <Link to='/foodview'>
                      <img src="/assets/drinks.jpg" alt="Image" className="w-24 sm:w-32 aspect-square object-cover -mt-1"/>
                      <p className='text-xs font-hanuman  flex flex-col  items-center mt-1'>Drinks</p>
                      </Link>
                    </div> 
                    <div className="flex-none w-20 sm:w-28 h-[6.5rem] sm:h-[8.5rem] bg-gray-100  rounded-lg overflow-hidden">
                      <Link to='/foodview'>
                      <img src="/assets/ma.jpg" alt="Image" className="w-24 sm:w-32 aspect-square object-cover -mt-1"/>
                      <p className='text-xs font-hanuman  flex flex-col  items-center mt-1'>Main</p>
                      </Link>
                    </div> 
                    <div className="flex-none w-20 sm:w-28 h-[6.5rem] sm:h-[8.5rem] bg-gray-100  rounded-lg overflow-hidden">
                      <Link to='/foodview'>
                      <img src="/assets/bf.png" alt="Image" className="w-24 sm:w-32 aspect-square object-cover -mt-1"/>
                      <p className='text-xs font-hanuman  flex flex-col  items-center mt-1'>Coffee</p>
                      </Link>
                    </div> 
                    <div className="flex-none w-20 sm:w-28 h-[6.5rem] sm:h-[8.5rem] bg-gray-100  rounded-lg overflow-hidden">
                      <Link to='/foodview'>
                      <img src="/assets/bf.png" alt="Image" className="w-24 sm:w-32 aspect-square object-cover -mt-1"/>
                      <p className='text-xs font-hanuman  flex flex-col  items-center mt-1'>BreakFast</p>
                      </Link>
                    </div> 
                </div>
            </div>
          </div>
          <div className=" mx-2">
            <Foods/>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
