import passport from "passport";

import db from "../../../config/dbConnect";
import "../../../public/middleware/passport";

export default async function (req, res, next) {
  await db();
  passport.authenticate("google", {
    scope: ["profile", "email"],
    session: false,
  })(req, res, next);
}
