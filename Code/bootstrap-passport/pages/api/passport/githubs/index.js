import nextConnect from "next-connect";

import db from "../../../../config/dbConnect";
db();

import { allGithub } from "../../../../controllers/dataController";

const handler = nextConnect();

handler.get(allGithub);

export default handler;
