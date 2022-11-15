import nextConnect from "next-connect";

import db from "../../../config/dbConnect";
import { Pagation } from "../../../controllers/actionController";

db();

const handler = nextConnect();

handler.get(Pagation);

export default handler;
