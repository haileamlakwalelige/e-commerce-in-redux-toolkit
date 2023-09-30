import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const SingleProduct = () => {
  const { id } = useParams();
  const singles = useSelector((state) => state.products.singleProduct);
  const productSize = singles[0].size ? singles[0].size[0] : '';
  // const productColor= singles[0].color ? singles[0].color[0] : '';
  const [size, setSize] = useState(productSize);
  // const [color, setColor]=useState(productColor);
  console.log("size",size);
  // console.log("color",color);
  console.log('singles', singles);

  return (
    <div className="flex">
      {singles
        .filter((single) => single.id === id)
        .map((item) => (
          <div key={item.id} className="grid grid-cols-2 gap-10 px-10 py-10">
            <div className="flex justify-center items-center">
              <img
                src={item.img}
                alt={item.name}
                className="rounded h-[80vh] w-[60vh]"
              />
            </div>
            <div className="flex flex-col justify-center items-center text-center font-serif shadow-lg shadow-gray-600 px-32 rounded-3xl gradient-r-from-white to-black">
              <h1 className="font-bold text-5xl py-5">{item.name}</h1>
              <h1 className="text-lg py-1">
                {' '}
                <span className="font-bold">Cloth Type:</span> {item.type}
              </h1>
              <p className="text-lg py-1 text-center">
                <span className="font-bold">Description:</span> {item.text}
              </p>
              <p className="text-lg py-2 bg-green-500 mt-2 px-16 text-white rounded">
                ${item.price}
              </p>
                  {/* <div className="py-3 w-full">
                <p className="text-lg">Pick Your Size </p>
                <div className="w-full border-gray-600 border-2 py-1 rounded my-3">
                  <select
                    name="size"
                    id="size"
                    value={size}
                    onChange={(e) => setSize(e.target.value)}
                    className="w-full border-gray-600 focus:outline-none px-2 "
                  >
                    {singles.color.map((colors)=>(
                      <option>{colors}</option>
                    ))}
                  </select>
                </div>
              </div> */}

                <div className="py-3 w-full">
                <p className="text-lg">Pick Your Size </p>
                <div className="w-full border-gray-600 border-2 py-1 rounded my-3">
                  <select
                    name="size"
                    id="size"
                    value={size}
                    onChange={(e) => setSize(e.target.value)}
                    className="w-full border-gray-600 focus:outline-none px-2 "
                  >
                    <option>M</option>
                    <option>M</option>
                    <option>L</option>
                  </select>
                </div>
              </div>
              <button className="text-lg py-2 bg-green-500 px-16 text-white rounded">
                Add to cart
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default SingleProduct;
