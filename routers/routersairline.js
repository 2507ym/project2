 const express=require("express")

 const router=express.Router()

 const { getAirlines2,getAirlineById2,addAirline2,
    updateairline2,deleteairline2
 }=require("../controles/controlesairline")
 





 router.get("/getAirlines", getAirlines2)
 router.get("/getAirlinesbyid/:Id", getAirlineById2)
 router.post("/addAirline", addAirline2)
 router.put("/updateAirline", updateairline2)
 router.delete("/deleteAirline/:Id", deleteairline2)



module.exports=router;
