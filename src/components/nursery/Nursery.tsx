import { useGetNurseriesQuery } from "@/redux/features/NurseryApi";


const Nursery = () => {
    const {data ,isloading} = useGetNurseriesQuery({});
    
    if(isloading) return <p>Loading...</p>;

    
    if(!data) return <p>No nurseries found.</p>;
    console.log(data);
    return (
        <div>
            
        </div>
    );
};

export default Nursery;