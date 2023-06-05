const {
  deleteTagController,
  updateTagController,
  createTagController,
  getTagController,
} = require("../controller/tagController");

import { Router } from "express";
const router = Router();

router.get("/", getTagController);
router.post("/", createTagController);
router.put("/", updateTagController);
router.delete("/:id", deleteTagController);

export default router;
