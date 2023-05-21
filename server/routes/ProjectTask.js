const { Router } = require("express")
const ProjectTask= require("../models/ProjectTask")
const projecttaskRouter = Router();

projecttaskRouter.get("/:userId/project/credential", async (req, res) => {
    try {
      const ProjectTask = await ProjectCredential.find();
      res.status(200).json(ProjectTask);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }
  
)



module.exports =projectcredentialRouter;

