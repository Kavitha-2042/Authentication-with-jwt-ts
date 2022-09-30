import express from "express"
import * as userController from "../Controller/userController"
import { ModifiedRouter } from "../interface";
import Authverify from "../middleware/Authverify";
const router:ModifiedRouter = express.Router();

router.post("/register",Authverify,userController.register)

router.post("/login",Authverify,userController.login)

router.get('/home',Authverify,userController.home)

export default router;
