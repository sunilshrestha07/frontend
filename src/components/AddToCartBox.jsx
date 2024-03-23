import React from 'react'
import {useDispatch} from 'react-redux'
import {addTocart} from '../Redux/CartSlice'
import {increaseItem,decreaseItem} from '../Redux/FoodSlice'

export default function AddToCartBox({searchedFood}) {
    const dispatch = useDispatch()

    const handleAddToCart = (searchedFood) => {
        dispatch(addTocart(searchedFood));
    };

    const handelDecraseItem =(_id)=>{
        dispatch(decreaseItem(_id))
    }

      const handelIncreaseQuantity =(_id)=>{
        dispatch(increaseItem(_id))
    }
  return (
    <>
    <div className="">
        <div className=" flex gap-2 justify-center">
            <div className="">
                <p className='  px-1 text-2xl text-center bg-orange-300 hover:bg-orange-400 cursor-pointer w-8 md:w-10 aspect-square rounded-lg' onClick={()=>handelDecraseItem(searchedFood._id)}>-</p>
            </div>
            <div className="">
                <p className=' text-2xl text-center bg-orange-300 w-12 h-8 md:w-14 md:h-10 aspect-square rounded-lg'>{searchedFood.quantity}</p>
            </div>
            <div className="">
                <p className='px-1 text-2xl text-center bg-orange-300 hover:bg-orange-400 cursor-pointer w-8 md:w-10 aspect-square rounded-lg'  onClick={()=>handelIncreaseQuantity(searchedFood._id)}>+</p>
            </div>
        </div>
        <div className=" my-4">
            <div className=" flex justify-center">
                <button onClick={()=>handleAddToCart(searchedFood)} className=' bg-black text-white hover:bg-white hover:text-black border-2 border-black font-hanuman py-2 px-5 rounded-md'>Add To Cart</button>
            </div>
        </div>
        
    </div>
    </>
  )
}
