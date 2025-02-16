import { Router } from "express";
import multer from "multer";
import {
  uploadImage,
  transformImage,
  getImage,
  listImages,
} from "../controllers/imageController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = Router();
const upload = multer({ dest: "uploads/" });

router.post("/images", authMiddleware, upload.single("image"), uploadImage);

router.post("/images/:id/transform", authMiddleware, transformImage);
router.get("/images/:id", authMiddleware, getImage);
router.get("/images", authMiddleware, listImages);

export default router;
