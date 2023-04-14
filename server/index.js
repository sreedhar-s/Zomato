require('dotenv').config();

//Libraries
import  express  from "express";
import cors from "cors";
import helmet from "helmet";
import passport from "passport";
import session from "express-session";

//configs
import googleAuthConfig from "./config/google.config";
import routeConfig from "./config/route.config";

//Microservices routes
import Auth from "./API/Auth"; 
import Restaurant from "./API/Restaurant";
import Food from "./API/Food";
import Image from "./API/Image";
import Order from "./API/orders";
import Review from "./API/Reviews";
import User from "./API/User";

//Datbase connection
import ConnectDB from "./database/connection";

const zomato = express();

//application midlewares

zomato.use(
  session({
    secret: process.env.GOOGLE_CLIENT_SECRET, // replace with your own secret key
    resave: false,
    saveUninitialized: false,
  })
);

zomato.use(express.json());
zomato.use(express.urlencoded({extended: false}));
zomato.use(helmet());
zomato.use(cors());
zomato.use(passport.initialize());
zomato.use(passport.session());

// passport configuration
googleAuthConfig(passport);
routeConfig(passport);

//Application Routes
zomato.use('/auth', Auth);
zomato.use('/restaurant', Restaurant);
zomato.use("/food", Food);
zomato.use("/image", Image);
zomato.use("/order", Order);
zomato.use("/reviews", Review);
zomato.use("/user", User);

zomato.get("/", (req, res) => res.json({message : "setup success"}));

zomato.listen(4000, () =>
  ConnectDB()
  .then(() => console.log("server is ruunning"))
  .catch(() => {
    "server is running database connection failed"
  })
);


