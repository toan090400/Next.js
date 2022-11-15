import nextConnect from "next-connect";

import db from "../../../config/dbConnect";
import { allUser } from "../../../controllers/authController";
import { verifyToken, checkAdmin } from "../../../public/middleware/jwt";
db();

const handler = nextConnect();

handler.get(verifyToken, checkAdmin, allUser);

export default handler;
