const{
    getallticket,
    getticketbyid,
    addticket,updateticket,deleteticket
}=require ("../model/modelticket")




     const getallticket2=async(req,res)=>{
    try{
        const result=await getallticket()
        res.json(result[0])
    }
    catch(err){
        res.status(500).send(err)
    }
    }
    const getticketbyid2=async(req,res)=>{
        
        try{
            const id=req.params.id
            const result=await getticketbyid(id)
            res.send(result)
        }catch   (err){
            res.send(err)}
        }
        
    const addticket2=async (req,res)=>{
        try{
    const newticket=req.body
    const result=await addticket(newticket)
    return result
        }
       catch(err){
           res.send(err)
       }}
    
       const updateticket2=async (req,res)=>{
        try{
    const ticket=req.body
    const result=await updateticket(ticket)
    return result
        }
       catch(err){
           res.send(err)}
       }
       const deleteticket2=async (req,res)=>{
        try{
    const id=req.body
    const result=await deleteticket(id)
    return result
        }
       catch(err){
           res.send(err)}
       }
       
      
    
    
    
    
    
    
    module.exports={
        getallticket2,
        getticketbyid2,
        addticket2,
        updateticket2,
        deleteticket2
    }
    