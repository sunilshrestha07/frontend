import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import AddToCartBox from '../components/AddToCartBox';

export default function FoodView() {
  const { id } = useParams();
  const allFoods = useSelector(state => state.food.allFoods);
  const searchedFood = allFoods.find(food => food._id === id);
  const searchedFoodCategory = searchedFood.category
  const relatedFoods = allFoods.filter(food => food.category === searchedFoodCategory && food._id !==searchedFood._id)

  if (!searchedFood) {
    return <div>Food not found!</div>;
  }

  return (
    <div className=" mx-2 my-5 ">
        <Link to='/'>
          <div className=" flex my-2 w-full md:hidden">
            <img className=' h-6 w-6 object-contain' src="/assets/back.png" alt="" />
            <p>Back to home</p>
          </div>
        </Link>
        <div className=' flex  justify-center'>
          <img className=' md:w-1/3 md:aspect-video md:object-cover rounded-md' src={searchedFood.image} alt="" />
        </div>
      <div className=" flex flex-col justify-center items-center my-4">
          <p className=' text-2xl font-hanuman font-medium'>{searchedFood.name}</p>
          <p className=' text-xl text-gray-500'>Rs:{searchedFood.price}</p>
      </div>
      <div className="">
        <AddToCartBox searchedFood={searchedFood} />
      </div>

      {/* show related content based on the clicked food category */}
      <div className="">
          <div className=" mt-10">
            {relatedFoods.length > 1 ? (
              <div className="">
                <p className=' text-2xl font-hanuman'>You may like this:</p>
              </div>
            ):(
              <div className="">
                <p className=' text-2xl font-hanuman'>You may wanna try this:</p>
              </div>
            )}
          </div>
          
          {relatedFoods.length > 1 ? (
            //if there is related category
            <div className="">
              <div className=" mt-5 z-0">
                <div className="  flex flex-wrap  justify-between gap-5 md:gap-0 xl:gap-5 ">
                  {relatedFoods && relatedFoods.map((food,index)=>(
                    <div className=" bg-slate-200 rounded-lg overflow-hidden " key={index}>
                        <Link to={`/foodview/${food._id}`}>
                            <div className="w-44 aspect-square">
                              <img className=' w-full h-full object-cover transition-transform  hover:scale-110' src={food.image} alt="foodImage" />
                            </div>
                            <div className=" text-center font-hanuman mt-1">
                              <p>{food.name}</p>
                              <p>Rs:{food.price}</p>
                            </div>
                        </Link>
                        <div className=" flex justify-center mb-1">
                          <button className=' bg-orange-300 py-0 px-3 rounded-lg'>Order</button>
                        </div>
                      </div>
                  ))}
                </div>
              </div>
            </div>
          ):(

            //if there is no related category
            <div className="">
              <div className=" mt-5 z-0">
                <div className="  flex flex-wrap  justify-between gap-5 md:gap-0 xl:gap-5 ">
                  {allFoods.slice(0, 4).map((food, index) => (
                    <div className=" bg-slate-200 rounded-lg overflow-hidden " key={index}>
                        <Link to={`/foodview/${food._id}`}>
                            <div className="w-44 aspect-square">
                              <img className=' w-full h-full object-cover transition-transform  hover:scale-110' src={food.image} alt="foodImage" />
                            </div>
                            <div className=" text-center font-hanuman mt-1">
                              <p>{food.name}</p>
                              <p>Rs:{food.price}</p>
                            </div>
                        </Link>
                        <div className=" flex justify-center mb-1">
                          <button className=' bg-orange-300 py-0 px-3 rounded-lg'>Order</button>
                        </div>
                      </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
    </div>
  );
}
