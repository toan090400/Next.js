import mongoose from "mongoose";
const BookSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    imageGogle: {
      type: Object,
    },
    categoryId: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "Category",
      },
    ],
    userId: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.models.Book || mongoose.model("Book", BookSchema);
