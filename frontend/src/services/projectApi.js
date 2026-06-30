import API from "./api";

// Add Project
export const addProject = async (projectData) => {
    const response = await API.post("/project/addproject", projectData);
    return response.data;
};

// Student Projects
export const getStudentProjects = async () => {
    const response = await API.get("/project/studentproject");
    return response.data;
};

// Delete Project
export const deleteProject = async (id) => {
    const response = await API.delete(`/project/deleteproject/${id}`);
    return response.data;
};

// Approve Project
export const approveProject = async (id) => {
    const response = await API.patch(`/project/approveproject/${id}`);
    return response.data;
};

// Reject Project
export const rejectProject = async (id) => {
    const response = await API.patch(`/project/rejectproject/${id}`);
    return response.data;
};




// Teacher Projects
export const getTeacherProjects = async () => {

    const response = await API.get("/project/teacherprojects");

    return response.data;

};