const express = require("express");
const projectController = require("../controller/project.controller")
const router = express.Router();

router.post("/addproject", projectController.addproject)

router.delete("/deleteproject/:id", projectController.deleteproject)
router.patch("/approveproject/:id", projectController.approveProject)
router.patch("/rejectproject/:id", projectController.rejectProject)
router.get("/studentproject", projectController.studentProject)
router.get("/teacherprojects", projectController.teacherProjects);

module.exports = router