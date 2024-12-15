
import React from "react";
import Image from "next/image";
import image from "@/assets/img/cat.jpg"

const BlogCard = () => {
  // const BlogCard = ({ blog }) => {
  // if (!blog) {
  //   return <div>No blog data available</div>;
  // }

  // const { title, description, image } = blog;
  // console.log(title);
  return (
    <div className="w-full bg-slate-300 rounded-xl overflow-hidden">
      <div>
        <Image src={image} alt="image" />
      </div>
      <div className="px-5 py-3">
        {/* <h4 className="text-teal-700 font-bold text-md">{title ?? ""}</h4> */}
        <h4 className="text-teal-700 font-bold text-md">Title</h4>
        {/* <p className="text-xs my-2">
          {description ?? ""}
        </p> */}

        <p className="text-xs my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, sint perspiciatis, cumque aliquam ea rem animi sapiente illo culpa velit eum adipisci. Possimus quisquam ut voluptate eos asperiores facere. Hic.</p>
        <div className="text-end">
          <button className="bg-teal-500 px-5 py-2 rounded-md text-xs">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
