import ImageLocal from "../models/imageLocal";
import fs from "fs";
const allImageOne = async (req, res) => {
  try {
    const images = await ImageLocal.find();
    res.status(200).json({
      success: true,
      message: "ImageLocal thành công",
      count: images.length,
      images,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error,
    });
  }
};

const newImageOne = async (req, res) => {
  try {
    const newImageLocal = await new ImageLocal({
      image: req.file,
    });
    await newImageLocal.save();
    res.status(200).json({
      success: true,
      message: "newImageLocal thành công",
      newImageLocal,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      error,
    });
  }
};

const updateImageOne = async (req, res) => {
  try {
    // tìm và xóa image cũ
    const newImage = await ImageLocal.findById(req.query.id);
    const path = `public/image-one/${newImage.image.filename}`;
    fs.unlink(path, (err) => {
      return console.log(err);
    });
    // thêm ảnh mới và lưu
    newImage.image = req.file;
    await newImage.save();

    res.status(200).json({
      success: true,
      message: "updateImage thành công",
      newImage,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error,
    });
  }
};

const deleteImageOne = async (req, res) => {
  try {
    // const image = await ImageLocal.findById(req.query.id);
    const image = await ImageLocal.findByIdAndDelete(req.query.id);
    const path = `public/image-one/${image.image.filename}`;
    fs.unlink(path, (err) => {
      return console.log(err);
    });
    res.status(200).json({
      success: true,
      message: "deleteImage thành công",
      image,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error,
    });
  }
};
// ----------- Many -----------------
export { allImageOne, newImageOne, updateImageOne, deleteImageOne };
