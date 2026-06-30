import { useEffect, useState } from "react";
import Sidebar from "../../component/Teacher/Sidebar";
import Topbar from "../../component/Teacher/Topbar";

import {
  getTeacherProjects,
  approveProject,
  rejectProject,
} from "../../services/projectApi";

const Dashboard = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const res = await getTeacherProjects();
      setProjects(res.projects);
    } catch (error) {
      console.log(error);
    }
  };

  const handleApprove = async (id) => {
    try {
      const res = await approveProject(id);

      alert(res.message);

      fetchProjects();
    } catch (error) {
      alert(error.response?.data?.message || "Approve Failed");
    }
  };

  const handleReject = async (id) => {
    try {
      const res = await rejectProject(id);

      alert(res.message);

      fetchProjects();
    } catch (error) {
      alert(error.response?.data?.message || "Reject Failed");
    }
  };

  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 bg-slate-100 min-h-screen">
        <Topbar />

        <div className="p-10">
          <h1 className="text-4xl font-bold mb-2">
            Teacher Dashboard
          </h1>

          <p className="text-gray-600 mb-8">
            Total Projects : {projects.length}
          </p>

          <div className="bg-white rounded-xl shadow-xl overflow-hidden">

            <table className="w-full">

              <thead className="bg-blue-600 text-white">

                <tr>

                  <th className="p-4">Student</th>

                  <th className="p-4">Project</th>

                  <th className="p-4">Description</th>

                  <th className="p-4">Status</th>

                  <th className="p-4">Action</th>

                </tr>

              </thead>

              <tbody>

                {projects.length > 0 ? (

                  projects.map((project) => (

                    <tr
                      key={project._id}
                      className="border-b text-center hover:bg-gray-100"
                    >
                      <td className="p-5">

                        <h2 className="font-bold">

                          {project.studentId?.name}

                        </h2>

                        <p className="text-gray-500 text-sm">

                          {project.studentId?.email}

                        </p>

                      </td>

                      <td className="font-semibold">

                        {project.projectName}

                      </td>

                      <td>

                        {project.description}

                      </td>

                      <td>

                        <span
                          className={`px-4 py-2 rounded-full text-white

                          ${
                            project.status === "Pending"
                              ? "bg-yellow-500"
                              : ""
                          }

                          ${
                            project.status === "Approve"
                              ? "bg-green-600"
                              : ""
                          }

                          ${
                            project.status === "Reject"
                              ? "bg-red-600"
                              : ""
                          }
                          
                          `}
                        >
                          {project.status}
                        </span>

                      </td>

                      <td>

                        <button
                          onClick={() => handleApprove(project._id)}
                          className="bg-green-600 text-white px-4 py-2 rounded-lg mr-3 hover:bg-green-700"
                        >
                          Approve
                        </button>

                        <button
                          onClick={() => handleReject(project._id)}
                          className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
                        >
                          Reject
                        </button>

                      </td>

                    </tr>

                  ))

                ) : (

                  <tr>

                    <td
                      colSpan="5"
                      className="p-8 text-center text-gray-500"
                    >
                      No Projects Found
                    </td>

                  </tr>

                )}

              </tbody>

            </table>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Dashboard;