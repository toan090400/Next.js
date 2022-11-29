import mongoose from "mongoose";
const GithubSchema = new mongoose.Schema(
  {
    githubId: {
      type: String,
      trim: true,
    },
    displayname: {
      type: String,
      trim: true,
    },
    profileUrl: {
      type: String,
      trim: true,
    },
    photos: {
      type: String,
      trim: true,
    },
    nodeId: {
      type: String,
      trim: true,
    },
    username: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

module.exports =
  mongoose.models.Github || mongoose.model("Github", GithubSchema);
