import { NavLink, useNavigate } from "react-router-dom";
import { logoutUser } from "../../services/authApi";

const Sidebar = () => {

    const navigate = useNavigate();

    const handleLogout = async () => {

        try {

            const res = await logoutUser();

            alert(res.message);

            localStorage.clear();

            navigate("/login");

        } catch (error) {

            alert(
                error.response?.data?.message ||
                "Logout Failed"
            );

        }

    };

    return (

        <div className="w-72 h-screen bg-slate-900 text-white">

            <div className="p-8 border-b border-slate-700">

                <h1 className="text-3xl font-bold">

                    Project Portal

                </h1>

                <p className="text-gray-400 mt-2">

                    Student Panel

                </p>

            </div>

            <div className="mt-8 flex flex-col gap-3 px-5">

                <NavLink
                    to="/student/dashboard"
                    className="p-4 rounded-xl hover:bg-blue-600 transition"
                >
                    🏠 Dashboard
                </NavLink>

                <NavLink
                    to="/student/addproject"
                    className="p-4 rounded-xl hover:bg-blue-600 transition"
                >
                    ➕ Add Project
                </NavLink>

                <NavLink
                    to="/student/myprojects"
                    className="p-4 rounded-xl hover:bg-blue-600 transition"
                >
                    📁 My Projects
                </NavLink>

                <NavLink
                    to="/student/profile"
                    className="p-4 rounded-xl hover:bg-blue-600 transition"
                >
                    👤 Profile
                </NavLink>

            </div>

            <div className="absolute bottom-8 w-72 px-5">

                <button
                    onClick={handleLogout}
                    className="w-full bg-red-600 hover:bg-red-700 p-4 rounded-xl"
                >
                    Logout
                </button>

            </div>

        </div>

    );

};

export default Sidebar;