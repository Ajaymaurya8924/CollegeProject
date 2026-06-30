import API from "./api";

// Register
export const registerUser = async (userData) => {
    const response = await API.post("/auth/register", userData);
    return response.data;
};

// Login
export const loginUser = async (userData) => {
    const response = await API.post("/auth/login", userData);
    return response.data;
};

// All Teachers
export const getTeachers = async () => {
    const response = await API.get("/auth/allteacher");
    return response.data;
};

//logout ke liye

export const logoutUser = async () => {

    const response = await API.post("/auth/logout");

    return response.data;

};