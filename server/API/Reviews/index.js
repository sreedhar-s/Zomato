import express from "express";
import passport from "passport";
import AWS from "aws-sdk";
import multer from "multer";

//database models
import { ReviewModel } from "../../database/allModels";

const Router = express.Router();

//validation
import { validateUserId } from "../../validation/order";
import { validateFoodId, validateReviewData } from "../../validation/review";

/* 
Route /new
des:  Add new review
params none
body review object
Access public
Method: get
*/

Router.post("/food/new/:_userId/:_foodID", async(req, res) => {
    try {
        await validateUserId(req.params);
        await validateFoodId(req.params);
        const {_userID, _foodID} = req.params;

        await ReviewModel.create(reviewData);

        return res.json({review: "Successfully Created review"});
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});


/* 
Route /delete/:_id
des:  Add new review
params none
body review object
Access public
Method: delete
*/

Router.delete("/delete/:_id", async(req, res) => {
    try {
        const {_id} = req.params;

        await ReviewModel.findByIdAndDelete(_id);

        return res.json({review: "Review Successfully deleted"})
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
})

export default Router;