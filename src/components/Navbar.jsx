import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-slate-800 px-8 py-3">
      <Link className="text-white font-bold" href={"/"}>
        ToDo
      </Link>
      <div className="flex flex-col-2 gap-3">
        <Link className="text-white" href="/blog">
          Blog
        </Link>
        <Link className="text-white" href="/add-blog">
          Add Blog
        </Link>
      </div>
      <Link className="bg-white p-2" href={"/addList"}>
        Add List
      </Link>
    </nav>
  );
};

export default Navbar;
