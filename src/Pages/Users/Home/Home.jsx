import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";

const Home = () => {
    const { user, loading } = useContext(AuthContext);

    if (loading){
        return <h1 className="text-5xl text-center text-green-600">Loading...</h1>
    }
    console.log(user);
    return (
        <div>
            <h1 className="text-5xl text-center">This is home</h1>
        </div>
    );
};

export default Home;