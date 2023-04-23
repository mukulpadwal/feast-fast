import mongoose from "mongoose";

const { Schema, model } = mongoose;

const foodCategorySchema = Schema({
    CategoryName : {
        type: String
    }
});

export default model('foodCategories', foodCategorySchema);