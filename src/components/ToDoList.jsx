import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from 'react-icons/hi'
import getData from "@/getData/getData";
// import getTopics from "@/getData/getTopics";




const ToDoList = async () => {

    const { topics } = await getData('topics');

    return (
        <>
            {topics.map((topic) => (
                <div key={topic._id} className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start">
                    <div>
                        <h2 className="font-bold text-2xl">{topic.title}</h2>
                        <div>{topic.description}</div>
                    </div>

                    <div className="flex gap-2">
                        <RemoveBtn id={topic._id} />
                        <Link href={`/edit/${topic._id}`}>
                            <HiPencilAlt size={24} />
                        </Link>
                    </div>
                </div>
            ))}
        </>
    );
};

export default ToDoList;