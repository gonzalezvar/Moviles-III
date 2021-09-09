import { Router } from "express";
const userRoutes = Router();
import User from '../models/UserModel.js';
import {register,login} from  '../controllers/UserControllers.js';

userRoutes.post('/register', async (req, res) => {
    const {name, age, identification} = req.body;
    const user = new User({
        name: name,
        age: age,
        identification: identification
    });
    await user.save();
    res.json("Register");
});

userRoutes.post('/login', (req, res) => {
    let data = login(req.body)
    res.json(data);
});

export default userRoutes;