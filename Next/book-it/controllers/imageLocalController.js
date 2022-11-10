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
const allImageMany = async (req, res) => {
  try {
    const images = await ImageLocal.find();
    res.status(200).json({
      success: true,
      message: "ImageLocal Many thành công",
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

const newImageMany = async (req, res) => {
  try {
    const newImageLocal = await new ImageLocal({
      images: req.files,
    });
    await newImageLocal.save();
    res.status(200).json({
      success: true,
      message: "newImageLocal many thành công",
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

const updateImageMany = async (req, res) => {
  try {
    // tìm và xóa image cũ
    const image = await ImageLocal.findById(req.query.id);
    const data = await image.images;
    data.forEach((item) => {
      const deleteImages = item.filename;
      const path = `public/image-many/${deleteImages}`;
      // địa chỉ lưu ảnh ../ui/public/assets/images
      fs.unlink(path, (err) => {
        return console.log(err);
      });
    });
    // thêm ảnh mới và lưu
    image.images = req.files;
    await image.save();

    res.status(200).json({
      success: true,
      message: "updateImage many thành công",
      image,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error,
    });
  }
};

const deleteImageMany = async (req, res) => {
  try {
    const image = await ImageLocal.findByIdAndDelete(req.query.id);
    const data = await image.images;
    data.forEach((item) => {
      const deleteImages = item.filename;
      const path = `public/image-many/${deleteImages}`;
      // địa chỉ lưu ảnh ../ui/public/assets/images
      fs.unlink(path, (err) => {
        return console.log(err);
      });
    });
    res.status(200).json({
      success: true,
      message: "deleteImage many thành công",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      error,
    });
  }
};
export {
  allImageOne,
  newImageOne,
  updateImageOne,
  deleteImageOne,
  allImageMany,
  newImageMany,
  updateImageMany,
  deleteImageMany,
};
