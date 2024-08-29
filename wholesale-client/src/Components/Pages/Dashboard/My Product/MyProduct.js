import React from 'react';

const MyProduct = ({index,product}) => {
  return (
    <tr className="text-center text-slate-800">
      <th className="bg-slate-300 border-r-[1px] border-slate-900">{index}</th>
      <td className="bg-slate-300 border-r-[1px] border-slate-900">
        <div className="flex items-center">
          <img className="w-14 h-14 rounded-md" src={product?.img} alt="" />
          <h1 className="font-semibold ml-3">{product?.name}</h1>
        </div>
      </td>
      <td className="bg-slate-300 border-r-[1px] border-slate-900">
        <h1 className="font-semibold ml-3">{product?.category}</h1>
      </td>
      <td className="bg-slate-300 border-r-[1px] border-slate-900">
        <h1 className="font-semibold ml-3">{product?.quantity}</h1>
      </td>
      <td className="bg-slate-300 border-r-[1px] border-slate-900">
        <h1 className="font-semibold ml-3">{product?.price}</h1>
      </td>
      {/* <td className="bg-slate-300 border-r-[1px] border-slate-900">
        <h1 className="font-semibold ml-3">{product?.name}</h1>
      </td> */}
      <td className="bg-slate-300 border-r-[1px] border-slate-900">
        <h1 className="font-semibold ml-3">{product?.name}</h1>
      </td>
      <td className="bg-slate-300 border-r-[1px] border-slate-900">
        <h1 className="font-semibold ml-3"><button className='btn btn-xs'>Remove</button></h1>
      </td>
    </tr>
  );
};

export default MyProduct;