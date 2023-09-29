import { Button } from '@material-tailwind/react';
import cloth from '../../assets/images/clothes.jpg';
import { filtersProduct } from '../../features/slices/ProductSlice';
import { useDispatch } from 'react-redux';
import {Link } from 'react-router-dom';

const Navigate = () => {
  const buttons = [
    'Hoodies',
    'Dresses',
    'Suits',
    'Shoes',
    'T-Shirts',
    'Jeans',
    'Jackets',
    'Bags',
  ];
  const dispatch = useDispatch();
  return (
    <div>
      <div className="flex justify-between items-center px-20 pt-20 pb-5">
        {buttons.map((button, index) => (
          <div key={index}>
          <Link to={`/filter/${button}`}>
            <Button variant="outlined" color="blue"
            onClick={()=>dispatch(filtersProduct(button))}>
              {button}
            </Button>
            </Link>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center">
        <h1 className="bg-green-500 py-2 px-32 font-bold ">Sale Up to 50%</h1>
      </div>
      <div className="flex justify-center items-center">
        <img src={cloth} alt="Clothes" className="h-[80vh] w-[70vw] my-8 " />
      </div>
    </div>
  );
};

export default Navigate;
