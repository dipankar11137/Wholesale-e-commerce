import React from 'react';
import { Link } from 'react-router-dom';

const Category = () => {
  return (
    <div className="mx-16">
      <div className="my-7 text-center text-5xl  font-serif ">
        Our Product Category
      </div>
      <div className="grid grid-cols-5 gap-10">
        <Link
          to="/products"
          className="hover:bg-slate-100  shadow-lg  border-b-[1px] border-orange-700 hover:border-b-0  pb-1"
        >
          <img
            className="h-32 w-full rounded-xl rounded-b-none"
            src="https://images.pexels.com/photos/2237804/pexels-photo-2237804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <h1 className="text-sm font-serif text-center mt-2">
            Electronics and Mobile Devices
          </h1>
        </Link>
        <Link
          to="/products"
          className="hover:bg-slate-100  shadow-lg  border-b-[1px] border-orange-700 hover:border-b-0  pb-1"
        >
          <img
            className="h-32 w-full rounded-xl rounded-b-none"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUE_1GtXoamu4NI4wTOv5O2xge_1luMCO-EQ&s"
            alt="Food and Beverages"
          />
          <h1 className="text-sm font-serif text-center mt-2">
            Food and Beverages
          </h1>
        </Link>
        <Link
          to="/products"
          className="hover:bg-slate-100  shadow-lg  border-b-[1px] border-orange-700 hover:border-b-0  pb-1"
        >
          <img
            className="h-32 w-full rounded-xl rounded-b-none"
            src="https://i.pinimg.com/736x/69/31/7e/69317e0e5f8974e3ae2e25c693815310.jpg"
            alt="Health and Personal Care"
          />
          <h1 className="text-sm font-serif text-center mt-2">
            Health and Personal Care
          </h1>
        </Link>
        <Link
          to="/products"
          className="hover:bg-slate-100  shadow-lg  border-b-[1px] border-orange-700 hover:border-b-0  pb-1"
        >
          <img
            className="h-32 w-full rounded-xl rounded-b-none"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThjLjbM3uXAsMl4dfeMzHLt0JJnMpFArlzwA&s"
            alt=""
          />
          <h1 className="text-sm font-serif text-center mt-2">Automotive</h1>
        </Link>
        <Link
          to="/products"
          className="hover:bg-slate-100  shadow-lg  border-b-[1px] border-orange-700 hover:border-b-0  pb-1"
        >
          <img
            className="h-32 w-full rounded-xl rounded-b-none"
            src="https://png.pngtree.com/element_our/png/20181215/green-agriculture-logo-design-template-vector-illustration-png_270631.jpg"
            alt=""
          />
          <h1 className="text-sm font-serif text-center mt-2">
            Agricultural Products
          </h1>
        </Link>
        <Link
          to="/products"
          className="hover:bg-slate-100  shadow-lg  border-b-[1px] border-orange-700 hover:border-b-0  pb-1"
        >
          <img
            className="h-32 w-full rounded-xl rounded-b-none"
            src="https://www.shutterstock.com/image-vector/modern-minimalist-home-appliance-store-600nw-2184010063.jpg"
            alt=""
          />
          <h1 className="text-sm font-serif text-center mt-2">
            Home Appliances and Furniture
          </h1>
        </Link>
        <Link
          to="/products"
          className="hover:bg-slate-100  shadow-lg  border-b-[1px] border-orange-700 hover:border-b-0  pb-1"
        >
          <img
            className="h-32 w-full rounded-xl rounded-b-none"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzdSR6lo3r3v0EWQHrvF3vctfAeIZFbLUhTQ&s"
            alt="Construction Materials"
          />
          <h1 className="text-sm font-serif text-center mt-2">
            Construction Materials
          </h1>
        </Link>
        <Link
          to="/products"
          className="hover:bg-slate-100  shadow-lg  border-b-[1px] border-orange-700 hover:border-b-0  pb-1"
        >
          <img
            className="h-32 w-full rounded-xl rounded-b-none"
            src="https://www.pngitem.com/pimgs/m/161-1619330_logos-e-commerce-png-transparent-png.png"
            alt=""
          />
          <h1 className="text-sm font-serif text-center mt-2">E-commerce</h1>
        </Link>
        <Link
          to="/products"
          className="hover:bg-slate-100  shadow-lg  border-b-[1px] border-orange-700 hover:border-b-0  pb-1"
        >
          <img
            className="h-32 w-full rounded-xl rounded-b-none"
            src="https://cdn-icons-png.flaticon.com/512/2132/2132405.png"
            alt="Education and Learning Tools"
          />
          <h1 className="text-sm font-serif text-center mt-2">
            Education and Learning Tools
          </h1>
        </Link>
        <Link
          to="/products"
          className="hover:bg-slate-100  shadow-lg  border-b-[1px] border-orange-700 hover:border-b-0  pb-1"
        >
          <img
            className="h-32 w-full rounded-xl rounded-b-none"
            src="https://static.vecteezy.com/system/resources/thumbnails/006/922/994/small/needle-and-thread-line-icon-illustration-vector.jpg"
            alt="Textiles and Apparel"
          />
          <h1 className="text-sm font-serif text-center mt-2">
            Textiles and Apparel
          </h1>
        </Link>
      </div>
    </div>
  );
};

export default Category;