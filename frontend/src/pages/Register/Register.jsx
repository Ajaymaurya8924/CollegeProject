import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../../services/authApi";

const Register = () => {

    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({

        name: "",
        email: "",
        password: "",
        role: "Student"

    });

    const handleChange = (e) => {
        setFormData({

            ...formData,

            [e.target.name]: e.target.value

        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            setLoading(true);

            const response = await registerUser(formData);

            alert(response.meassage);

            navigate("/login");

        }

        catch (error) {

            alert(

                error.response?.data?.message ||

                "Registration Failed"

            );

        }

        finally {

            setLoading(false);

        }

    };

    return (

        <div className="min-h-screen bg-slate-100 flex justify-center items-center">

            <div className="w-[1000px] h-[650px] bg-white rounded-3xl shadow-2xl flex overflow-hidden">

                {/* Left */}

                <div className="w-1/2 bg-blue-700 text-white flex flex-col justify-center items-center p-10">

                    <h1 className="text-5xl font-bold">

                        Create Account 🚀

                    </h1>

                    <p className="mt-8 text-lg text-center leading-8">

                        Join Project Portal and manage your
                        college projects easily.

                    </p>

                    <img

                        src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=900"

                        className="rounded-2xl mt-10"

                    />

                </div>

                {/* Right */}

                <div className="w-1/2 flex justify-center items-center">

                    <form

                        onSubmit={handleSubmit}

                        className="w-[380px]"

                    >

                        <h1 className="text-4xl font-bold">

                            Register

                        </h1>

                        <p className="text-gray-500 mt-2">

                            Create your account

                        </p>

                        <input

                            type="text"

                            name="name"

                            placeholder="Full Name"

                            value={formData.name}

                            onChange={handleChange}

                            className="w-full mt-8 p-4 border rounded-xl outline-none"

                        />

                        <input

                            type="email"

                            name="email"

                            placeholder="Email"

                            value={formData.email}

                            onChange={handleChange}

                            className="w-full mt-5 p-4 border rounded-xl outline-none"

                        />

                        <input

                            type="password"

                            name="password"

                            placeholder="Password"

                            value={formData.password}

                            onChange={handleChange}

                            className="w-full mt-5 p-4 border rounded-xl outline-none"

                        />

                        <select

                            name="role"

                            value={formData.role}

                            onChange={handleChange}

                            className="w-full mt-5 p-4 border rounded-xl outline-none"

                        >

                            <option>

                                Student

                            </option>

                            <option>

                                Teacher

                            </option>

                        </select>

                        <button

                            className="w-full mt-8 bg-blue-600 text-white p-4 rounded-xl hover:bg-blue-700"

                        >

                            {

                                loading ?

                                    "Creating Account..."

                                    :

                                    "Register"

                            }

                        </button>

                        <p className="text-center mt-8">

                            Already have an account?

                            <Link

                                to="/login"

                                className="ml-2 text-blue-600 font-bold"

                            >

                                Login

                            </Link>

                        </p>

                    </form>

                </div>

            </div>

        </div>

    );

};

export default Register;