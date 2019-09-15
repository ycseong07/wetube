import express from "express";
import routes from "../routes";
import {
  getUpload,
  postUpload,
  videoDetail,
  editVideo,
  deleteVideo
} from "../controller/videoController";
import { uploadVideo } from "../middlewares";

const videoRouters = express.Router();

videoRouters.get(routes.upload, getUpload);
videoRouters.post(routes.upload, uploadVideo, postUpload);
videoRouters.get(routes.videoDetail(), videoDetail);
videoRouters.get(routes.editVideo, editVideo);
videoRouters.get(routes.deleteVideo, deleteVideo);

export default videoRouters;
