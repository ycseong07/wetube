import express from "express";
import routes from "../routes";
import {
  videos,
  upload,
  videoDetail,
  editVideo,
  deleteVideo
} from "../controller/videoController";

const videoRouters = express.Router();

videoRouters.get(routes.videos, videos);
videoRouters.get(routes.upload, upload);
videoRouters.get(routes.videoDetail, videoDetail);
videoRouters.get(routes.editVideo, editVideo);
videoRouters.get(routes.deleteVideo, deleteVideo);

export default videoRouters;
