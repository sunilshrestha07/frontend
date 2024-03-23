import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {getAllData} from '../Redux/FoodSlice'

export default function Foods() {
  const [foodData,setFoodData]=useState([])
  const dispatch= useDispatch()

  const foodFetch = async()=>{
    try {
        const res = await axios.get('https://backend-n80g.onrender.com/api/getallfoods')
      if(res.status === 200){
        setFoodData(res.data)
        dispatch(getAllData(res.data))
    }
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(()=>{
    foodFetch()
  },[])
  return (
    <>
    <div className=" mt-5 z-0">
      <div className="  flex flex-wrap  justify-between gap-0  md:gap-0 xl:gap-5 ">
        {foodData && foodData.map((food,index)=>(
          <div className=" bg-slate-200 rounded-lg overflow-hidden mb-5" key={index}>
              <Link to={`/foodview/${food._id}`}>
                  <div className="w-44 aspect-square">
                    <img className=' w-full h-full object-cover transition-transform  hover:scale-110' src={food.image} alt="foodImage" />
                  </div>
                  <div className=" text-center font-hanuman mt-1">
                    <p>{food.name}</p>
                    <p>Rs:{food.price}</p>
                  </div>
              </Link>
            </div>
        ))}
      </div>
    </div>
    </>
  )
}
