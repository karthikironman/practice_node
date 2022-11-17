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

const deleteCategory = async (data, res = null) => {
    try {
        let result = await category.deleteOne(data);
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


const check = (res) => {
    if (res.finished) {
        console.log('sent')
    } else {
        console.log('not sent')
    }
}
router.post(
    "/add", addCategory
)

module.exports = router;