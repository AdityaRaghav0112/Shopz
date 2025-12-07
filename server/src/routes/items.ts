import express from "express";
import { auth } from "../middleware/auth";

const router = express.Router();

router.get("/my-items", auth, (req, res) => {
  res.json({ message: "You are authorized", user: (req as any).user });
});

export default router;
