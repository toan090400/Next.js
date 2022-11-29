import nextConnect from "next-connect";
import db from "../../../config/dbConnect";
db();
import { allLogin } from "../../../controllers/loginController";
const handler = nextConnect();

handler.get(allLogin);

export default handler;
