import express from "express";
import FoodItems from "../models/FoodItems.js";
import FoodCategories from "../models/FoodCategories.js";

const dataRouter = express.Router();

dataRouter.post("/getdata", async (req, res) => {
    try {
        let data = await FoodItems.find({});
        console.log(data);
        res.status(200).json({success: true});
    } catch (error){

    }
})

dataRouter.post("/getcategories", async (req, res) => {
    try {
        let data = await FoodCategories.find({});
        console.log(data);
        res.status(200).json({success: true});
    } catch (error){

    }
})


export default dataRouter;