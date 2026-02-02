import express from 'express';
import { isAuth } from '../middlewares/auth.js';
import { myProfile } from '../controllers/user.controller.js';

const router = express.Router();

router.get("/me", isAuth, myProfile);

export default router;