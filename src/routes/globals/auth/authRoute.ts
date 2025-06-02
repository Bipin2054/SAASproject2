
import express, { Router } from 'express';

import { registerUser } from '../../../controllers/globals/auth/authController';

const router: Router = express.Router();

router.route("\register").post(registerUser)


export default router;

