import nextConnect from "next-connect";

import db from "../../../config/dbConnect";
import { allRoom, newRoom } from "../../../controllers/roomController";

db();

const handler = nextConnect();

handler.get(allRoom);
handler.post(newRoom);

export default handler;
