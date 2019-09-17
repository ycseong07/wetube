import express from "express";
import routes from "../routes";
import {
  getUpload,
  postUpload,
  videoDetail,
  getEditVideo,
  postEditVideo,
  deleteVideo
} from "../controller/videoController";
import { uploadVideo } from "../middlewares";

const videoRouters = express.Router();

// Upload
videoRouters.get(routes.upload, getUpload);
videoRouters.post(routes.upload, uploadVideo, postUpload);

// Video Detail
videoRouters.get(routes.videoDetail(), videoDetail);

// Edit Video
videoRouters.get(routes.editVideo(), getEditVideo);
videoRouters.post(routes.editVideo(), postEditVideo);

// Delete
videoRouters.get(routes.deleteVideo(), deleteVideo);

export default videoRouters;
