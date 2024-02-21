import User from '../Models/User.Models.js';
import bcryptjs from 'bcryptjs'


export const signup = async (req, res, next) => {
    // console.log(req.body)
    const { username, email, password } = req.body

    if (!username || !email || !password || username ==='' || email===''|| password==='') {

        return res.status(400).json({ message: "All feilds are Requird" })
    }
    const hashedPassword = bcryptjs.hashSync(password, 10)
    const newUser = new User({
        username, email, password :hashedPassword,
    })
    try {
        await newUser.save()
        res.json('User created')
    } 
    catch(error){
        // res.status(500).json({message:error.message})
        next(error)
    }  
}