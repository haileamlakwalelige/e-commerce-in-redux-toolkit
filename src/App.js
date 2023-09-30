
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import Navbar from "./components/navbar/Navbar"
import Main from "./components/main/Main"
import Filterate from './components/filterate/Filterate'
import SingleProduct from './components/filterate/SingleProduct'
import Footer from "./footer/Footer"
import {useSelector} from 'react-redux';

export default function App() {
  const cart = useSelector((state)=>state.cart.cart);
  const totalAmount = useSelector((state)=>state.cart.totalAmount);
  const totalPrice = useSelector((state)=>state.cart.totalPrice);

  console.log("cart",cart);
  console.log('totalAmount', totalAmount);
  console.log('totalPrice', totalPrice);

  const router=createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Navbar />}>
        <Route path="/" element={<Main />}/>
        <Route path='/filter/:type' element={<Filterate />} />
        <Route path='/filter/:type/:id' element={<SingleProduct />} />
   
      </Route>
    )
  )
  return (
    <div>
      <RouterProvider router={router} />
      <Footer />
    </div>
  )
}