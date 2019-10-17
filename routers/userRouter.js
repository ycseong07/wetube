import express from "express";
import routes from "../routes";
import {
  userDetail,
  editProfile,
  changePassword
} from "../controller/userController";
import { onlyPrivate } from "../middlewares";

const userRouters = express.Router();

userRouters.get(routes.editProfile, onlyPrivate, editProfile);
userRouters.get(routes.changePassword, changePassword);
userRouters.get(routes.userDetail(), userDetail);

export default userRouters;
