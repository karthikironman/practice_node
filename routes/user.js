const express = require("express");
const router = express.Router();
const User = require("../model/User");

const getUserByMagicId = async (req, res) => {
    try {
        let { magic_id = null } = req.query;
        if (magic_id == null) {
            req.status(400).send('magic_id missing')
        } else {
            let user = await User.findOne({
                magic_id
            })
            if (user) {
                return res.status(200).json(user)
            } else {
                return res.status(400).send("user not found")
            }
        }
    } catch (err) {
        console.log(err)
        res.status(500).send("some error")
    }
}
// code to insert items into database


// let insertUser = User({
//     name:'nandini',
// flavour:'naka',
// age:25,
// pool_id:"6384e9571ed1a44ffa82ad87"
// })
// console.log('beffore save')
// insertUser.save().then(x=>console.log('user inseerted -',x));
// console.log("after save")
router.get("/", getUserByMagicId)
module.exports = router;
