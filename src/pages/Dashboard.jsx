import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import SideDashboard from '../components/SideDashboard'
import DashProfile from '../components/DashProfile'
import Navbar from '../pages/Navbar'

export default function Dashboard() {
  const location = useLocation()
  const [tab,setTab]=useState('')
  
  useEffect(()=>{
    const UrlParams = new URLSearchParams(location.search)
    const tabFromUrl = UrlParams.get('tab')
    if(tabFromUrl){
      setTab(tabFromUrl)
    }
  },[location.search])
  return (
   <>
   <Navbar/>
    <div className="md:flex ">
      <div className=" md:w-1/4 ">
        {/* this will be for sideDashboard */}
        <div className=" md:hidden ">
          <img src="./src/assets/lo.png" alt="" />
        </div>
        <div className=" hidden md:block">
          <SideDashboard/>
        </div>
      </div>
      <div className=" h-full md:w-3/4">
        {/* this is for the tab provided */}
        {tab === 'profile' && <DashProfile/>}
      </div>
    </div>
   </>
  )
}
