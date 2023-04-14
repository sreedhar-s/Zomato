//Libraries
import express from "express";


//database models
import {RestaurantModel} from "../../database/allModels";

const Router = express.Router();

//validation
import {
  validateRestaurantCity,
  validateRestaurantsearchString,
} from "../../validation/restaurant";
import { validateRestaurantId } from "../../validation/food";
/* 
Route /
des get all the restaurant based on city
params none
Access publuc
Method: get
*/

Router.get("/", async (req, res) => {
    try {
        await validateRestaurantCity(req.query);

        const {city} = req.query;
        const restaurants = await RestaurantModel.find({city});

        return res.json({restaurants});
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
});

/* 
Route /
des get individual the restaurant based on id
params id
Access publuc
Method: get
*/

Router.get("/:_id",  async (req, res) => {
    try {
        await validateRestaurantId(req.params);
        const {_id} = req.params;

        const restaurant = await RestaurantModel.findOne(_id);

        if(!restaurant){
            return res.status(404).json({error: "Restaurant Not Found"});
        }

        return res.json({restaurant});
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

/* 
Route /
des get individual the restaurant based on search string
params node
body erch string
Access publuc
Method: get
*/

Router.get("/search", async (req, res) => {
    try {
        await validateRestaurantsearchString(req.body);
        const {searchString} = req.body;

        const restaurants = await RestaurantModel.find({
            name: {$regex: searchString, options: "i"},
        });

        if (!restaurants) {
          return res.status(404).json({ error: `No Restaurants matched with ${searchString}` });
        }

        return res.json({ restaurants });
         
    } catch (error) {
        
    }
});

export default Router;
