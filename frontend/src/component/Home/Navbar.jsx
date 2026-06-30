import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {

    const navigate = useNavigate();

    return (

        <nav className="w-full h-20 bg-slate-900 shadow-xl flex justify-between items-center px-20">

            {/* Logo */}

            <div className="flex items-center gap-4">

                <div className="w-12 h-12 rounded-full bg-blue-600 flex justify-center items-center text-white text-2xl font-bold">

                    P

                </div>

                <div>

                    <h1 className="text-2xl font-bold text-white">

                        Project Portal

                    </h1>

                    <p className="text-gray-400 text-sm">

                        Student Project Management

                    </p>

                </div>

            </div>

            {/* Menu */}

            <ul className="flex gap-10 text-white text-lg">

                <li className="cursor-pointer hover:text-blue-400">

                    Home

                </li>

                <li className="cursor-pointer hover:text-blue-400">

                    Features

                </li>

                <li className="cursor-pointer hover:text-blue-400">

                    About

                </li>

                <li className="cursor-pointer hover:text-blue-400">

                    Contact

                </li>

            </ul>

            {/* Buttons */}

            <div className="flex gap-5">

                <button

                    onClick={() => navigate("/login")}

                    className="px-5 py-2 rounded-lg bg-white font-semibold"

                >

                    Login

                </button>

                <button

                    onClick={() => navigate("/register")}

                    className="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"

                >

                    Register

                </button>

            </div>

        </nav>

    )

}

export default Navbar;