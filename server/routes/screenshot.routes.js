const express = require("express");
const mongoose = require('mongoose');
const screenshot = require('screenshot-desktop');
const fs = require('fs');
const base64js = require('base64-js');
const screenShotRoute= express.Router();

const ImageModel = mongoose.model('ScreenShort', new mongoose.Schema({
    usersId: { type: String, required: true},
    type: { type: String, required: true},
    image: { type: String,  required: true},
    uploadedAt: {type: String},
  }));




let intervalId;
screenShotRoute.post('/:userId/projects/screenshot', (req, res) => {
    const userId = req.params.userId
  const shouldStart = req.body.shouldStart;
  if (shouldStart) {
   

    
  var timer= 15*60

    intervalId = setInterval(
      
      

        async function captureAndSaveImage() {

          

            screenshot({format: 'png'}).then((img) => {
        
                // Convert the PNG image buffer to base64
        const base64Image = base64js.fromByteArray(img);
        
         const baseImage="data:image/png;base64,"+`${base64Image}`
        
                  ImageModel.insertMany([
                    {
                     usersId:userId , 
                      type: 'image/png',
                      image:`${baseImage}`,
                      uploadedAt: new Date()
                    },
                    
                    ],{ unique: true }).then(function(){
                        console.log(`Data inserted  ${timer} seconds`) // Success
                    }).catch(function(error){
                        console.log(error)	 // Failure
                    });
        
        
              }).catch((err) => {
                console.log(err);
              })
        
          
        }
        , timer*1000); // execute function every 3 minutes
  } else {
    clearInterval(intervalId);
  }

  res.send('Screenshot Start Successfully');
});


screenShotRoute.get("/:userId/projects/screenshot", async (req, res) => {
  const  usersId= req.params.userId
  const tasks = await ImageModel.find({ usersId})
  res.send(tasks).json()
})


module.exports = screenShotRoute;