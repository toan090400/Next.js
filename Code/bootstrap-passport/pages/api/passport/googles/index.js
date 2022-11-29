import nextConnect from "next-connect";

import db from "../../../../config/dbConnect";
db();

import { allGoogle } from "../../../../controllers/dataController";

const handler = nextConnect();

handler.get(allGoogle);

export default handler;
