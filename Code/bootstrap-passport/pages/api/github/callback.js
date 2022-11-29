import passport from "passport";
import { setCookies } from "cookies-next";

import db from "../../../config/dbConnect";
import "../../../public/middleware/passport";

export default async function (req, res, next) {
  await db();
  passport.authenticate("github", (err, user) => {
    setCookies("token", user, {
      req,
      res,
    });
    res.redirect("http://localhost:3000");
  })(req, res, next);
}
