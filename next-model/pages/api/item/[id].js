import nextConnect from "next-connect";

import db from "../../../config/dbConnect";
import {
  getData,
  updateData,
  deleteData,
} from "../../../controllers/dataController";

db();

const handler = nextConnect();

handler.get(getData);
handler.patch(updateData);
handler.delete(deleteData);

export default handler;
