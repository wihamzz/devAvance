const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/',(req,res,next)=>{
    console.log("middleware accueil");
    res.sendFile(path.join(__dirname,'../','views','accueil.html'));
});

module.exports = router;
