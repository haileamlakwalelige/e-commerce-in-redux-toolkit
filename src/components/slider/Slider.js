

import React from 'react'
import {AiOutlineCaretRight, AiOutlineCaretLeft} from 'react-icons/ai';
import sliderData from '../../assets/data/data';
import { useSelector, useDispatch } from 'react-redux'
import { nextSlider, prevSlider } from '../../features/slices/SliderSlice';

export default function Slider() {
  const slideIndex = useSelector((state) => state.slider.value)
  const dispatch = useDispatch()
  console.log('slideIndex',slideIndex);

      const handleNext = () => {
      dispatch(nextSlider(slideIndex + 1)); // Dispatch the nextSlider action
    };
  
    const handlePrev = () => {
      dispatch(prevSlider(slideIndex -1)); // Dispatch the prevSlider action
    }
  return (
    <div className="relative">
    <div className="relative">
      {sliderData.map((slide) => (
        <div
          key={slide.id}
          className={
            parseInt(slide.id) === slideIndex
              ? 'relative opacity-100 ease-in-out scale-100'
              : 'relative opacity-0 duration-700 ease-in-out scale-95'
          }
        >
          <div>
            {parseInt(slide.id) === slideIndex && (
              <img src={slide.img} alt="shoes" className="h-screen w-full" />
            )}
          </div>
          <div className="text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <p className="text-white font-bold text-3xl leading-none">{parseInt(slide.id) === slideIndex && slide.text}</p>
          </div>
        </div>
      ))}
    </div>
    <div className="absolute bottom-72 flex justify-between items-center px-20 left-1/2 transform -translate-x-1/2">
      <div className="flex justify-between items-center">
         <button onClick={handlePrev} className="mr-[550px]">
            <AiOutlineCaretLeft size={50}/>
         </button> 
         <button onClick={handleNext} className="ml-[550px]">
            <AiOutlineCaretRight size={50}/>
         </button>  
      </div>
    </div>
  </div>
  )
}