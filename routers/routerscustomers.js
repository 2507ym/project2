const express=require("express")
 const router=express.Router()

 const { getallcustomers2,getcustomersbyid2,addcustomer2,updatecustomer2,deletecustomer2
    
 }=require("../controles/controlescustomers")

 


router.get("/getallcustomers",getallcustomers2);
router.get("/getcustomersbyid/:id",getcustomersbyid2);
router.post("/addcustomer", addcustomer2);
router.get("/addcustomer", addcustomer2);
router.put("/updatecustomer", updatecustomer2);
router.delete("/deletecustomer", deletecustomer2);



module.exports=router;
