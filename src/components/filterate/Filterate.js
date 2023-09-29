import {useSelector} from 'react-redux';
import {useParams} from 'react-router-dom'
import AllProducts from './AllProducts';



const Filterate=()=>{
    const products = useSelector((state)=>state.products.filterateProduct);

    console.log("products",products);
    const {type}=useParams();
    // const {id}=useParams();
    console.log('params',type);
    return(
        <div>
            <h1 className="font-bold font-serif text-5xl text-center py-4">{type}</h1>
            <div className="grid grid-cols-3 gap-5 px-10 justify-center items-center ">
                {products.filter((product)=>product.type === type).map((product, index)=>(
                    <AllProducts key={product.id} name={product.name} img={product.img} id={product.id} price={product.price}/>
                ))}
            </div>
        </div>
    )
}

export default Filterate;