const userModel = require("../models/user.model")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")


async function register(req, res) {
    const { name, email, password, role = "Student" } = req.body

    const hash = await bcrypt.hash(password, 10)

    const user = await userModel.create({
        name,
        email,
        password: hash,
        role
    })

    const token = await jwt.sign({
        _id: user.id,
        role: user.role
    }, process.env.JWT_TOKEN)

    res.cookie("token", token)



res.status(200).json({
    message: "User registered successfully",
    user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role
    }
})

}

async function login(req, res) {
    const { email, password } = req.body

    if (!email || !password) {
        return res.status(401).json({
            message: "Both value required"
        })
    }

    const user = await userModel.findOne({ email })

    const ismatch = await bcrypt.compare(password, user.password)

    if (!ismatch) {
        return res.status(400).json({
            message: "Incorrect Password"
        })
    }

    const token = await jwt.sign({
        _id: user.id,
        role: user.role
    }, process.env.JWT_TOKEN)

    res.cookie("token", token)

    res.status(200).json({
        message: "User Log in sucessfully",
        user: {
            id: user._id,
            name: user.name,
            email: user.email,
            role: user.role
        }
    })


}

//student dashboard
async function dashboard(req, res) {
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

        const studentProfile = await userModel.findById(decoded._id)
        res.status(200).json({
            message: "user dashboard",
            user: {
                id: studentProfile._id,
                name: studentProfile.name,
                email: studentProfile.email
            }
        })
    } catch (error) {
        res.status(409).json({
            error
        })
    }


}

async function allTeacher(req, res) {
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({
            message: "Unauthorized"
        });
    }

    try {

        jwt.verify(token, process.env.JWT_TOKEN);

        const teachers = await userModel
            .find({ role: "Teacher" })
            .select("_id name email");

        res.status(200).json({
            message: "Teacher list fetched successfully",
            teachers
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
}


async function logout(req, res) {

    res.clearCookie("token");

    res.status(200).json({
        message: "Logout Successfully"
    });

}



module.exports = { register, login, dashboard,allTeacher,logout }