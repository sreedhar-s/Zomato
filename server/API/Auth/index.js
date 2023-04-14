// Library
import express from "express";
import passport from "passport";

//Models
import { UserModel } from "../../database/User";

const Router = express.Router();

//validation
import { validateSignin, validateSignup } from "../../validation/auth";

/* 
Route /signup
des signup with email and password
params none
Access publuc
Method: post
*/

Router.post("/signup", async (req, res) => {
  try {
    await validateSignup(req.body.credentials);

    await UserModel.findByEmailAndPhone(req.body.credentials);

    const newUser = await UserModel.create(req.body.credentials);

    const token = newUser.generateJwtToken();

    return res.status(200).json({ token, status: "success" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/* 
Route /signin
des signin with email and password
params none
Access publuc
Method: post
*/

Router.post("/signin", async (req, res) => {
  try {
    await validateSignin(req.body.credentials);

    const user = await UserModel.findByEmailAndPassword(req.body.credentials);

    const token = user.generateJwtToken();

    return res.status(200).json({ token, status: "success" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/* 
Route /google
des google signin
params none
Access public
Method: get
*/

Router.get(
  "/google",
  passport.authenticate("google", {
    scope: [
      "https://www.googleapis.com/auth/userinfo.profile",
      "https://www.googleapis.com/auth/userinfo.email",
    ],
  })
);

/* 
Route /google/callback
des google signin callback
params none
Access public
Method: get
*/

Router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  (req, res) => {
    return res.json({token: req.session.passport.user.token});
  }
);

export default Router;

