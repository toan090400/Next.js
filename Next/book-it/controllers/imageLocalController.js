import ImageLocal from "../models/imageLocal";

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

// const updateImage = async (req, res) => {
//   try {
//     const book = await Book.findByIdAndUpdate(req.query.id, req.body, {
//       new: true,
//       runValidators: true,
//     });
//     res.status(200).json({
//       success: true,
//       message: "updateBook thành công",
//       book,
//     });
//   } catch (error) {
//     res.status(400).json({
//       success: false,
//       error,
//     });
//   }
// };

// const deleteImage = async (req, res) => {
//   try {
//     const book = await Book.findByIdAndDelete(req.query.id);
//     res.status(200).json({
//       success: true,
//       message: "deleteBook thành công",
//       book,
//     });
//   } catch (error) {
//     res.status(400).json({
//       success: false,
//       error,
//     });
//   }
// };
// ----------- Many -----------------
export { allImageOne, newImageOne, getImage, updateImage, deleteImage };
