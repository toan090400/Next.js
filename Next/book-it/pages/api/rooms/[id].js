import nextConnect from "next-connect";

import db from "../../../config/dbConnect";
import {
  getRoom,
  updateRoom,
  deleteRoom,
} from "../../../controllers/roomController";
import { CheckId } from "../../../public/middleware/check-id";

db();

const handler = nextConnect();

handler.get(CheckId, getRoom);
handler.patch(CheckId, updateRoom);
handler.delete(CheckId, deleteRoom);

export default handler;
