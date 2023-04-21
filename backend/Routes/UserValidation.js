import express from "express";
import User from "../models/User.js";
import { body, validationResult } from "express-validator";

const router = express.Router();


// Endpoint to create a new user
router.post("/createuser",
    [
        body("email").isEmail(),
        body("password").isLength({ min: 5 })
    ]
    , async (req, res) => {

        const result = validationResult(req);
        if (result.isEmpty()) {
            console.log(req.body);
            await User.create({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                geolocation: req.body.geolocation
            })
            res.json({ status: true });
        } else {
            res.json({ errors: result.array() });
        }
    });

// Endpoint to check an existing user and log in into account
router.post("/loginuser", [
    body("email").isEmail()
], async (req, res) => {
    let email = req.body.email;

    try {
        const userData = await User.findOne({ email });

        // Checking if the user exists
        if (userData.email === email) {
            // Check for correct Password
            if (userData.password === req.body.password) {
                console.log(userData);
                res.status(200).json({ status: true });
            } else {
                res.status(400).json({ status: "Invalid Password" });
            }
        } else {
            res.status(400).json({ status: "Invalid Email Address" });
        }

    } catch (error) {
        res.json({ errors: "Some error occured!!!" });
    }
})

export default router;