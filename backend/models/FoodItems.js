import mongoose from "mongoose";

const { Schema, model } = mongoose;

const foodItemsSchema = Schema({
    CategoryName: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    options: [
        {
            full: {
                type: String
            },
            half: {
                type: String
            },
            large: {
                type: String
            },
            medium: {
                type: String
            },
            regular: {
                type: String
            }
        }
    ]
});

export default model('foodItem', foodItemsSchema);