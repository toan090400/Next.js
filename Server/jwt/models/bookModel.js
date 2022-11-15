import mongoose from "mongoose";
const BookSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
    },
    roomId: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "Room",
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.models.Book || mongoose.model("Book", BookSchema);
