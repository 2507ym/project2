const express=require("express")

const router=express.Router();


const {getallcuontryies2,
getcountrybyid2,
addcountry2,
updatecountry2,
deletecountry2}=require("../controles/controlcountry");




router.get("/getallcountries",getallcuontryies2)
router.get("/getcountrybyid/:id",getcountrybyid2)
router.post("/addcountry",addcountry2)
router.put("/updatecountry",updatecountry2)
router.delete("/deletecountry",deletecountry2)


module.exports=router;

