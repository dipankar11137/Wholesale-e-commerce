import React from 'react';

const MyProduct = ({ index, product, handleDelete }) => {
  return (
    <tr className="text-center text-slate-800">
      <th className="bg-slate-200 border-r-[1px] border-slate-900">{index}</th>
      <td className="bg-slate-200 border-r-[1px] border-slate-900">
        <div className="flex items-center">
          <img className="w-14 h-14 rounded-md" src={product?.img} alt="" />
          <h1 className="font-semibold ml-3">{product?.name}</h1>
        </div>
      </td>
      <td className="bg-slate-200 border-r-[1px] border-slate-900">
        <h1 className="font-semibold ml-3">{product?.category}</h1>
      </td>
      <td className="bg-slate-200 border-r-[1px] border-slate-900">
        <h1 className="font-semibold ml-3">{product?.quantity}</h1>
      </td>
      <td className="bg-slate-200 border-r-[1px] border-slate-900">
        <h1 className="font-semibold ml-3">{product?.price}</h1>
      </td>
      {/* <td className="bg-slate-200 border-r-[1px] border-slate-900">
        <h1 className="font-semibold ml-3">{product?.name}</h1>
      </td> */}
      <td className="bg-slate-200 border-r-[1px] border-slate-900">
        <h1 className="font-semibold ml-3">{product?.name}</h1>
      </td>
      <td className="bg-slate-200 border-r-[1px] border-slate-900">
        <button
          onClick={() => handleDelete(product?._id)}
          className="bg-orange-600 px-3 py-1 rounded-md uppercase text-white font-semibold hover:bg-orange-500"
        >
          Remove
        </button>
      </td>
    </tr>
  );
};

export default MyProduct;