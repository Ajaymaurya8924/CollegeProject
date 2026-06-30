import { useEffect, useState } from "react";
import Sidebar from "../../component/Student/Sidebar";
import Topbar from "../../component/Student/Topbar";
import { getTeachers } from "../../services/authApi";
import { addProject } from "../../services/projectApi";

const AddProject = () => {

    const [teachers, setTeachers] = useState([]);

    const [formData, setFormData] = useState({
        projectName: "",
        description: "",
        teacherId: ""
    });

    useEffect(() => {
        fetchTeachers();
    }, []);

    const fetchTeachers = async () => {
        try {

            const res = await getTeachers();

            setTeachers(res.teachers);

        } catch (error) {

            console.log(error);

        }
    };

    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        if (
            !formData.projectName ||
            !formData.description ||
            !formData.teacherId
        ) {
            return alert("Please fill all fields");
        }

        try {

            const res = await addProject(formData);

            alert(res.message);

            setFormData({
                projectName: "",
                description: "",
                teacherId: ""
            });

        } catch (error) {

            alert(
                error.response?.data?.message ||
                "Project not added"
            );

        }

    };

    return (

        <div className="flex">

            <Sidebar />

            <div className="flex-1 bg-slate-100 min-h-screen">

                <Topbar />

                <div className="p-10 flex justify-center">

                    <div className="bg-white w-[700px] rounded-2xl shadow-xl p-10">

                        <h1 className="text-4xl font-bold mb-8">

                            Add Project

                        </h1>

                        <form onSubmit={handleSubmit}>

                            <input
                                type="text"
                                name="projectName"
                                placeholder="Project Name"
                                value={formData.projectName}
                                onChange={handleChange}
                                className="w-full border p-4 rounded-xl mb-5 outline-none"
                            />

                            <textarea
                                rows="6"
                                name="description"
                                placeholder="Project Description"
                                value={formData.description}
                                onChange={handleChange}
                                className="w-full border p-4 rounded-xl mb-5 outline-none"
                            />

                            <select
                                name="teacherId"
                                value={formData.teacherId}
                                onChange={handleChange}
                                className="w-full border p-4 rounded-xl mb-8 outline-none"
                            >

                                <option value="">
                                    Select Teacher
                                </option>

                                {
                                    teachers.map((teacher) => (

                                        <option
                                            key={teacher._id}
                                            value={teacher._id}
                                        >
                                            {teacher.name}
                                        </option>

                                    ))
                                }

                            </select>

                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white p-4 rounded-xl hover:bg-blue-700"
                            >
                                Submit Project
                            </button>

                        </form>

                    </div>

                </div>

            </div>

        </div>

    );

};

export default AddProject;