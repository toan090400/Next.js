import nextConnect from "next-connect";

import db from "../../../config/dbConnect";
import { newUser } from "../../../controllers/authController";

db();

const handler = nextConnect();

handler.post(newUser);

export default handler;
