import express from "express";
import passport from "passport";

//database models
import { OrderModel } from "../../database/allModels";

const Router = express.Router();

//validation
import { validateUserId } from "../../validation/order";

/* 
Route /_id
des get all the orders based on id
params _id
Access public
Method: get
*/

Router.get(
  "/:_id",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    await validateUserId(req.params);
    try {
      const { _id } = req.params;
      const getOrders = await OrderModel.findOne({ user: _id });

      if (!getOrders) {
        return res.status(404).json({ error: "User not found" });
      }
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
);

/*
Route /image
des Add new order
params _id
Access public
Method: post
*/

Router.post("/new/:_id", async(req, res) => {
    try {
        const {_id} = req.params;

        const {orderDetails} = req.body;

        const addNewOrder = await OrderModel.findOneAndUpdate(
            {
                user: _id,
            },
            {
                $push: {orderDetails},
            },
            {
                new : true
            }
        );

        return res.json({ order: addNewOrder });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

export default Router;

