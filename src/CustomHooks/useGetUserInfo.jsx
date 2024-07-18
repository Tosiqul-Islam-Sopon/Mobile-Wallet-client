import useAxiosBase from "./useAxiosBase";

const useGetUserInfo = () => {

    const axiosBase = useAxiosBase();

    const response = await axiosBase.post("/login")
    return (
        <div>
            
        </div>
    );
};

export default useGetUserInfo;