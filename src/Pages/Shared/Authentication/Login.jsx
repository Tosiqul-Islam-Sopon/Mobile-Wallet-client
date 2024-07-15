import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log('Form Data:', data);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                        <label htmlFor="identifier" className="block text-sm font-medium text-gray-700">Phone Number or Email</label>
                        <input
                            type="text"
                            name="identifier"
                            id="identifier"
                            placeholder='Enter your phone number or email'
                            {...register('identifier', {
                                required: 'Phone number or email is required',
                                validate: value => {
                                    const phoneRegex = /^[0-9]{10,15}$/;
                                    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                                    return phoneRegex.test(value) || emailRegex.test(value) || 'Must be a valid phone number or email';
                                }
                            })}
                            className="mt-1 p-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                        />
                        {errors.identifier && <p className="text-red-500 text-xs mt-1">{errors.identifier.message}</p>}
                    </div>
                    <div>
                        <label htmlFor="pin" className="block text-sm font-medium text-gray-700">5-digit PIN</label>
                        <input
                            type="password"
                            name="pin"
                            id="pin"
                            placeholder='Enter Your 5 digit PIN'
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
                            Login
                        </button>
                    </div>
                </form>
                <div>
                    <p className="text-sm text-gray-700 mt-5 ml-1">Don&apos;t have an account? <Link to={"/registration"}><span className="text-blue-500">Sign up</span></Link> </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
