import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../services/authApi";

const Login = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({

        email: "",
        password: ""

    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {

            setLoading(true);

            const response = await loginUser(formData);

            alert(response.message);

            if (response.user.role === "Student") {
                navigate("/student/dashboard");
            }
            else {
                navigate("/teacher/dashboard");

            }

        }

        catch (error) {

            alert(

                error.response?.data?.message ||

                "Login Failed"

            )

        }

        finally {

            setLoading(false);

        }

    }

    return (

        <div className="min-h-screen bg-slate-100 flex justify-center items-center">

            <div className="w-[950px] h-[600px] bg-white rounded-3xl shadow-2xl flex overflow-hidden">

                {/* Left */}

                <div className="w-1/2 bg-blue-700 flex flex-col justify-center items-center text-white p-10">

                    <h1 className="text-5xl font-bold">

                        Welcome Back 👋

                    </h1>

                    <p className="mt-8 text-lg text-center leading-8">

                        Login to continue managing

                        your college projects.

                    </p>

                    <img

                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900"

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

                            Login

                        </h1>

                        <p className="text-gray-500 mt-3">

                            Login into your account

                        </p>

                        <input

                            type="email"

                            name="email"

                            placeholder="Email"

                            value={formData.email}

                            onChange={handleChange}

                            className="w-full mt-10 p-4 rounded-xl border outline-none"

                        />

                        <input

                            type="password"

                            name="password"

                            placeholder="Password"

                            value={formData.password}

                            onChange={handleChange}

                            className="w-full mt-5 p-4 rounded-xl border outline-none"

                        />

                        <button

                            className="w-full mt-8 bg-blue-600 text-white p-4 rounded-xl hover:bg-blue-700"

                        >

                            {

                                loading ?

                                    "Logging..."

                                    :

                                    "Login"

                            }

                        </button>

                        <p className="text-center mt-8">

                            Don't have an account?

                            <Link

                                to="/register"

                                className="text-blue-600 font-bold ml-2"

                            >

                                Register

                            </Link>

                        </p>

                    </form>

                </div>

            </div>

        </div>

    )

}

export default Login;