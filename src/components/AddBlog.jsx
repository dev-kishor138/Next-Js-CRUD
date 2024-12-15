const AddBlog = () => {
  return (
    <form className="flex flex-col gap-3">
      <input
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Blog Title"
      />
      <textarea
        col="10"
        row="10"
        className="border border-slate-500 px-8 py-2 h-32 resize-none"
        placeholder="Blog Description"
      ></textarea>
      <input
        className="border border-slate-500 px-8 py-2"
        type="file"
        placeholder="Blog Image"
      />
      <button
        type="submit"
        className="bg-green-500 font-bold text-white py-3 px-3 w-fit"
      >
        Save Blog
      </button>
    </form>
  );
};

export default AddBlog;
