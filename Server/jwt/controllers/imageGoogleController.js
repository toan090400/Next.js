import ImageGoogle from "../models/imageGoogleModel";
import fs from "fs";
import { google } from "googleapis";
// set up googleapi
const oauth2Client = new google.auth.OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  process.env.REDIRECT_URI
);
oauth2Client.setCredentials({
  refresh_token: process.env.REFRESH_TOKEN,
});
const drive = google.drive({
  version: "v3",
  auth: oauth2Client,
});

const allImageOne = async (req, res) => {
  try {
    const images = await ImageGoogle.find();
    res.status(200).json({
      success: true,
      message: "ImageGoogle thành công",
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
    const imageGoogle = await drive.files.create({
      requestBody: {
        name: req.file.originalname,
        mimeType: "image/jpg",
        parents: ["1USSGuOPD46r1pmnm2wgZ9M2S0E97t3lG"],
        // parents: [folder.data.id],
      },
      media: {
        mimeType: "image/jpg",
        body: fs.createReadStream(req.file.path),
      },
    });
    const data = imageGoogle.data;
    await drive.permissions.create({
      fileId: data.id,
      requestBody: {
        role: "reader",
        type: "anyone",
      },
    });
    await drive.files.get({
      fileId: data.id,
      fields: "webContentLink, webViewLink",
    });
    // -----------------------
    const newImage = await new ImageGoogle({
      imageGoogle: data,
    });
    await newImage.save();

    res.status(200).json({
      success: true,
      message: "newImageGoogle thành công!!!",
      newImage,
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
    // // tìm và xóa image cũ
    const newImage = await ImageGoogle.findById(req.query.id);
    const idImage = newImage.imageGoogle.id;
    await drive.files.delete({
      fileId: idImage,
    });
    // // thêm ảnh mới và lưu
    const imageGoogle = await drive.files.create({
      requestBody: {
        name: req.file.originalname,
        mimeType: "image/jpg",
        parents: ["1USSGuOPD46r1pmnm2wgZ9M2S0E97t3lG"],
        // parents: [folder.data.id],
      },
      media: {
        mimeType: "image/jpg",
        body: fs.createReadStream(req.file.path),
      },
    });
    const data = imageGoogle.data;
    await drive.permissions.create({
      fileId: data.id,
      requestBody: {
        role: "reader",
        type: "anyone",
      },
    });
    await drive.files.get({
      fileId: data.id,
      fields: "webContentLink, webViewLink",
    });
    newImage.imageGoogle = data;
    await newImage.save();

    res.status(200).json({
      success: true,
      message: "updateImageGoogle thành công",
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
    const image = await ImageGoogle.findByIdAndDelete(req.query.id);
    const idImage = image.imageGoogle.id;
    await drive.files.delete({
      fileId: idImage,
    });
    res.status(200).json({
      success: true,
      message: "deleteImageGoogle thành công",
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
// Promise { <pending> } không lấy được id image
export { allImageOne, newImageOne, updateImageOne, deleteImageOne };
