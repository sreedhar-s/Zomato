import express from "express";
import multer from "multer";

//database models
import { ImageModel } from "../../database/allModels";

const Router = express.Router();

//utilities
import { s3Upload } from "../../Utilis/s3";

// Multer config
const storage = multer.memoryStorage();
const upload = multer({ storage });

/* 
Route /image
des uploads given image to s3 bucket, ans saves file link to mongodb
params none
Access public
Method: get
*/

Router.post("/", upload.single("file"), async (req, res) => {
  try {
    const file = req.file;

    // s3 bucket options
    const bucketOptions = {
      Bucket: "zomato123",
      Key: file.originalname,
      Body: file.buffer,
      ContentType: file.mimetype,
      ACL: "public-read", // Access Control List
    };

    const uploadImage = await s3Upload(bucketOptions);

    await ImageModel.create({ images: [{ location: uploadImage.Location }] });

    return res.status(200).json({ uploadImage });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default Router;
