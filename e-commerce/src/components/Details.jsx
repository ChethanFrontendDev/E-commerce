import axios from "../utils/axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Loading from "./Loading";

function Details() {
  const { id } = useParams();

  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };

  const [singleProduct, setSingleProduct] = useState(null);

  const getSingleProduct = async () => {
    try {
      const { data } = await axios.get(`/products/${id}`);
      //   console.log(data);
      setSingleProduct(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleProduct();
  }, []);

  return singleProduct ? (
    <div className="w-[70%] h-full flex justify-between items-center m-auto p-[10%]">
      <button
        onClick={handleBack}
        className="absolute top-10 left-40 bg-zinc-500 px-4 py-2 rounded text-white"
      >
        Back
      </button>

      <img
        className="w-[40%] h-full object-contain"
        src={`${singleProduct.image}`}
      />
      <div className="content w-[50%]">
        <h1 className="text-4xl">{singleProduct.title}</h1>
        <h3 className="text-zinc-400 my-5">{singleProduct.category}</h3>
        <h2 className="text-red-300 mb-3">$ {singleProduct.price}</h2>
        <p className="mb-[5%]">{singleProduct.description}</p>
        <Link className="mr-5 py-2 px-5 border rounded border-blue-200 text-blue-300">
          Buy Now
        </Link>
        <Link className="py-2 px-5 border rounded border-red-200 text-red-300">
          Add to Cart
        </Link>
      </div>
    </div>
  ) : (
    <Loading />
  );
}

export default Details;
