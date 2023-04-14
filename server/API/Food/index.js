//Libraries
import express from "express";
import passport from "passport";

//database models
import { FoodModel } from "../../database/allModels";

const Router = express.Router();

// validation
import { validateCategory, validateRestaurantId } from "../../validation/food";

/* 
Route /r
des get all the food based on restaurant
params id
Access public
Method: get
*/

Router.get("/r/:_id", async (req, res) => {
    try {
        await validateRestaurantId(req.params);

        const { _id } = req.params;

        const foods = await FoodModel.find({restaurant: _id});

        return res.json({foods});
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

/* 
Route /r
des get all the food based on restaurant
params category
Access public
Method: get
*/

Router.get("/r/:category", async (req, res) => {
  try {
    await validateCategory(req.params);

    const { category } = req.params;

    const foods = await FoodModel.find({ category: {$regex: category, $options: "i"}, });

    return res.json({ foods });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default Router;

