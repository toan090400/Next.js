// import Room from "../models/roomModel";

const allData = async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: "allData",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error,
    });
  }
};
const newData = async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: "newData",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error,
    });
  }
};
const getData = async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: "getData",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error,
    });
  }
};
const updateData = async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: "updateData",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error,
    });
  }
};
const deleteData = async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: "deleteData",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error,
    });
  }
};
export { allData, newData, getData, updateData, deleteData };
