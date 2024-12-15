import React from "react";
import BlogCard from "./BlogCard";

const AllBlog = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      <BlogCard />
      <BlogCard />
      <BlogCard />
    </div>
  );
};

export default AllBlog;
