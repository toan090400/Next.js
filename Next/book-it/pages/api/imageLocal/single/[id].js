import nextConnect from "next-connect";

import db from "../../../../config/dbConnect";
import {
  getImage,
  updateImage,
  deleteImage,
} from "../../../../controllers/imageLocalController";

db();

const handler = nextConnect();

handler.get(getImage);
handler.patch(updateImage);
handler.delete(deleteImage);

export default handler;
