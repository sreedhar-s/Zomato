import express from "express";

//database models
import { UserModel } from "../../database/User";
const Router = express.Router();

//validation
import { validateUserId } from "../../validation/order";


/* 
Route /:_id
des get user data
params _id
Access public
Method: get
*/

Router.get("/:_id", async (req, res) => {
  await validateUserId(req.params);
  try {
    const { _id } = req.params;

    const getUser = await UserModel.findById(_id);

    return res.json({ user: getUser });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/* 
Route /update/:_id
des  update user id
params _id
Access public
Method: put
*/

Router.put("/update/:userId", async (req, res) => {
  try {
    const { userId } = req.params;

    const { userData } = req.body;

    const updateUserData = await UserModel.findByIdAndUpdate(
      userId,
      {
        $set: userData,
      },
      {
        new: true,
      }
    );

    return res.json({user: updateUserData});
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default Router;

