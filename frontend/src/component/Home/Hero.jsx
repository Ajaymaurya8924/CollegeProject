import React from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {

    const navigate = useNavigate();

    return (

        <section className="bg-slate-100 h-[85vh] flex items-center justify-between px-20">

            {/* Left */}

            <div className="w-1/2">

                <p className="text-blue-600 font-semibold text-xl">

                    🎓 Student Project Portal

                </p>

                <h1 className="text-6xl font-bold mt-6 leading-tight text-slate-900">

                    Submit

                    <span className="text-blue-600">

                        {" "}Projects{" "}

                    </span>

                    Easily

                    <br />

                    Track Every

                    <span className="text-blue-600">

                        {" "}Submission

                    </span>

                </h1>

                <p className="text-gray-600 mt-8 text-lg leading-8">

                    A modern platform where students can submit projects,
                    teachers can approve or reject them and every submission
                    can be tracked in one place.

                </p>

                <div className="flex gap-6 mt-10">

                    <button
                        onClick={() => navigate("/register")}
                        className="bg-blue-600 text-white px-8 py-4 rounded-xl text-lg hover:bg-blue-700 transition"
                    >
                        Get Started
                    </button>

                    <button
                        onClick={() => navigate("/login")}
                        className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl text-lg hover:bg-blue-50 transition"
                    >
                        Login
                    </button>

                </div>

            </div>

            {/* Right */}

            <div className="w-1/2 flex justify-center">

                <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900"
                    alt="Students"
                    className="w-[650px] rounded-3xl shadow-2xl"
                />

            </div>

        </section>

    )

}

export default Hero;