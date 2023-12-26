const express=require("express")

 const router=express.Router()



const{
    getalladminstrator2,
    getadminbyid2,
    addadmin2,
    updateadmin2,
    deleteadmin2
}=require("../controles/controladminstrtor")


router.get("/getalladmin",getalladminstrator2);
router.get("/getadminbyid/:id",getadminbyid2);
router.post("/addadmin", addadmin2);
router.put("/updateadmin", updateadmin2);
router.delete("/deletadmin", deleteadmin2);



module.exports=router;