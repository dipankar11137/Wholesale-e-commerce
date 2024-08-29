import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';
import MyProduct from './MyProduct';

const MyProducts = () => {
  const [users] = useAuthState(auth);
  const [products, setProducts] = useState([5,5,5,5])
  
  useEffect(() => {
    fetch(`http://localhost:5000/emailProduct/${users.email}`)
      .then(res => res.json())
      .then(data => setProducts(data));
  }, [products, users.email]);

  return (
    <div className="font-serif">
      <h1 className="text-center text-4xl py-3 mt-[1px]  font-semibold text-indigo-50 bg-slate-600">
        My Product
      </h1>

      <div className="overflow-x-auto mt-3 mx-5">
        <table className="table  w-full text-white ">
          <thead>
            <tr className="text-3xl bg-slate-900  text-center">
              <th className="bg-secondary text-xl border-r-[1px] "></th>
              <th className="bg-secondary text-xl border-r-[1px] font-thin">
                Name
              </th>
              <th className="bg-secondary  text-xl border-r-[1px] font-thin">
                Category
              </th>
              <th className="bg-secondary text-xl border-r-[1px] font-thin">
                Quantity
              </th>
              <th className="bg-secondary  text-xl border-r-[1px] font-thin">
                Price
              </th>
              {/* <th className="bg-secondary text-xl border-r-[1px] font-thin">
                Payment
              </th> */}
              <th className="bg-secondary  text-xl border-r-[1px] font-thin">
                Status
              </th>
              <th className="bg-secondary text-xl font-thin">Remove</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <MyProduct
                key={product._id}
                product={product}
                index={index + 1}
                // handleDelete={handleDelete}
              ></MyProduct>
            ))}
          </tbody>
        </table>
      </div>

 
    </div>
  );
};

export default MyProducts;