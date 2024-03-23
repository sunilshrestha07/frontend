import React, { useEffect, useRef, useState } from 'react'
import {useSelector} from 'react-redux'
import Sidebar from '../components/Sidebar'
import { Link } from 'react-router-dom'

export default function Home() {
  const {currentUser}=useSelector((state)=>state.user)
  const [show,setShow]=useState(false)
  const itemsInCart = useSelector(state => state.cart.items);

  const handelSidebar=()=>{
    setShow(!show)
  }

  //to make the sidebar close when clickend outside the sidebar too
  const displayRef = useRef()
  const checkoutsideBox = (e)=>{
    if(show && displayRef.current && !displayRef.current.contains(e.taeget)){
      setShow(!show)
    }
  }

  useEffect(()=>{
    document.addEventListener('mousedown',checkoutsideBox)
  })

  return (
    <div>
      <div className=" ">
        <div className=" flex justify-between mx-2 gap-7 mb-2 ">
          <div className="md:hidden" onClick={handelSidebar}>
            <div className={`${itemsInCart.length > 0 && !show ? 'bg-red-500 w-2 h-2 absolute rounded-full top-2 left-10':''}`}></div>
            <img className={`h-10 w-8  object-contain `} src={`${show ? '/assets/x.png':'/assets/menu.png'}`} alt="" />
          </div>
          <div className="hidden md:block ">
            <Link to='/'><p className=' font-hantay text-2xl font-medium mt-2 md:ml-11'>Hantay</p></Link>
          </div>
          <div className=" ">
            <input className=' py-1 rounded-lg mt-2' type="search" placeholder='Search' name="" id="" />
          </div>
          <div className="">
            <Link to={'/profile'}><img className=' h-8 w-8 object-cover rounded-full mt-2 lg:mr-11' src={currentUser.profilePicture} alt="" /></Link>
          </div>
        </div>
        {/* sidebar */}
        <div className={`${show ? ' -ml-5 ': '-ml-[90%]'} transition-all ease-in-out duration-300  md:hidden`} ref={displayRef}>
          <Sidebar/>
        </div>
      </div>
    </div>
  )
}
