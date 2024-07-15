import { Outlet } from "react-router-dom";
// import Authentication from "../../Pages/Shared/Authentication";

const Root = () => {
    return (
        <div>
            {/* <Authentication></Authentication> */}
            <Outlet></Outlet>
        </div>
    );
};

export default Root;