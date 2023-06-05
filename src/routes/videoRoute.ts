import { Router } from "express";

import upload from "../middleware/image.middleware";
import {
  createVideoController,
  deleteVideoController,
  getVideoController,
  updateVideoController,
} from "../controller/videoController";
const router = Router();

router.get("/", getVideoController);
router.post("/", upload.array("author", 3), createVideoController);
router.put("/", updateVideoController);
router.delete("/:id", deleteVideoController);

export default router;
