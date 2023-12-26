const express=require("express")

const router=express.Router();


const {getallflights2,
    getflightsbyid2,
     addflight2,
     updateflight2,
     deleteflight2}=require("../controles/controlflights");







router.get("/getallflights",getallflights2)

router.get("/getflightsbyid/:id",getflightsbyid2)
router.get("/addflights",addflight2)
router.post("/addflights",addflight2)
router.post("/updateflight/:id",updateflight2)
router.get("/updateflight",updateflight2)
router.delete("/deleteflight/:id",deleteflight2) 
router.get("/deleteflight/:id",deleteflight2)

module.exports=router;
