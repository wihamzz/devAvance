const express = require('express');
const path = require("path");
const router = express.Router();

router.get('/test',(req,res,next)=>{
    console.log("middleware test");
    res.sendFile(path.join(__dirname,'../','views','formulaire.html'));
});


router.post('/resultat',(req,res,next)=>{
    console.log("middleware resultat");
    console.log(req.body);
    res.redirect('/');
});



module.exports = router;


