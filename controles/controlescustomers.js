
const{getallcustomers,getcustomersbyid,addcustomer,updatecustomer,deletecustomer}=require("../model/modelcustomers")





const getallcustomers2=async(req,res)=>{
try{
    const result=await getallcustomers()
    res.send(result[0])
}
catch(err){
    res.status(500).send(err)
}
}
const getcustomersbyid2=async(req,res)=>{
    try{
        const id=req.params.id
        const result=await getcustomersbyid(id)
        res.send(result)
    }catch   (err){
        res.send(err)}
    }
    
const addcustomer2=async (req,res)=>{
    try{
        const newcustomer = req.body
        const fir = newcustomer.First_name
        const las = newcustomer.last_name
       const add=newcustomer.Address
            const ph=newcustomer.phone_no
           const cre=newcustomer.creditcardno
          const Use=newcustomer.User_name
           const pas=newcustomer.password
           
         const result=await addcustomer(newcustomer)

        res.send("You've logged in successfully")
        
        return result
        }
         catch(err){
         res.send(err)
         }}





   const updatecustomer2=async (req,res)=>{
    try{
const customer=req.body
const result=await updatecustomer(customer)
return result
    }
   catch(err){
       res.send(err)}
   }
   const deletecustomer2=async (req,res)=>{
    try{
const id=req.body
const result=await deletecustomer(id)
return result
    }
   catch(err){
       res.send(err)}
   }
   
  






module.exports={
    getallcustomers2,
    getcustomersbyid2,
    addcustomer2,
    updatecustomer2,
    deletecustomer2
}
