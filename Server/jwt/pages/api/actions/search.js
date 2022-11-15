import nextConnect from "next-connect";

import db from "../../../config/dbConnect";
import { Search } from "../../../controllers/actionController";

db();

const handler = nextConnect();

handler.get(Search);

export default handler;
