const express=require("express");

const app=express();

const port=3006;
const controller = require('./controles/controlflights')

//react
const cors=require('cors')
app.use(cors())

app.listen(port, () => {
 console.log("server is up and listening on port: " + port)});
    
    app.get("/start", (req,res)=> {
        res.send("helo world")})
        
 //ejs
        
     const path = require("path");
     app.set("views", path.join(__dirname, "views"));
     app.set("view engine", "ejs");
        
        
        
    app.get("/flightshome",function (req,res){
      res.render("home");})
            
     app.get("/flights",async function (req,res){
     const results = await controller.getallflights2()
     res.render("flights", {flights: results});})

      app.get("/customer",function (req,res){
    res.render("customer");})
                    
     app.get("/forairline",async function (req,res){
  const results = await controller.getallflights2()
 res.render("forairline", {flights: results});})
                        
 app.get("/addflight",function (req,res){
 res.render("addflight");})
                            
 app.get("/deleteflight",function (req,res){
 res.render("forairline")})
                                
app.get("/editflight/:id",function (req,res){
                                    
 res.render("editflight", {query : req.params.id});})
                                                                
                                    
   //css and image
                                    
 app.use(express.static(__dirname + '/public'));
                                    
                                    
     //body
                                    
 const bodyParser = require("body-parser");
 app.use(bodyParser.json());
                                    
    //form
                                    
 app.use(bodyParser.urlencoded({extended: true}))
                                    
                                    
                                    
    //routers
                                    
  const routersairline = require("./routers/routersairline");
   app.use("/api/airline",routersairline)
                                    
  const routerscustomers = require("./routers/routerscustomers");
   app.use("/api/customers",routerscustomers)
                                    
  const routeradmin = require("./routers/routeradminstrator");
  app.use("/api/admin",routeradmin)
                                    
  const routercountry = require("./routers/routercountry");
  app.use("/api/country",routercountry)
                                    
   const routerflight = require("./routers/routerflights");
   app.use("/api/flight",routerflight)
                                    
  const routerticket = require("./routers/routerticket");
  app.use("/api/ticket",routerticket)
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    