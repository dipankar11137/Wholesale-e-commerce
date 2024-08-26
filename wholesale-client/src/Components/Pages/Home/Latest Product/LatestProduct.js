import React, { useEffect, useState } from 'react';
import Buy from '../Buy/Buy';

const LatestProduct = () => {
  const [products, setProduct] = useState([])
  
  useEffect(() => {
    fetch(`http://localhost:5000/products`)
      .then(res => res.json())
      .then(data => setProduct(data));
},[products])

  return (
    <div className='mt-14'>
      <div>
        <h1 className='text-center bg-slate-800 text-5xl text-indigo-200 font-serif p-3'>Our Latest Product</h1>
      </div>
      <div className='grid grid-cols-5 gap-16 mx-10 mt-5'>
        {
          products.slice(0,5).reverse().map(product=><Buy key={product._id} product={product}/>)
        }
      </div>
    </div>
  );
};

export default LatestProduct;