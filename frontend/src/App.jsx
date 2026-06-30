import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import StudentDashboard from "./pages/Student/Dashboard";
import TeacherDashboard from "./pages/Teacher/Dashboard";
import AddProject from "./pages/Student/AddProject";
import MyProjects from "./pages/Student/MyProjects";


function App() {

  return (

    <Routes>

      <Route path="/" element={<Home />} />

      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />

      <Route
        path="/student/dashboard"
        element={<StudentDashboard />}
      />

      <Route
        path="/teacher/dashboard"
        element={<TeacherDashboard />}
      />

      <Route
        path="/student/addproject"
        element={<AddProject />}
      />
      <Route
        path="/student/myprojects"
        element={<MyProjects />}
      />

   

    </Routes>

  );

}

export default App;