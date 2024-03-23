import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function SideDashboard() {
  const {currentUser}=useSelector((state)=>state.user)
  return (
    <>
     <div className=""> 
            <div className={`w-52 sm:w-48 min-h-[40.3rem] flex flex-col gap-5 lg:gap-12 absolute md:relative  bg-white `}>
                <div className=" flex items-center gap-2 bg-white h-16 justify-center mt-3 md:mt-0 lg:mt-1 rounded-lg">
                  <Link to={'/dashboard?tab=profile'} className='text-lg font-serif'>Profile</Link><span><img className=' h-5 w-5 object-contain' src="/assets/user.png" alt="" /></span>
                </div>
                <div className=" flex items-center gap-2 bg-white h-16 justify-center rounded-lg">
                  <Link to={'/cart'} className='text-lg font-serif'>My Posts</Link><span><img className=' h-5 w-5 object-contain' src="/assets/trolley.png" alt="" /></span>
                </div>
                <div className=" flex items-center gap-2 bg-white h-16 justify-center rounded-lg ">
                  <Link to={'/login'} className='text-lg font-serif'>Logout</Link><span><img className=' h-5 w-5 object-contain' src="/assets/logout.png" alt="" /></span>
                </div>
                
                {/* if user is admin show the add post */}
                <div className="">
                  {currentUser.isAdmin ? (
                    <div className="">
                      <div className=" flex items-center gap-2 bg-white h-16 justify-center rounded-lg ">
                        <Link to={'/login'} className='text-lg font-serif'>Add Post</Link><span><img className=' h-5 w-5 object-contain' src="/assets/logout.png" alt="" /></span>
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
