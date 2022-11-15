import nextConnect from "next-connect";

import db from "../../../config/dbConnect";
import { allBook, newBook } from "../../../controllers/bookController";

db();

const handler = nextConnect();

handler.get(allBook);
handler.post(newBook);

export default handler;
