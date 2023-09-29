import React, { useEffect } from 'react'
import Slider from '../slider/Slider';
import Navigate from '../navigate/Navigate';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Main = () => {
  useEffect(()=>{
    AOS.init({duration:2000});
  },[])
  return (
    <div>
      <Slider />
      <Navigate />
    </div>
  )
}

export default Main