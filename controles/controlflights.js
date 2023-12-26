const{
    getallflights,getflightsbyid,
    addflight,updateflight,deleteflight
}=require ("../model/modelflights")




     const getallflights2=async(req,res)=>{
    try{
         const result =  await getallflights()
         return result
    }
    catch(err){
        res.status(500).send(err)
    }}
    
   


    
    const getflightsbyid2=async(req,res)=>{
    
        
        try{
            const id=req.params.id
            const result=await getflightsbyid(id)
            res.send(result)
        }catch   (err){
            res.send(err)}
        }
        
    const addflight2=async (req,res)=>{
        try{
    const newflight=req.body
    
    const aci = newflight.Airline_Compeny_Id
   
    const oci = newflight.Origine_Country_Id
   
    const dci = newflight.destination_Country_Id
    
   const dt=newflight.Departure_Time
   
     const Lt=newflight.Landing_Time
     
       const Rt = newflight.Remaining_Tickets
       
    const result=await addflight(newflight)
    

    res.send("The flight has been successfully added")
    return result
        }
       catch(err){
           res.send(err)
       }}
    




       const updateflight2=async (req,res)=>{
      
        try{
         
    const flight=req.body

    const aci = flight.Airline_Compeny_Id
   
    const oci = flight.Origine_Country_Id
   
    const dci = flight.destination_Country_Id
    
   const dt=flight.Departure_Time
   
    const Lt=flight.Landing_Time
     
       const Rt = flight.Remaining_Tickets
       
     
    const result=await updateflight(req.params.id, flight)

   res.send("The flight has been successfully update")
  

        }
       catch(err){
           res.send(err)}
       }



    const deleteflight2=async (req,res)=>{
        try{
         
    const id=req.params.id
    const result=await deleteflight(id)
    res.send("the flight is deleted")
    res.render("forairline")
    return result
    
        }
       catch(err){
           res.send(err)}
       }
       
      
    
    
    
    
    
    
    module.exports={
        getallflights2,
        
       getflightsbyid2,
        addflight2,
        updateflight2,
        deleteflight2
    }
    