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
import { uploadVideo, onlyPrivate } from "../middlewares";

const videoRouters = express.Router();

// Upload
videoRouters.get(routes.upload, onlyPrivate, getUpload);
videoRouters.post(routes.upload, onlyPrivate, uploadVideo, postUpload);

// Video Detail
videoRouters.get(routes.videoDetail(), videoDetail);

// Edit Video
videoRouters.get(routes.editVideo(), onlyPrivate, getEditVideo);
videoRouters.post(routes.editVideo(), onlyPrivate, postEditVideo);

// Delete
videoRouters.get(routes.deleteVideo(), onlyPrivate, deleteVideo);

export default videoRouters;
