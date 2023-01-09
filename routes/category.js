const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = express.Router();
const auth = require("../middleware/auth");


const category = require("../model/category");


const addCategory = async (req, res = null) => {
    try {
        let { name, flavour } = req.body;
        let existingCat = await findCategory({ name, flavour });
        if (existingCat.length == 0) {
            let newCat = category({ name, flavour, choice: [] });
            let result = await newCat.save();
            if (res) res.send(result);
            else return result;
        } else {
            if (res) res.status(400).send('duplicate categoy');
            else return 'duplicate category'
        }
    } catch (err) {
        if (res) res.status(400).send(err)
        else return err
    }
}

const addChoice = async (req,res = null) => {
    try{
        let {category_id,name,icon_img,influencer_img} = req.body;
        let existingCat = await findCategory({_id:category_id});
        if(existingCat.length < 1){
              if(res) res.status(400).send('category id invalid / doesnt exists')
        }else{
            let pushdata = await category.update({_id:category_id},{$push:{choice:{name,icon_img,influencer_img}}})
            res.json(pushdata)
        }

    }catch(err){

    }
}

const findCategory = async (data, res = null) => {
    try {
        let result = await category.find(data);
        if (res) {
            res.send(result)
        } else {
            return result;
        }
    } catch (err) {
        if (res) {
            res.status(400).json({ err })
        } else {
            throw err
        }
    }
}





router.post(
    "/add", addCategory
)
router.post(
    "/choice/add",addChoice
)

module.exports = router;