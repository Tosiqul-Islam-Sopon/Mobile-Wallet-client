// src/components/RegistrationForm.jsx
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';

const Registration = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const {createUser} = useContext(AuthContext);

    const onSubmit = async (data) => {
        createUser(data);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder='Your Name'
                            {...register('name', { required: 'Name is required' })}
                            className="mt-1 p-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                        />
                        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                    </div>

                    <div>
                        <label htmlFor="mobileNumber" className="block text-sm font-medium text-gray-700">Mobile Number</label>
                        <input
                            type="tel"
                            name="mobileNumber"
                            id="mobileNumber"
                            placeholder='Enter Your Mobile Number'
                            {...register('mobileNumber', { required: 'Mobile Number is required' })}
                            className="mt-1 p-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                        />
                        {errors.mobileNumber && <p className="text-red-500 text-xs mt-1">{errors.mobileNumber.message}</p>}
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder='Enter Your Email Address'
                            id="email"
                            {...register('email', {
                                required: 'Email is required',
                                pattern: {
                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                    message: 'Invalid email address'
                                }
                            })}
                            className="mt-1 p-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                    </div>

                    <div>
                        <label htmlFor="pin" className="block text-sm font-medium text-gray-700">5-digit PIN</label>
                        <input
                            type="password"
                            name="pin"
                            id="pin"
                            placeholder='Enter 5 digit PIN'
                            {...register('pin', {
                                required: 'PIN is required',
                                pattern: {
                                    value: /^\d{5}$/,
                                    message: 'PIN must be a 5-digit number'
                                }
                            })}
                            className="mt-1 p-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                        />
                        {errors.pin && <p className="text-red-500 text-xs mt-1">{errors.pin.message}</p>}
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
                        >
                            Register
                        </button>
                    </div>
                </form>
                <div>
                    <p className="text-sm text-gray-700 mt-5 ml-1">Already have an account? <Link to={"/"}><span className='text-blue-500'>Login</span></Link> </p>
                </div>
            </div>
        </div>
    );
};

export default Registration;
