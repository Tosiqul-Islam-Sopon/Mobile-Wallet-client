import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import useAxiosBase from "../CustomHooks/useAxiosBase";
import Swal from "sweetalert2";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    const axiosBase = useAxiosBase();

    useEffect(() => {
        const token = localStorage.getItem('loginToken');
        if (token) {
            // Verify token and fetch user information
            axiosBase.post("/verifyToken", { token })
                .then(response => {
                    setUser(response.data.user);
                    setLoading(false);
                })
                .catch(() => {
                    localStorage.removeItem('token');
                });
        }
    }, [axiosBase]);

    const createUser = async (data) => {
        const response = await axiosBase.post("/register", data);

        if (response.data.insertedId) {
            Swal.fire({
                title: "Registration Success",
                text: "Please wait for admins approval",
                icon: "success"
            });
            // navigate('/');
        }
        else {
            Swal.fire({
                title: "Registration Failed",
                text: `${response.data.message}`,
                icon: "error"
            });
        }
    }
    const login = async (data) => {
        try {
            const response = await axiosBase.post("/login", data);

            if (response.status === 200) {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Login Success",
                    text: "Welcome to Mobile Wallet",
                    showConfirmButton: false,
                    timer: 1500
                });
                setUser(response.data.user);
                localStorage.setItem('loginToken', response.data.token);
                return "login success";
            }
        } catch (error) {
            if (error.response && error.response.status === 400) {
                Swal.fire({
                    title: "Login Failed",
                    text: `${error.response.data.error}`,
                    icon: "error"
                });
            } else {
                Swal.fire({
                    title: "Login Failed",
                    text: "An unexpected error occurred",
                    icon: "error"
                });
            }
        }

    }

    const authInfo = {
        user,
        createUser,
        login,
        loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node
}