import express from "express";
import FoodItems from "../models/FoodItems.js";
import FoodCategories from "../models/FoodCategories.js";

const dataRouter = express.Router();

dataRouter.post("/getdata", async (req, res) => {
    try {
        let itemData = await FoodItems.find({});
        res.status(201).send(itemData);
    } catch (error){
        res.status(404).json({success: false});
    }
})

dataRouter.post("/getcategories", async (req, res) => {
    try {
        let catergoryData = await FoodCategories.find({});
        res.status(201).send(catergoryData);
    } catch (error){
        res.status(404).json({success: false});
    }
})


export default dataRouter;