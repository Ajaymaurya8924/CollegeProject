const projectModel = require("../models/project.model")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

//adding a project
async function addproject(req, res) {
    try {
        const token = req.cookies.token;

        if (!token) {
            return res.status(401).json({
                message: "Unauthorized"
            });
        }

        const decoded = jwt.verify(token, process.env.JWT_TOKEN);

        if (decoded.role !== "Student") {
            return res.status(403).json({
                message: "Only students can submit projects"
            });
        }

        const { projectName, description, teacherId } = req.body;

        if (!projectName || !description || !teacherId) {
            return res.status(400).json({
                message: "All fields are required"
            });
        }

        const project = await projectModel.create({
            projectName,
            description,
            teacherId,
            studentId: decoded._id
        });

        return res.status(201).json({
            message: "Project added successfully",
            project
        });

    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
}


//deleteing a project by user
async function deleteproject(req, res) {
    const token = req.cookies.token
    if (!token) {
        return res.status(401).json({
            message: "Unorthorized "
        })
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_TOKEN)
        if (!decoded) {
            return res.status(401).json({
                message: "Unorthorized "
            })
        }
        if (decoded.role !== "Student") {
            return res.status(401).json({
                message: "You are not a student"
            })
        }

        const deleteproject = await projectModel.findByIdAndDelete(req.params.id)
        res.status(200).json({
            message: "Project delete succesfully"
        })
    } catch (error) {
        res.stutus(409).json({
            error
        })
    }

}

//for approving a project
async function approveProject(req, res) {
    const token = req.cookies.token
    if (!token) {
        return res.status(401).json({
            message: "Unorthorized "
        })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_TOKEN)
        if (!decoded) {
            return res.status(401).json({
                message: "Unorthorized "
            })
        }
        if (decoded.role !== "Teacher") {
            return res.status(401).json({
                message: "You are not a teacher"
            })
        }
        const project = await projectModel.findById(req.params.id)
        project.status = "Approve"
        await project.save()
        res.status(200).json({
            message: "Project Approved",
            project
        })
    } catch (error) {
        res.status(409).json({
            error
        })
    }
}


//for rejecting a project
async function rejectProject(req, res) {
    const token = req.cookies.token
    if (!token) {
        return res.status(401).json({
            message: "Unorthorized "
        })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_TOKEN)
        if (!decoded) {
            return res.status(401).json({
                message: "Unorthorized "
            })
        }
        if (decoded.role !== "Teacher") {
            return res.status(401).json({
                message: "You are not a Teacher"
            })
        }
        const project = await projectModel.findById(req.params.id)
        project.status = "Reject"
        await project.save()
        res.status(200).json({
            message: "Project Reject",
            project
        })
    } catch (error) {
        res.status(409).json({
            error
        })
    }
}


//for seeing all the projects of student
async function studentProject(req, res) {
    const token = req.cookies.token
    if (!token) {
        return res.status(401).json({
            message: "Unorthorized "
        })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_TOKEN)
        if (!decoded) {
            return res.status(401).json({
                message: "Unorthorized "
            })
        }
        if (decoded.role !== "Student") {
            return res.status(401).json({
                message: "You are not a Student"
            })
        }

        const projects = await projectModel
            .find({ studentId: decoded._id })
            .populate("teacherId", "name email");

        res.status(200).json({
            message: "Projects fetched successfully",
            projects
        });

    } catch (error) {
        res.status(409).json({
            error
        })
    }
}


//for seeing all project
async function teacherProjects(req, res) {

    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({
            message: "Unauthorized"
        });
    }

    try {

        const decoded = jwt.verify(token, process.env.JWT_TOKEN);
console.log(decoded); 
        if (decoded.role !== "Teacher") {
            return res.status(403).json({
                message: "Only Teacher can access"
            });
        }

        // const projects = await projectModel
        //     .find({ teacherId: decoded._id })
        //     .populate("studentId", "name email");





const projects = await projectModel
    .find({ teacherId: decoded._id })
    .populate("studentId", "name email");




        res.status(200).json({
            message: "Projects fetched successfully",
            projects
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
}

module.exports = { addproject, deleteproject, approveProject, rejectProject, studentProject,teacherProjects }

