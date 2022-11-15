import mongoose from "mongoose";
const ImageLocalSchema = new mongoose.Schema(
  {
    image: {
      filename: {
        type: String,
        trim: true,
      },
    },
    images: [
      {
        filename: {
          type: String,
          trim: true,
        },
      },
    ],
  },
  { timestamps: true }
);

module.exports =
  mongoose.models.ImageLocal || mongoose.model("ImageLocal", ImageLocalSchema);
