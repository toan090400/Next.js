import Book from "../models/bookModel";

const allBook = async (req, res) => {
  try {
    const book = await Book.find();
    res.status(200).json({
      success: true,
      message: "allRoom thành công",
      count: book.length,
      book,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error,
    });
  }
};

const getBook = async (req, res) => {
  try {
    const book = await Book.findById(req.query.id).populate("roomId");
    res.status(200).json({
      success: true,
      message: "getBook thành công",
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
    // create new room
    const newBook = await Book.create(req.body);
    res.status(200).json({
      success: true,
      message: "newBook thành công",
      newBook,
    });
  } catch (error) {
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
    res.status(200).json({
      success: true,
      message: "updateBook thành công",
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
    res.status(200).json({
      success: true,
      message: "deleteBook thành công",
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
