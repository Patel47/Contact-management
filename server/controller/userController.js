const asyncHandler = require('express-async-handler');
const bcrypt = require('bcryptjs');
const User = require('../model/userModel');
const jwt = require('jsonwebtoken');

const registerUser = asyncHandler(async (req, res) => {
    const {username, email, password} = req.body
    if(!username || !email || !password){
        res.status(400)
        throw new Error("All field are require")
    }

    const availableUser = await User.findOne({email})
    
    if(availableUser){
        res.status(400)
        throw new Error("user already exist")
    }

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    
    const newUser = await User.create({
        username,
        email,
        password: hash
    })
    
    if(newUser){
        res.status(201)
        res.json({newUser})
    }
    else{
        res.status(400)
        throw new Error("User data is not valid")
    }
})

const loginUser = asyncHandler(async (req, res) => {

    const {email, password} = req.body

    if(!email || !password){
        res.status(400)
        throw new Error("All fields are require")
    }

    const user = await User.findOne({email});

    if(user && bcrypt.compareSync(password, user.password)){
        const access_token = jwt.sign({
            user: {
                username: user.username,
                email: user.email,
                id: user.id
            },
        },
        process.env.ACCESS_KEY,
        {expiresIn: '15m'}
        )
        res.status(200).json({ access_token })
    }
    else{
        res.status(401)
        throw new Error("Email or Password not valid");
    }
})

const currentUser = asyncHandler(async (req, res) => {
    res.json(req.user)
})

module.exports = { registerUser, loginUser, currentUser }