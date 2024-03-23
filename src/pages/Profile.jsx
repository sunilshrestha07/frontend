import React, { useEffect, useRef, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import axios from 'axios'
import {updateSuccess} from '../Redux/UserSlice'
import { Alert } from 'flowbite-react'
import { HiInformationCircle } from 'react-icons/hi';
import { deleteSuccess ,logoutSuccess} from '../Redux/UserSlice'
import {useNavigate} from 'react-router-dom'

export default function Profile() {
  const navigate = useNavigate();
  const dispatch=useDispatch()
  const {currentUser}=useSelector((state)=>state.user)
  const fileRef=useRef()
  const [imageFile,setImageFile]=useState('')
  const [imageFileUrl,setImageFileUrl]=useState('')
  const [loading,setLoading]=useState(false)
  const [error,setError]=useState(false)
  const [updateData,setUpdateData]=useState({})
  const [message,setMessage]=useState(false)

  
  const handelChange=(e)=>{
    setUpdateData({...updateData,[e.target.id]:e.target.value})
  }

  const handelImagechange=(e)=>{
    const file = e.target.files[0]
    if(file){
      setImageFile(file)
      setImageFileUrl(URL.createObjectURL(file))
      setUpdateData({...updateData,[e.target.id]:e.target.files[0]})
    }
  }


  const handelSubmit= async (e)=>{
    e.preventDefault()
    if (Object.keys(updateData).length === 0) {
      setError("Nothing to update");
      setTimeout(() => {
        setError('');
      }, 2000);
      return; // Corrected from retun
    }
    try {
      setLoading(true)
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        }
      };
      const res = await axios.put(`https://backend-n80g.onrender.com/api/update/${currentUser._id}`, updateData,config);
      if(res.status === 200){
        dispatch(updateSuccess(res.data))
        setMessage('Profile Update Success')
        setTimeout(()=>{
          setMessage('');
        },2000)
        console.log("userUpdated success")
        setLoading(false)
      }
      console.log(updateData)
    } catch (error) {
      setError(error.message)
      //after 2 second the error will be cleared
      setTimeout(() => {
        setError('');
      }, 2000);
      console.log(error.message)
      setLoading(false)
    }
  }

  const handelDelete = async()=>{
    try {
      const res = await axios.delete(`api/delete/${currentUser._id}`)
      if(res.status === 200){
        dispatch(deleteSuccess())
        console.log('Delete success')
      }
    } catch (error) {
      console.log(error.message)
    }
  }

  const handelLogout = async()=>{
    try {
      const res = await axios.post('api/logout')
      if(res.status === 200){
        dispatch(logoutSuccess())
        console.log('logout success')
      }
    } catch (error) {
      console.log(error.message)
    }
  }


  return (
    <>
    <div className=" flex  justify-center mt-20">
    {message ? (
        <div className=" mt-2 absolute top-12 left-2/5">
            <Alert color="success" icon={HiInformationCircle}>
                <span className="font-small">{message}</span>
             </Alert>
        </div>
          ):(
              <div className=""></div>
          )}
      <div className=" bg-slate-100 rounded-lg w-3/4 h-full md:w-2/5">
        <div className=" my-5">
          <div className="">
            <p className=' text-center font-hanuman text-xl sm:text-2xl md:text-3xl'>Your Profile</p>
          </div>
          <form onSubmit={handelSubmit}>
            <input type="file" accept='image/*' name="" id="profilePicture" hidden ref={fileRef} onChange={handelImagechange} />
              <div className=" flex justify-center">
                <img className=' w-52 h-52 object-cover rounded-full' onClick={()=>fileRef.current.click()} src={imageFileUrl|| currentUser.profilePicture} alt="" />
              </div>
              <div className=" flex flex-col gap-3 justify-center items-center my-5">
                  <div className="">
                    <input className=' rounded-xl md:px-6 ' type="text" name="" id="name" placeholder='Name'  onChange={handelChange} defaultValue={currentUser.name}/>
                  </div>
                  <div className="">
                    <input className=' rounded-xl md:px-6 ' type="email" name="" id="email" placeholder='Email' onChange={handelChange}  defaultValue={currentUser.email}/>
                  </div>
                  <div className="">
                    <input className=' rounded-xl md:px-6 ' type="password" name="" id="password" placeholder='Password' onChange={handelChange}  />
                  </div>
              </div>
              <div className=" flex justify-center mb-10 ">
                <button type=' submit' className={`bg-black text-white hover:bg-white hover:text-black  py-2 px-5 rounded-2xl ${loading ? 'disabled':''}`}>Update
                </button>
              </div>
          </form>
          <div className=" flex justify-around -mt-6">
            <div className="">
              <button className='text-sm py-2 px-3  font-medium text-red-500 rounded-lg ' onClick={handelDelete}>Delete Account</button>
            </div>

            <div className="">
              <button className='text-sm py-2 px-3 font-medium text-red-500 rounded-lg ' onClick={handelLogout}>Logout</button>
            </div>
          </div>
        </div>
        {error ? (
        <div className=" mt-2">
            <Alert color="failure" icon={HiInformationCircle}>
                <span className="font-small">{error}</span>
             </Alert>
        </div>
          ):(
              <div className=""></div>
          )}
      </div>
    </div>
    </>
  )
}
