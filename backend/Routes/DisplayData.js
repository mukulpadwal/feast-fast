import express from "express";
import FoodItems from "../models/FoodItems.js";
import FoodCategories from "../models/FoodCategories.js";

const dataRouter = express.Router();

dataRouter.post("/getdata", async (req, res) => {
    try {
        let data = await FoodItems.find({});
        res.send(data);
    } catch (error){
        res.status(404).json({success: false});
    }
})

dataRouter.post("/getcategories", async (req, res) => {
    try {
        let data = await FoodCategories.find({});
        res.send(data);
    } catch (error){
        res.status(404).json({success: false});
    }
})


export default dataRouter;