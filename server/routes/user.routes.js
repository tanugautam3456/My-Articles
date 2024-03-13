import express from "express";
const router = express.Router();
import { verifyToken } from '../utils/verifyUser.js';
import {updateUser} from '../controllers/user.controller.js';
router.get('/test',(req,res)=>{
    res.send("This is a test route");
})
router.put('/update/:userId', verifyToken, updateUser)
export default router