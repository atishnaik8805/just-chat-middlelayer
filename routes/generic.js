const express = require('express');
const router = express.Router();
const passport = require('passport');

genericMid = {
    'success': (req, res, next)=>{
        res.redirect('/success');
    },
    'error': (req, res, next)=>{

    }
}


module.exports = {genericMid}
