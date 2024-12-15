import React from "react";
import image from "../assets/img/cat.jpg";
import Image from "next/image";

const BlogCard = () => {
  return (
    <div className="w-full bg-slate-300 rounded-xl overflow-hidden">
      <div>
        <Image src={image} />
      </div>
      <div className="px-5 py-3">
        <h4 className="text-teal-700 font-bold text-md">Title</h4>
        <p className="text-xs my-2">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad rem atque
          delectus voluptatum ipsum animi impedit fugiat corrupti, voluptates
          eum?...
        </p>
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
