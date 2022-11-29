import mongoose from "mongoose";
const GoogleSchema = new mongoose.Schema(
  {
    googleId: {
      type: String,
      trim: true,
    },
    displayname: {
      type: String,
      trim: true,
    },
    givenName: {
      type: String,
      trim: true,
    },
    familyName: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
    },
    image: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

module.exports =
  mongoose.models.Google || mongoose.model("Google", GoogleSchema);
