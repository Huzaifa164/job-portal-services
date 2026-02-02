import express from 'express';
import { isAuth } from '../middlewares/auth.js';
import { getUserProfile, myProfile, updateProfilePic, updateUserProfile } from '../controllers/user.controller.js';
import uploadFile from '../middlewares/multer.js';

const router = express.Router();

router.get("/me", isAuth, myProfile);
router.get("/:userId", isAuth, getUserProfile);
router.put("/update/profile", isAuth, updateUserProfile);
router.put("/update/pic", isAuth, uploadFile, updateProfilePic);

export default router;