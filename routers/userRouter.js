import express from "express";
import routes from "../routes";
import {
  userDetail,
  editProfile,
  changePassword
} from "../controller/userController";

const userRouters = express.Router();

userRouters.get(routes.editProfile, editProfile);
userRouters.get(routes.changePassword, changePassword);
userRouters.get(routes.userDetail, userDetail);

export default userRouters;
