
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import Navbar from "./components/navbar/Navbar"
import Main from "./components/main/Main"
import Filterate from './components/filterate/Filterate'
import SingleProduct from './components/filterate/SingleProduct'
import Footer from "./footer/Footer"

export default function App() {
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