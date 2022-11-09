import nextConnect from "next-connect";

import db from "../../../../config/dbConnect";
import {
  allImageMany,
  newImageMany,
} from "../../../../controllers/imageLocalController";

db();

import multer from "multer";
import { v4 as uuidv4 } from "uuid";
import path from "path";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/image-many"); // nơi lưu ảnh
  },
  filename: function (req, file, cb) {
    cb(null, uuidv4() + "-" + Date.now() + path.extname(file.originalname));
  },
});

const fileFilter = (req, file, cb) => {
  const allowedFileTypes = ["image/jpeg", "image/jpg", "image/png"];
  if (allowedFileTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};
// *** upload file cần thiết
export const config = {
  api: {
    bodyParser: false,
  },
};
const upload = multer({ storage, fileFilter });
const image = upload.single("image");

const handler = nextConnect();

handler.get(allImageMany);
handler.use(image);
handler.post(newImageMany);

export default handler;
