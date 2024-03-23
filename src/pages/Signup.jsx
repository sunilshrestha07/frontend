import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import OAuth from '../components/Oauth'

export default function Login() {
    const navigate = useNavigate()
    //holds data
    const [formData,setFormData]=useState({
        name:'',
        email:'',
        password:''
    })
    //store data when changed
    const handelChange=(e)=>{
        setFormData({...formData,[e.target.id]:e.target.value})
    }
    //handel login
    const handelSubmit= async(e)=>{
        e.preventDefault()
        try {
            const res = await axios.post('https://backend-n80g.onrender.com/api/user/signup',formData)
            if(res.status === 200){
                console.log(formData)
                navigate('/login')
            }
        } catch (error) {
           console.log(error.message) 
        }
    }
  return (
    <div className=''>
         <div className=" bg-gradient-to-r from-blue-300   to-blue-100 w-full min-h-screen">
            <div className=" ">
                <p className="text-5xl font-hantay text-center  pt-3 sm:text-6xl md:text-7xl lg:text-8xl ">Hantay</p>
                <p className='text-sm sm:text-lg md:text-xl lg:text-2xl text-center font-serif'>-Where every flavour tells a story</p>
            </div>
            <div className=" flex flex-col-reverse  gap-5  lg:gap-0">
                <div className=" lg:w-4/5  lg:ml-32 xl:ml-36">
                    <div className=" flex flex-col items-center ">
                        <div className=" mx-5 my-5">
                            <p className=' text-xl font-serif lg:text-2xl'>Log in to your Account</p>
                        </div>
                        <div className=" w-2/3 md:w-1/2 xl:w-2/6" >
                            <form className=' flex flex-col gap-5 ' onSubmit={handelSubmit}>
                                <input className=' text-sm py-3 px-3 rounded-lg ' required id='name' type="text" placeholder='Fullname' onChange={handelChange}/>
                                <input className=' text-sm py-3 px-3 rounded-lg ' required id='email' type="email" placeholder='Email' onChange={handelChange}/>
                                <input className=' text-sm py-3 px-3 rounded-lg ' required id='password' type="password" placeholder='Password' onChange={handelChange}/>
                                <div className=" flex justify-center">
                                    <button type='submit' className=' bg-black text-white py-2 px-14 rounded-lg items-center lg:text-lg '>Signup</button>
                                </div>
                                <div className="flex justify-center">
                                    <OAuth/>
                                </div>
                            </form>
                            <div className=" flex mt-5 justify-center">
                                <p>Already have an account? <span><Link to="/login" className='text-blue-800 '>Login</Link></span> </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-40 flex justify-center items-center ">
                    <img className=' h-48 aspect-video object-cover ' src="/assets/logo.png" alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}
