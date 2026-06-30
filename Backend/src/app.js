const express=require("express")
const cookieParser=require("cookie-parser")
const authRoute=require("./routes/user.route")
const projectRoute=require("./routes/project.route")
const cors = require("cors");
const app=express()


app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));

app.use(express.json());
app.use(cookieParser())

app.use("/api/auth",authRoute)
app.use("/api/project",projectRoute)

module.exports=app