import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"

const UserSchema = new mongoose.Schema(
  {
    fullname: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String },
    address: [{ detail: { type: String }, for: { type: String } }],
    phoneNumber: [{ type: Number }],
  },
  {
    timestamps: true,
  }
);

UserSchema.statics.findByEmailAndPhone = async ({email, phoneNumber}) => {
  const checkUserByEmail = await UserModel.findOne({ email });
  const checkUserByPhone = await UserModel.findOne({ phoneNumber });

  if (checkUserByEmail || checkUserByPhone) {
    throw new Error("User already exist!" );
  }

  return false;
}

UserSchema.statics.findByEmailAndPassword = async ({email, password}) => {
  const user = await UserModel.findOne({ email });
   if (!user) {
     throw new Error("User does not exist!");
   }

   // compare the password
   const doesPasswordMatch = await bcrypt.compare(password, user.password);

   if(!doesPasswordMatch) throw new Error('Invalid Password!!!');

   return user;
} 

UserSchema.pre("save", function (next){
  const user = this;

  if(!user.isModified("password")) return next();

  bcrypt.genSalt(8, (error, salt) => {
    if(error) return next(error);

    //hash the password
    bcrypt.hash(user.password, salt, (error, hash) => {
      if(error) return next(error);

      //hashed password
      user.password = hash;
      return next();
    })
  });
});

UserSchema.methods.generateJwtToken = function (){
  return jwt.sign({user: this._id.toString()}, 'ZomatoApp');
}

export const UserModel  = mongoose.model("Users", UserSchema);

