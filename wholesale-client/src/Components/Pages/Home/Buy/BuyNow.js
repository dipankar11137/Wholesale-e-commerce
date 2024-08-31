import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import useUser from '../../../../hooks/useUser';

const BuyNow = () => {
  const { id } = useParams()
  const [user] = useUser(); 
  const navigate=useNavigate()
  const [product, setProduct] = useState({})
  const [orderQuantity, setOrderQuantity] = useState('')
  const [customerName, setCustomerName] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const totalPrice = orderQuantity* product?.price;

    useEffect(() => {
      fetch(`http://localhost:5000/product/${id}`)
        .then(res => res.json())
        .then(data => {
          setProduct(data);
        });
    }, [product, id]);
  
  const handleSubmit = () => {

    const buyProduct = {
      customerName: customerName || user.name,
      phone: phone || user.phone,
      address: address || user.address,
      email:user?.email,
      orderQuantity,
      totalPrice,
    product,
     
    };
     fetch(`http://localhost:5000/buy`, {
       method: 'POST',
       headers: {
         'content-type': 'application/json',
       },
       body: JSON.stringify(buyProduct),
     })
       .then(res => res.json())
       .then(data => {
         toast.success('Successful');
         navigate('/buy')
       });
   
  }
  return (
    <div className="">
      <div>
        <h1 className="text-center text-4xl py-3 mt-[1px] mb-5 font-semibold text-indigo-50 bg-slate-600 uppercase">
          Buy Product
        </h1>
      </div>

      <div className="flex justify-between gap-14 ml-56 mr-16">
        <div className="bg-slate-200 w-[500px] p-5 rounded-xl text-indigo-800">
          <div className="flex">
            <h1 className="text-xl font-semibold w-[200px]">Name</h1>
            <h1 className="text-xl font-semibold text-black">
              {' '}
              : {product?.name}
            </h1>
          </div>
          <div className="flex items-end">
            <h1 className="text-xl font-semibold w-[200px]">Price</h1>
            <h1 className="text-xl font-semibold text-black">
              {' '}
              : {product?.price} Taka
            </h1>
            <h1 className="text-sm  ml-2 "> / {product?.pType}</h1>
          </div>
          <div className="flex items-end">
            <h1 className="text-xl font-semibold w-[200px]">
              Available Quantity
            </h1>
            <h1 className="text-xl font-semibold text-black">
              : {product?.quantity}
            </h1>
            <h1 className="text-sm font-semibold  ml-3">Pieces</h1>
          </div>

          <div className="w-[350px]">
            <div className="mt-3 ">
              <input
                onChange={e => setCustomerName(e.target.value)}
                type="text"
                placeholder={`Name: ${user?.name || ' Input name'}`}
                className="input input-bordered bg-white w-full "
              />
            </div>
            <div className="mt-3 ">
              <input
                onChange={e => setPhone(e.target.value)}
                type="number"
                placeholder={`Phone: ${user?.phone || ' Input Phone'}`}
                className="input input-bordered bg-white w-full "
              />
            </div>
            <div className="mt-3 ">
              <textarea
                onChange={e => setAddress(e.target.value)}
                type="number"
                placeholder={`Address: ${user?.address || ' Input Address'}`}
                className="input input-bordered bg-white w-full "
              />
            </div>

            {/* quantity */}
            <div className="mt-6 ">
              {orderQuantity > 29 ? (
                <h1 className="text-green-600 font-semibold ml-1 mb-2">
                  You Order in {orderQuantity}
                  <span className='ml-1 text-xs'> {product?.pType}</span>
                </h1>
              ) : (
                <h1 className="text-red-600 font-semibold ml-1 mb-2">
                  Order Minimum 30 {product?.pType}
                </h1>
              )}
              <input
                onChange={e => setOrderQuantity(e.target.value)}
                type="number"
                placeholder="Input Order Quantity"
                className="input input-bordered bg-white w-full "
                min="30"
              />
            </div>

            {/* <div className="mt-5">
              {orderQuantity > 29 ? (
                <button className="btn w-full">Submit</button>
              ) : (
                <button disabled className="btn w-full">
                  Submit
                </button>
              )}
            </div> */}
          </div>
        </div>
        {/* total price */}

        {orderQuantity > 29 && (
          <div className="w-[300px] bg-slate-600 rounded-md p-5 text-indigo-50 h-[300px]">
            <h1 className="text-center border-b-[1px] text-2xl font-semibold">
              Total Price
            </h1>

            <div className="flex justify-between items-center mt-3">
              <h1>Sub Total </h1>
              <h1>: {totalPrice}.00 BDT</h1>
            </div>
            <div className="flex justify-between items-center mt-3">
              <h1>Vat </h1>
              <h1>: 0.00 BDT</h1>
            </div>
            <div className="flex justify-between items-center mt-3">
              <h1>Other Charge </h1>
              <h1>: 0.00 BDT</h1>
            </div>
            <hr className="mt-3" />
            <div className="flex justify-between items-center mt-3">
              <h1>Total Price </h1>
              <h1>: {totalPrice}.00 BDT</h1>
            </div>
            <div className="mt-5">
              {orderQuantity > 29 ? (
                <button onClick={handleSubmit} className="btn w-full">
                  Submit
                </button>
              ) : (
                <button disabled className="btn w-full">
                  Submit
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BuyNow;