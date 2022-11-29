import Google from "../models/googleModel";
import Github from "../models/githubModel";
const allGoogle = async (req, res) => {
  try {
    const googles = await Google.find();
    res.status(200).json({
      googles,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: "Error",
      error,
    });
  }
};
const allGithub = async (req, res) => {
  try {
    const githubs = await Github.find();
    res.status(200).json({
      githubs,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: "Error",
      error,
    });
  }
};
export { allGoogle, allGithub };
