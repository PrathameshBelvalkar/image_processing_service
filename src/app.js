import express from "express";
import indexRoutes from "./routes/index.js";
import authRoutes from "./routes/authRoutes.js";
import imageRoutes from "./routes/imageRoutes.js";
import responseWrapper from "./middlewares/responseWrapper.js";

const app = express();

app.use(express.json());
app.use(responseWrapper);
app.use("/uploads", express.static("uploads"));

// Routes
app.use("/", indexRoutes);
app.use("/auth", authRoutes);
app.use("/", imageRoutes);

export default app;
