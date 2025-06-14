
import express, { Router } from 'express';

import AuthRouter from '../../../controllers/globals/auth/authController';

const router: Router = express.Router();

router.route("/register").post(AuthRouter.registerUser)
router.route("/login").post(AuthRouter.loginUser)


export default router;

