
import userModel from '../model/user.model.js'
import bycrypt from 'bcryptjs';

 export const signup =async (req,res)=>{
try{
   const {username,email,password} = req.body;
 const user = await userModel.findOne({email});
 if(user){
    return res.status(400).json({ message: "user already exist"});
 }
 var hashpassword = await bycrypt.hash(password, 10);
 const createuser = new userModel({
    username: username,
    email: email,
    password: hashpassword,
 });
 await createuser.save();
 res.status(201).json({message:'user successfully created', user:{
   _id: createuser._id,
   username:createuser.username,
   email:createuser.email
 }});
}
catch(error){
    console.log("Error:" + error);
}
}

export const login = async (req,res)=>{
  try {
   const {email,password} = req.body;
  const user = await userModel.findOne({email});
  console.log("User:- "+ user);
  if (!user) {
   return res.status(400).json({ message: "Invalid username or password" });
 }
  const hashMatch = await bycrypt.compare(password, user.password);
  if (!hashMatch) {
   return res.status(400).json("Invalid username or password" );
 }else{
   res.status(200).json({message: "login successfully", user:{
      _id:user._id,
      username: user.username,
      email:user.email
   }});
  }
  } catch (error) {
   console.log(error);
   res.status(500).json({message:" internal server error"});
  }


}

 