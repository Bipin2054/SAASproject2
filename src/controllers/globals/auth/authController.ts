import { Request, Response } from "express";
import User from "../../../database/models/userModel";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

class AuthController {
  static async registerUser(req: Request, res: Response): Promise<void> {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      res.status(400).json({ message: "Please provide all the data" });
      return;
    }

    try {
      const hashedPassword = bcrypt.hashSync(password, 10);

      await User.create({
        username,
        email,
        password: hashedPassword,
      });

      res.status(201).json({ message: "User registered successfully" });
    } catch (error: any) {
      res.status(500).json({
        message: "Error registering user",
        error: error.message,
      });
    }
  }

  static async loginUser(req: Request, res: Response): Promise<void> {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400).json({ message: "Please provide email and password" });
      return;
    }

    try {
      const users = await User.findAll({ where: { email } });

      if (users.length === 0) {
        res.status(404).json({ message: "User not found" });
        return;
      }

      const user = users[0];
      const isMatch = bcrypt.compareSync(password, user.password);

      if (!isMatch) {
        res.status(401).json({ message: "Invalid password" });
        return;
      }

      const token = jwt.sign({ id: user.id }, "thissecretkey", {
        expiresIn: "1h",
      });

      res.status(200).json({ token });
    } catch (error: any) {
      res.status(500).json({
        message: "Error during login",
        error: error.message,
      });
    }
  }
}

export default AuthController;
