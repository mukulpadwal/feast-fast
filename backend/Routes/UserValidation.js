import express from "express";
import User from "../models/User.js";
import { body, validationResult } from "express-validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const userRouter = express.Router();


// Endpoint to create a new user
userRouter.post("/createuser",
    [
        body("email").isEmail(),
        body("password").isLength({ min: 5 })
    ]
    , async (req, res) => {

        const result = validationResult(req);

        if (!result.isEmpty()) {
            return res.json({ errors: result.array() });
        }

        // Basically these are asyncronous functions so we need to use await
        let salt = await bcrypt.genSalt(10);
        let secPassword = await bcrypt.hash(req.body.password, salt);

        try {
            console.log(req.body);
            await User.create({
                name: req.body.name,
                email: req.body.email,
                password: secPassword,
                geolocation: req.body.geolocation
            })
            res.json({ status: true });
        } catch (error) {
            console.log(error);
        }

    });


// Endpoint to check an existing user and log in into account
userRouter.post("/loginuser", [
    body("email").isEmail()
], async (req, res) => {

    const result = validationResult(req);

    if (!result.isEmpty()) {
        return res.json({ errors: result.array() });
    }

    let email = req.body.email;

    try {
        const userData = await User.findOne({ email });

        // console.log(userData);

        // Checking if the user exists
        if (userData.email === email) {
            // Check for correct Password
            let data = {
                user: {
                    id: userData.id
                }
            }

            const authToken = jwt.sign(data, process.env.JWT_SECRET_KEY);

            const passCheck = await bcrypt.compare(req.body.password, userData.password);

            if (passCheck) {
                console.log(userData);
                res.status(200).json({ status: true, authToken: authToken });
            } else {
                res.status(400).json({ status: false, message: "Invalid Password" });
            }
        } else {
            res.status(400).json({ status: false, message: "Invalid Email Address" });
        }

    } catch (error) {
        res.json({ errors: "Some error occured!!! Account Not Found..." });
    }
})

export default userRouter;