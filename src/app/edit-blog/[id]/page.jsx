import EditBlog from "@/components/EditBlog";
import React from "react";

const EditBlogPage = ({ params }) => {
  return (
    <div>
      <h2>Edit Blog no {params.id}</h2>
      <EditBlog />
    </div>
  );
};

export default EditBlogPage;
