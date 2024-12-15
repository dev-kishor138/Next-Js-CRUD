const getData = async ({ endpoints }) => {
    try {
        const res = await fetch(`http://localhost:3000/api/${endpoints}`, {
            cache: 'no-store'
        });

        if (!res.ok) {
            throw new Error("Failed To fetch Data");
        }

        return res.json();
    } catch (error) {
        console.log('Error Loading Data', error);

    }
};

export default getData;