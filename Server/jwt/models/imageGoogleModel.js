import mongoose from "mongoose";
const ImageGoogleSchema = new mongoose.Schema(
  {
    // imageGoogle: {
    //   kind: {
    //     type: String,
    //     trim: true,
    //   },
    //   id: {
    //     type: String,
    //     trim: true,
    //   },
    //   name: {
    //     type: String,
    //     trim: true,
    //   },
    //   mimeType: {
    //     type: String,
    //     trim: true,
    //   },
    // },
    imageGoogle: {
      type: Object,
    },
    // --------------Many-------------------
    // images: [
    //   {
    //     filename: {
    //       type: String,
    //       trim: true,
    //     },
    //   },
    // ],
    link: {
      type: String,
      default: "https://lh3.googleusercontent.com/d",
    },
  },
  { timestamps: true }
);

module.exports =
  mongoose.models.ImageGoogle ||
  mongoose.model("ImageGoogle", ImageGoogleSchema);
