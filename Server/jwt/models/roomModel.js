import mongoose from "mongoose";
const RoomSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
    },
    price: {
      type: Number,
      trim: true,
      default: 0,
    },
    // image: [
    //   {
    //     filename: { type: String },
    //     size: { type: Number },
    //   },
    // ],
    // category: [
    //   {
    //     type: mongoose.Schema.ObjectId,
    //     ref: "categorys",
    //   },
    // ],
    // user: {
    //   type: mongoose.Schema.ObjectId,
    //   ref: "users",
    // },
  },
  { timestamps: true }
);

module.exports = mongoose.models.Room || mongoose.model("Room", RoomSchema);
