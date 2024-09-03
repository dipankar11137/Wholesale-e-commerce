import React from 'react';

const MyOrder = ({ product, handleDelete, index }) => {
  return (
    <tr className="text-center text-slate-800">
      <th className="bg-slate-200 border-r-[1px] border-slate-900">{index}</th>
      <td className="bg-slate-200 border-r-[1px] border-slate-900">
        <div className="flex items-center">
          <img
            className="w-14 h-14 rounded-md"
            src={product?.product?.img}
            alt=""
          />
          <div>
            <h1 className=" ml-3 text-start">{product?.product?.name}</h1>
            <h1 className=" ml-3 font-mono text-start">
              {product?.product?.price} BDT
            </h1>
          </div>
        </div>
      </td>
      <td className="bg-slate-200 border-r-[1px] border-slate-900 text-start">
        <h1 className=" ml-3">{product?.product?.user?.name}</h1>
        <h1 className=" ml-3 font-mono">{product?.product?.user?.phone}</h1>
      </td>
      <td className="bg-slate-200 border-r-[1px] border-slate-900 text-start">
        <h1 className=" ml-3 font-mono">{product?.customerName}</h1>
        <h1 className=" ml-3 font-mono">{product?.phone}</h1>
      </td>
      <td className="bg-slate-200 border-r-[1px] border-slate-900 font-mono">
        <h1 className=" ml-3">{product?.date}</h1>
      </td>
      <td className="bg-slate-200 border-r-[1px] border-slate-900">
        <h1 className="ml-3 font-mono ">
          {product?.orderQuantity} {product?.product?.pType}
        </h1>
      </td>
      <td className="bg-slate-200 border-r-[1px] border-slate-900 text-end">
        <h1 className="ml-3 font-mono ">{product?.totalPrice}.00 BDT</h1>
      </td>
      <td className="bg-slate-200 border-r-[1px] border-slate-900">
        <h1 className="ml-3 font-mono ">{product?.price}</h1>
      </td>

      <td className="bg-slate-200 border-r-[1px] border-slate-900">
        <button
          onClick={() => handleDelete(product?._id)}
          className="btn btn-xs btn-primary"
        >
          Remove
        </button>
      </td>
    </tr>
  );
};

export default MyOrder;