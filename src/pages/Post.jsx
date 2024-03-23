import axios from 'axios'
import React, { useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { Alert } from 'flowbite-react'
import { HiInformationCircle } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';

export default function Post() {
  const imageRef = useRef()
  const [imageFile,setImageFile]=useState('')
  const [imageFileUrl,setImageFileUrl]=useState('')
  const [formData,setFormData]=useState({})
  const {currentUser}=useSelector((state)=>state.user)
  const [error,setError]=useState(false)
  const navigate = useNavigate()
  const [loading,setLoading]=useState(false)
  

  const handelImagechange=(e)=>{
    const file = e.target.files[0]
    if(file){
      setImageFile(file)
      setImageFileUrl(URL.createObjectURL(file))
      setFormData({...formData,[e.target.id]:e.target.files[0]})
    }
  }

  const handelChange=(e)=>{
    setFormData({...formData,[e.target.id]:e.target.value})
  }

  const handelSubmit= async(e)=>{
    e.preventDefault()
    setLoading(true)
    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        }
      };
      const res = await axios.post(`https://backend-n80g.onrender.com/api/post/${currentUser._id}`,formData,config)
      if(res.status === 200){
        console.log('Post success')
        setLoading(false)
        navigate('/')
      }
    } catch (error) {
      console.log(error.message)
      setError(error.message)
      setLoading(false)
      setTimeout(() => {
        setError('')
      }, 3000);
    }
  }
  return (
    <>
    <div className="">
        <div className="flex justify-center mt-16 ">
          <div className=" w-10/12 md:w-8/12 lg:w-7/12 h-full bg-gradient-to-b from-blue-400 via-blue-300 to-purple-300 rounded-lg">
            <div className=" flex justify-center">
              <p className=' text-3xl sm:text-4xl md:text-5xl lg:text-6xl  font-hantay md:my-3'>Make Post</p>
            </div>
            <form onSubmit={handelSubmit} >
              <div className=" flex flex-col-reverse md:flex-row mx-10 md:gap-10 lg:justify-between xl:justify-around">
                <div className=" ">
                  <div className=" flex flex-col text-sm">
                    <label htmlFor="name">Name </label>
                    <input className=' rounded-xl'  type="text" name="" id="name"  required onChange={handelChange}/>
                  </div>
                  <div className=" flex flex-col text-sm">
                  <label htmlFor="category">Category </label>
                    <select className=' rounded-xl'  required name="" id="category" onChange={handelChange}>
                      <option value="">Select Category</option>
                      <option value="BreakFast">BreakFast</option>
                      <option value="Main">Main</option>
                      <option value="Snacks">Snacks</option>
                      <option value="Dinner">Dinner</option>
                      <option value="Drinks">Drinks</option>
                    </select>
                  </div>
                  <div className=" flex flex-col text-sm">
                    <label htmlFor="price">Price </label>
                    <input className=' rounded-xl' required  type="text" name="" id="price" onChange={handelChange} />
                  </div>
                  <div className=" flex flex-col text-sm">
                    <label htmlFor="description">Description </label>
                    <textarea  className=' rounded-xl' required name="" id="description" cols="20" rows="5" onChange={handelChange}></textarea>
                  </div>
                </div>
                <input type="file" accept='image/*' name="" id="image" hidden ref={imageRef} onChange={handelImagechange} />
                <div className=" flex justify-center" onClick={()=>imageRef.current.click()}>
                  <img  className=' h-28 w-28 md:h-40 md:w-44 object-contain cursor-pointer'  src={imageFileUrl || `/assets/photo.png`} alt=""  />
                </div>
              </div>
              <div className=" flex justify-center my-5">
                <button type='submit' className={`bg-blue-600 text-white py-2 px-10 rounded-xl hover:bg-blue-800 ${loading ? 'disabled':''}`}>Post</button>
              </div>
            </form>
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
    </>
  )
}
