import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../utils/Context";

function Nav() {
  const [products] = useContext(ProductContext);

  let distinct_category =
    products && products.reduce((acc, cv) => [...acc, cv.category], []);
  distinct_category = [...new Set(distinct_category)];
//   console.log(distinct_category);

  const color = () => {
    return `rgba(${(Math.random() * 255).toFixed()}, ${(
      Math.random() * 255
    ).toFixed()}, ${(Math.random() * 255).toFixed()}, 0.4)`;
  };
//   console.log(color())

  return (
    <nav className="w-[20%] h-full bg-zinc-100 flex flex-col items-center pt-5">
      <Link to={"/"}
        className="text-3xl font-bold tracking-tight text-blue-400"
        href="/create"
      >
        Amazing.in
      </Link>
      <hr className="my-3 w-[80%] mb-10" />

      <h1 className="text-xl w-[80%] mb-4 font-medium">Category Filter</h1>
      <div className="w-[80%] leading-none">
        {distinct_category.map((category, index) => (
          <Link
            key={index}
            to={`/?category=${category}`}
            className="flex items-center mb-3"
          >
            <span style={{backgroundColor: color()}} className="w-[15px] h-[15px] bg-blue-200 rounded-full mr-2"></span>
            {category}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Nav;
