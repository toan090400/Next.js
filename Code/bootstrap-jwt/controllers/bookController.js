import Book from "../models/bookModel";
import Category from "../models/categoryModel";
import User from "../models/userModel";
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
const allBook = async (req, res) => {
  try {
    const books = await Book.find()
      .populate({
        path: "userId",
        select: "username -_id",
        User,
      })
      .populate({
        path: "categoryId",
        select: "name",
        Category,
      });
    res.status(200).json({
      success: true,
      message: "allRoom thành công",
      count: books.length,
      books,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      error,
    });
  }
};

const getBook = async (req, res) => {
  try {
    const book = await Book.findById(req.query.id).populate({
      path: "userId",
      select: "username -_id",
      User,
    });
    res.status(200).json({
      book,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error,
    });
  }
};

const newBook = async (req, res) => {
  try {
    // khai báo
    const userId = req.user.id;
    const name = req.body.name;
    const description = req.body.description;
    const categoryId = req.body.category;
    const originalname = req.file.originalname;
    const path = req.file.path;
    // thêm ảnh
    const imageGoogle = await drive.files.create({
      requestBody: {
        name: originalname,
        mimeType: "image/jpg",
        // parents: ["1USSGuOPD46r1pmnm2wgZ9M2S0E97t3lG"],
        // parents: [folder.data.id],
      },
      media: {
        mimeType: "image/jpg",
        body: fs.createReadStream(path),
      },
    });
    const data = await imageGoogle.data;
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
    // check
    const book = await Book.findOne({ name: name });
    if (book) {
      const name = await book.name;
      return res.status(404).json({
        success: false,
        message: `${name} đã tồn tại.`,
      });
    }
    // create
    const newBook = await new Book({
      name: name,
      description: description,
      imageGogle: data,
      categoryId: categoryId,
      userId: userId,
    });
    await newBook.save();
    const message = await newBook.name;
    res.status(200).json({
      success: true,
      message: `Thêm ${message} thành công.`,
      newBook,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      error,
    });
  }
};

const updateBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.query.id, req.body, {
      new: true,
      runValidators: true,
    });
    const name = await book.name;
    res.status(200).json({
      success: true,
      message: `Update ${name} thành công.`,
      book,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error,
    });
  }
};

const deleteBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.query.id);
    const message = await book.name;
    res.status(200).json({
      success: true,
      message: `Delete ${message} thành công`,
      book,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error,
    });
  }
};
export { allBook, newBook, getBook, updateBook, deleteBook };
