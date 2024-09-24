import express from "express";
import { getTotalSales } from "../controllers/orderController.js";

const router=express.Router()

//route
router.get("/total-sales",getTotalSales)


export default router;