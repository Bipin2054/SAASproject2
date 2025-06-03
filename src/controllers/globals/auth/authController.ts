

/* 
Register/Signup
  -username
  -email
  -password
Processing==> Check or validate the data
DB Query ==> insert update delete etc




Login/Signup
Logout
forgotPassword
ResetPassword

-------------------------------------------------
*/

import { Request, Response } from "express";
import User from "../../../database/models/userModel";
import bcrypt from "bcrypt";


// const registerUser = async (req: Request, res: Response) => {

//   // Extracting username, email, and password from the request body
//   const { username, email, password } = req.body;

//   if (!username || !email || !password) {
//     res.status(400).json({
//       message: "PLease provide all the data"
//     });


//   }
//   else {
//     //Data lai table ma insert gardim "user table ma"
//     await User.create({
//       username: username,
//       password: password,
//       email: email,
//     })
//     res.status(201).json({
//       message: "User registered successfully",

//     })


//   }
// }

class AuthController {
  static registerUser(req: Request, res: Response) {
    // Extracting username, email, and password from the request body
    const { username, email, password } = req.body;
    



    if (!username || !email || !password) {
      res.status(400).json({
        message: "Please provide all the data"
      });
    }
    else {
      // Data lai table ma insert gardim "user table ma"
      User.create({
        username: username,
        password: bcrypt.hashSync(password, 10) ,
        email: email,
      })
        .then(() => {
          res.status(201).json({
            message: "User registered successfully",
          });
        })
        .catch((error) => {
          res.status(500).json({
            message: "Error registering user",
            error: error.message,
          });
        });
    }

  }
}


export default AuthController;