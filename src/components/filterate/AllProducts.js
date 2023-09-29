// const React from 'react';
import {Link, useParams} from 'react-router-dom';
import {useDispatch } from 'react-redux';
import { oneProduct } from '../../features/slices/ProductSlice';

const AllProducts=({name, img, price, id})=>{
    const {type}=useParams();
    // const {id}=useParams();
    const dispatch = useDispatch();
    return(
                    <Link to={`/filter/${type}/${id}`} key={id}>
                      <div onClick={()=>dispatch(oneProduct(id))} className="flex-col flex justify-center items-center shadow-2xl shadow-black p-2">
                        <img src={img} alt={name} className="h-96 w-auto rounded"/>
                        <h1 className="font-semibold text-2xl py-2 font-serif">{name}</h1>
                        {/* <h1 className="font-medium py-1 text-lg">{product.gender} {type}</h1> */}
                        <h1 className="font-medium">${price}</h1>
                    </div>
                    </Link>
    )
}

export default AllProducts;