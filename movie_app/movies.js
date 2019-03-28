var express=require("express");
var app=express();
app.set("view engine","ejs");
var request=require("request");

//for root
app.get("/",function(req,res)
{
     res.render("home");
});

//for the result page
app.get("/result",function(req,res)
{
    var search=req.query.mstr;
    var link="http://www.omdbapi.com/?s="+search+"&apikey=thewdb";
    request(link,function(error,response,body)
    {
         if(!error&&response.statusCode==200)
         {
              var parsedData=JSON.parse(body);
              res.render("result",{parsedData:parsedData});
         }else
         {
              console.log("error-404");
         }
    });
});


//for listening
app.listen(process.env.PORT,process.env.IP,function()
{
     console.log("mobile app started");
});