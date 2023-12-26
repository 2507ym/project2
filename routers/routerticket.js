const express=require("express")

const router=express.Router();


const {  getallticket2,
    getticketbyid2,
    addticket2,
    updateticket2,
    deleteticket2,
}=require("../controles/controlticket");





router.get("/getallticket", getallticket2)
router.get("/getticketbyid/:id", getticketbyid2)
router.post("/addticket",addticket2)
router.put("/updateticket", updateticket2)
router.delete("/deleteticket",deleteticket2)

module.exports=router;





