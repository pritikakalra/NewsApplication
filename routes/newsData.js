var express = require('express');
var router = express.Router();
var newsLive = require('../models/schema');

/* Endpoint is:- http://localhost:8085/newsData/adddatatodb*/
router.post("/adddatatodb",function(req ,res ,next) {
console.log("Inside Post");
    var newssave = new newsLive();
    newssave.Author= req.body.author;
      newssave.Title=req.body.title;
      newssave.Description=req.body.description;
      newssave.Url=req.body.url;
      newssave.urlToImage=req.body.urlToImage;
      newssave.PublishedAt=req.body.publishedAt;
       console.log("About to save"+newssave);
      newssave.save(function(err){
         if(err){
           console.log(err);
         }
         else{
           console.log('newssaved');
      res.send("the news is saved");

           }

      });


    });

/* Endpoint is:- http://localhost:8085/newsData/delete*/
router.delete("/delete",function(req,res) {
  console.log("Inside Delete");
  if(req.body){
     var request=req.body.Title;
     console.log("jiiii title is ------"+request);
    //console.log(request);
    newsLive.remove({Title:request},function(err){
      if(err){
        res.send("Error in deleting the data");
      }
      else{
        res.send("Data is deleted successfully");
      }
    });
  }
    else{
      res.send("no data found to delete");
    }
});

/* Endpoint is:- http://localhost:8085/newsData/update*/
router.put('/update', function(req, res){
  if(req.body)
  {
   request1=req.body.title;
    request2=req.body.Comments;
  newsLive.update({title:request1},{$set:{Comments:request2}},function(err){

      if(err) {
        res.send(err);
      }
      else  {
      res.send("News updated");
      console.log("updated");
      }
    });
  }
});

/* Endpoint is:- http://localhost:8085/newsData/view*/
router.get('/view', function(req, res, next) {
  newsLive.find({},function(err,allnews)
  {
    if(err)
    throw err;
    res.send(allnews);
  });
    //console.log(req.body);
    //res.json(req.body);
    //console.log(req.body);

});


module.exports = router;
