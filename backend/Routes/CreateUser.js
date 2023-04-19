import express from "express";
import User from "../models/User.js";
import { body, validationResult } from "express-validator";

const router = express.Router();

router.post(
    "/createuser",
    body("email").isEmail(),
    body("password","Password Length should be greater than 5 characters").isLength({ min: 5 }),
    body("name").isLength({ min: 5 }),
    async (req, res) => {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            await User.create({
                name: req.body.name,
                location: req.body.location,
                password: req.body.password,
                email: req.body.email
            })

            res.json({ success: true });
        } catch (err) {
            console.log(err);
            res.json({ success: false });
        }
    })

export default router;