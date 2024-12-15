
import BlogCard from "./BlogCard";
// import getBlogs from "@/getData/getBlogs";

const AllBlog = async () => {

  // const { blogs } = await getBlogs();

  // console.log(blogs);

  return (
    <div className="grid grid-cols-3 gap-4">
      {/* {blogs.map((blog) => (
        <BlogCard key={blog._id} blog={blog} />
      ))} */}

      <BlogCard />
      <BlogCard />
      <BlogCard />
    </div>
  );
};

export default AllBlog;
