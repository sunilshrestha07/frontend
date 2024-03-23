import axios from 'axios'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logoutSuccess } from '../Redux/UserSlice'

export default function Sidebar() {
  const {currentUser}=useSelector((state)=>state.user)
  const item = useSelector(state => state.cart.items);
  const itemIncart = item.reduce((total,item)=>total + item.quantity ,0)

  const handelLogout = async()=>{
    try {
      const res = await axios.post('https://backend-n80g.onrender.com/api/logout')
      if(res.status === 200){
        useDispatch(logoutSuccess())
        console.log('logout success')
      }
    } catch (error) {
      console.log(error.message)
    }
  }
  return (
    <>
     <div className=" z-50 "> 
            <div className={`w-52 sm:w-48 min-h-full flex flex-col gap-8 lg:gap-12 absolute md:relative  bg-white `}>
                <div className=" flex items-center gap-2 bg-white h-16 justify-center mt-3 md:mt-0 lg:mt-1 rounded-lg">
                  <Link to={'/profile'} className='text-lg font-serif'>Profile</Link><span><img className=' h-5 w-5 object-contain' src="/assets/user.png" alt="" /></span>
                </div>
                <div className=" flex items-center gap-2 bg-white h-16 justify-center rounded-lg">
                  <Link to={'/'} className='text-lg font-serif'>Home</Link><span><img className=' h-5 w-5 object-contain' src="/assets/home.png" alt="" /></span>
                </div>
                <div className="relative flex items-center gap-2 bg-white h-16 justify-center rounded-lg">
                  <Link to={'/cart'} className='text-lg font-serif'>Cart</Link><span><img className=' h-5 w-5 object-contain' src="/assets/trolley.png" alt="" /></span>
                  <div className=" ">
                    {item.length >0 ? (
                      <div className=" top-0 left-0 bg-red-500 w-4 h-4 flex  text-sm font-hanuman justify-center text-white text-center rounded-full ">{itemIncart}</div>
                    ):(
                      <div className=""></div>
                    )}
                  </div>
                </div>
                <div className=" flex items-center gap-2 bg-white h-16 justify-center rounded-lg">
                  <Link to={'/about'} className='text-lg font-serif'>About</Link><span><img className=' h-5 w-5 object-contain' src="/assets/about.png" alt="" /></span>
                </div>
                <div className=" flex items-center gap-2 bg-white h-16 justify-center rounded-lg ">
                  <Link to={'/login'} className='text-lg font-serif' onClick={handelLogout}>Logout</Link><span><img className=' h-5 w-5 object-contain' src="/assets/logout.png" alt="" /></span>
                </div>
                
                {/* if user is admin show the add post */}
                <div className="">
                  {currentUser.isAdmin ? (
                    <div className="">
                      <div className=" flex items-center gap-2 bg-white h-16 justify-center rounded-lg ">
                        <Link to={'/post'} className='text-lg font-serif'>Add Post</Link><span><img className=' h-5 w-5 object-contain' src="/assets/add.png" alt="" /></span>
                      </div>
                    </div>
                  ):(
                    <div className=""></div>
                  )}
                </div>
            </div>
        </div>
    </>
  )
}
