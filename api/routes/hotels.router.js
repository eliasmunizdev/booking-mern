import express from "express";
import { verifyAdmin } from "../utils/verifyToken.js";

// Controllers
import { createHotel, deleteHotel, getAllHotels, getHotel, updateHotel } from "../controllers/hotel.controller.js";

const hotelsRouter = express.Router();

//CREATE
hotelsRouter.post("/", verifyAdmin, createHotel);

//UPDATE
hotelsRouter.put("/:id", verifyAdmin, updateHotel);

//DELETE
hotelsRouter.delete("/:id", verifyAdmin, deleteHotel);

//GET
hotelsRouter.get("/:id", getHotel);

//GET ALL
hotelsRouter.get("/", getAllHotels);

export default hotelsRouter