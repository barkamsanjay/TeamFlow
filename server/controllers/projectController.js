import Project from "../models/Project.js";

export const createProject = async (req, res) => {
  try {
    const { title, description } = req.body;

    // Validate input
    if (!title || !description) {
      return res.status(400).json({
        message: "Please provide all fields",
      });
    }

    // Create project
    const project = await Project.create({
      title,
      description,
      owner: req.user._id,
    });

    res.status(201).json({
      message: "Project created successfully",
      project,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};