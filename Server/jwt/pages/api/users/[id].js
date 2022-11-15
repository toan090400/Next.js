import nextConnect from "next-connect";

import db from "../../../config/dbConnect";
import {
  //   getUser,
  //   updateUser,
  deleteUser,
} from "../../../controllers/authController";

db();

const handler = nextConnect();

// handler.get(getUser);
// handler.patch(updateUser);
handler.delete(deleteUser);

export default handler;
