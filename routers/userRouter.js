import express from "express";
import routes from "../routes";
import {
  join,
  login,
  logout,
  users,
  userDetail,
  editProfile,
  changePassword
} from "../controller/userController";

const userRouters = express.Router();

userRouters.get(routes.join, join);
userRouters.get(routes.login, login);
userRouters.get(routes.logout, logout);
userRouters.get(routes.users, users);
userRouters.get(routes.userDetail, userDetail);
userRouters.get(routes.editProfile, editProfile);
userRouters.get(routes.changePassword, changePassword);

export default userRouters;
