const express=require("express");
const authController=require("../controller/auth.controller")
const router=express.Router();

router.post("/register",authController.register)
router.post("/login",authController.login)
router.get("/dashboard",authController.dashboard)
router.get("/allteacher",authController.allTeacher)
router.post("/logout", authController.logout);
module.exports=router