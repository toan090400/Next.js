import nextConnect from "next-connect";

import db from "../../../config/dbConnect";
import {
  getBook,
  updateBook,
  deleteBook,
} from "../../../controllers/bookController";
import { CheckId } from "../../../public/middleware/check-id";

db();

const handler = nextConnect();

handler.get(getBook);
handler.patch(CheckId, updateBook);
handler.delete(CheckId, deleteBook);

export default handler;
