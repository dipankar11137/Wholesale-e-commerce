import React, { useEffect, useState } from 'react';
import { BiPhoneOutgoing } from 'react-icons/bi';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const Payment = () => {
  const { id } = useParams('');
  const [buyProduct, setBuyProduct] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5006/buy/${id}`)
      .then(res => res.json())
      .then(data => setBuyProduct(data));
  }, [buyProduct, id]);
  const [numberButton, setNumberButton] = useState(true);
  const [password, setPassword] = useState(false);
  const [passwordButton, setPasswordButton] = useState(false);
  const [vCode, setVCode] = useState(false);
  const navigation = useNavigate();

  const handleNumber = () => {
    setPassword(true);
    setPasswordButton(true);
    setNumberButton(false);
  };
  const handlePasswordButton = () => {
    setPasswordButton(false);
    setVCode(true);
  };
  const handleVCode = () => {
    const updatePayment = { payment: true };
    fetch(`http://localhost:5000/buyPayment/${id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(updatePayment),
    })
      .then(res => res.json())
      .then(data => {
        toast.success('Payment Successfully');
       navigation('/dashboard/myOrder');
      });
  };
  const handleCancel = () => {
    toast.error('Payment Cancel');
    navigation('/dashboard/myOrder');
  };
  return (
    <div className="bg-slate-100">
      <div className="flex justify-center pt-10 pb-20 ">
        <div>
          <div className="bg-pink-700 w-[400px] h-[550px]">
            <img
              className="pt-2"
              src="https://raw.githubusercontent.com/Shipu/bkash-example/master/bkash_payment_logo.png"
              alt=""
            />
            <div className="mx-[50px] w-[400] h-[100px] shadow-black shadow-md mt-5 text-white text-lg pt-2 pl-4">
              <h1>Merchant : Warehouse</h1>
              <h1>Invoice No : A234rDefE</h1>
              <h1>Amount : 2550 BDT</h1>
            </div>
            <div className="text-center text-white mt-10 text-xl">
              <div>
                {' '}
                <h1>Enter Your BKash account number</h1>
                <input
                  className="p-1 pl-2 mt-2 text-black w-[300px] rounded-lg"
                  placeholder="e.g 01XXXXXXXXX"
                  type="number"
                />
                {numberButton && (
                  <div className="flex justify-between mx-[100px] mt-3">
                    <button
                      onClick={handleNumber}
                      className="bg-slate-700 px-3 py-2 rounded-lg hover:bg-slate-800"
                    >
                      Process
                    </button>
                    <button
                      onClick={handleCancel}
                      className="bg-slate-700 px-3 py-2 rounded-lg hover:bg-slate-800"
                    >
                      Cancel
                    </button>
                  </div>
                )}
              </div>
              {/* password */}
              {password && (
                <div>
                  <input
                    className="p-1 pl-2 mt-2 text-black w-[300px] rounded-lg"
                    placeholder="Enter Your Password"
                    type="password"
                  />
                  {passwordButton && (
                    <div className="flex justify-between mx-[100px] mt-3">
                      <button
                        onClick={handlePasswordButton}
                        className="bg-slate-700 px-3 py-2 rounded-lg hover:bg-slate-800"
                      >
                        Process
                      </button>
                      <button
                        onClick={handleCancel}
                        className="bg-slate-700 px-3 py-2 rounded-lg hover:bg-slate-800"
                      >
                        Cancel
                      </button>
                    </div>
                  )}
                </div>
              )}
              {/* v code */}
              {vCode && (
                <div>
                  <div className="mt-5">
                    <h1>Enter Your Verification Code</h1>
                    <input
                      className="p-1 pl-2 mt-2 text-black w-[300px] rounded-lg"
                      placeholder="Enter 4 Digit Code"
                      type="number"
                    />
                  </div>

                  <div className="flex justify-between mx-[100px] mt-3">
                    <button
                      onClick={handleVCode}
                      className="bg-slate-700 px-3 py-2 rounded-lg hover:bg-slate-800"
                    >
                      Process
                    </button>
                    <button
                      onClick={handleCancel}
                      className="bg-slate-700 px-3 py-2 rounded-lg hover:bg-slate-800"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="bg-pink-700 flex justify-center pb-3 text-white text-xl font-semibold">
            <BiPhoneOutgoing className="mt-1 mr-3" />
            <h1>16247</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
