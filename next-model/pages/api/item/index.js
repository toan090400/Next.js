import nextConnect from "next-connect";

import db from "../../../config/dbConnect";
import { allData, newData } from "../../../controllers/dataController";

db();

const handler = nextConnect();

handler.get(allData);
handler.post(newData);

export default handler;
