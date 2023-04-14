// Library
import express from "express";
import passport from "passport";


//Models
import { MenuModel } from "../../database/User";
import { ImageModel } from "../../database/image";

const Router = express.Router();

/* 
Route /list
des get the list menu based on id
params id
Access public
Method: get
*/

Router.get("/list/:_id", async (req, res) => {
    try {
        const {_id} = req.params;
        const menus = await MenuModel.findOne(_id);

        return res.json({menus});
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

/* 
Route /image
des get the menu images based on id
params id
Access public
Method: get
*/

Router.get("image/:_id", async(req, res) => {
    try {
        const { _id } = req.params;
        const menus = await ImageModel.findOne(_id);

        return res.json({ menus });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});


export default Router;