import EditForm from "@/components/EditForm";

const getTpicById = async (id) => {
    try {
        const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
            cache: "no-store"
        });

        if(!res.ok){
            throw new Error("Faild To Fetch DAta");
        }

        return res.json();
    } catch (error) {
        console.log(error);
    }
}

const Edit = async ({ params }) => {
    const { id } = params;

    const {topic} = await getTpicById(id);
    return (
        <div>
            <EditForm id={id} topic={topic} />
        </div>
    );
};

export default Edit;