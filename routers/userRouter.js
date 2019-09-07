import express from "express";
import routes from "../routes";
import {
  join,
  login,
  logout,
  user,
  userDetail,
  editProfile,
  changePassword
} from "../controller/userController";

const userRouters = express.Router();

userRouters.get(routes.join, join);
userRouters.get(routes.login, login);
userRouters.get(routes.logout, logout);
userRouters.get(routes.user, user);
userRouters.get(routes.userDetail, userDetail);
userRouters.get(routes.editProfile, editProfile);
userRouters.get(routes.changePassword, changePassword);

export default userRouters;
