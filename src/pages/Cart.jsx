import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {decreaseQuantity,increaseQuantity} from '../Redux/CartSlice'


export default function Cart() {
    // Select the items from the cart state
    const itemsInCart = useSelector(state => state.cart.items);
    const grandTotal = itemsInCart.reduce((total, item) => total + item.price * item.quantity, 0);
    const dispatch =useDispatch()

    const handelDecraseItem =(_id)=>{
      dispatch(decreaseQuantity(_id))
    }
    const handelIncreaseQuantity =(_id)=>{
      dispatch(increaseQuantity(_id))
    }
    return (
        <div>
           {itemsInCart.length > 0 ? (
            <div className="  md:flex ">
              <div className=" flex flex-col gap-2  ">
                <h2 className=' text-2xl font-hanuman text-center mb-3'>Items in Cart:</h2>
                  {itemsInCart && itemsInCart.map((item,index)=>(
                    <div className="  flex gap-2 bg-purple-100 rounded-md mx-2 overflow-hidden md:mt-3 "key={index}>
                      <div className="">
                        <img className='w-36 aspect-video object-cover' src= {item.image} alt="" />  
                      </div>
                      <div className=" w-40 ">
                        <p className=' mt-1 text-xl font-medium font-hanuman md:text-sm'>{item.name}</p>
                        <p className=' text-sm text-gray-600 font-hanuman'>Rs:{item.price * item.quantity}</p>
                      </div>
                      <div className=" my-2 mr-1">
                              <div className="">
                                <div className=" flex gap-1 justify-center">
                                  <div className="">
                                      <p className=' text-xl px-1 md:text-2xl text-center  hover:bg-gray-400 cursor-pointer w-7 md:w-10 aspect-square rounded-lg' onClick={()=>handelDecraseItem(item._id)}>-</p>
                                  </div>
                                  <div className="">
                                      <p className=' text-xl md:text-2xl text-center bg-gray-400 w-11 h-7 md:w-14 md:h-10 aspect-square rounded-lg'>{item.quantity}</p>
                                  </div>
                                  <div className="">
                                      <p className='px-1 text-xl md:text-2xl text-center  hover:bg-gray-400 cursor-pointer w-7 md:w-10 aspect-square rounded-lg' onClick={()=>handelIncreaseQuantity(item._id)}>+</p>
                                  </div>
                                </div>
                              </div>
                          </div>
                    </div>
                      ))}
                </div>
                <div className=" bg-slate-200 mx-2 mt-16 md:w-1/2">
                  <div className="  text-center py-4">
                    <p className=' text-2xl font-hanuman'>Cart Total</p>
                  </div>
                  <div className=" text-2xl font-hanuman gap-1 flex flex-col">
                    <div className=" bg-white flex justify-between py-4 ">
                      <p className=' mx-4'>Sub Total:</p>
                      <p className=' mx-4'>Rs:{grandTotal}.00</p>
                    </div>
                    <div className="bg-white flex justify-between py-4 ">
                     <p className=' mx-4'>Delivery cost:</p>
                     <p className=' mx-4'>Rs:100.00</p>
                    </div>
                    <div className="bg-white flex justify-between py-4 ">
                      <p className=' mx-4'>Grand Total:</p>
                      <p className=' mx-4'>Rs:{grandTotal + 100.00}</p>
                    </div>
                    <div className=" flex justify-center my-4">
                      <button className=' bg-black text-white py-2 px-6 text-xl font-hanuman rounded-md'>Place Order</button>
                    </div>
                  </div>
                </div>
            </div>
           ):( 
            <div className=" flex justify-center mt-5">
              <h2 className=' text-2xl font-hanuman'>No Item's In Cart!!</h2>
            </div>
           )}
        </div>
    );
}
