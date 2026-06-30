import { useEffect, useState } from "react";
import Sidebar from "../../component/Student/Sidebar";
import Topbar from "../../component/Student/Topbar";
import {
    getStudentProjects,
    deleteProject
} from "../../services/projectApi";

const MyProjects = () => {

    const [projects, setProjects] = useState([]);

    useEffect(() => {

        fetchProjects();

    }, []);

    const handleDelete = async (id) => {

    const confirmDelete = window.confirm(
        "Are you sure you want to delete this project?"
    );

    if (!confirmDelete) return;

    try {

        const res = await deleteProject(id);

        alert(res.message);

        fetchProjects();

    } catch (error) {

        alert(
            error.response?.data?.message ||
            "Delete Failed"
        );

    }

}

    const fetchProjects = async () => {

        try {

            const res = await getStudentProjects();

            setProjects(res.projects);

        }

        catch (error) {

            console.log(error);

        }

    }

    return (

        <div className="flex">

            <Sidebar />

            <div className="flex-1 bg-slate-100 min-h-screen">

                <Topbar />

                <div className="p-10">

                    <h1 className="text-4xl font-bold mb-8">

                        My Projects

                    </h1>

                    <table className="w-full bg-white shadow-xl rounded-xl overflow-hidden">

                        <thead className="bg-blue-600 text-white">

                            <tr>

                                <th className="p-4">
                                    Project
                                </th>

                                <th className="p-4">
                                    Teacher
                                </th>

                                <th className="p-4">
                                    Status
                                </th>

                                <th className="p-4">
                                    Action
                                </th>

                            </tr>

                        </thead>

                        <tbody>

                            {

                                projects.map((project) => (

                                    <tr
                                        key={project._id}
                                        className="border-b text-center"
                                    >

                                        <td className="p-5">

                                            <h2 className="font-bold">

                                                {project.projectName}

                                            </h2>

                                            <p className="text-gray-500">

                                                {project.description}

                                            </p>

                                        </td>

                                        <td>

                                            {project.teacherId?.name}

                                        </td>

                                        <td>

                                            <span

                                                className={`px-4 py-2 rounded-full text-white

        ${project.status === "Pending" ? "bg-yellow-500" : ""}

        ${project.status === "Approve" ? "bg-green-600" : ""}

        ${project.status === "Reject" ? "bg-red-600" : ""}

        `}

                                            >

                                                {project.status}

                                            </span>

                                        </td>
                                        <td>

                                            <button

                                                onClick={() => handleDelete(project._id)}

                                                className="bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700"

                                            >

                                                Delete

                                            </button>

                                        </td>

                                    </tr>

                                ))

                            }

                        </tbody>

                    </table>

                </div>

            </div>

        </div>

    )

}

export default MyProjects;