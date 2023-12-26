const{
getallcuontryies,
getcountrybyid,
    addcountry,updatecountry,deletecountry
}=require ("../model/modelcountry")




     const getallcuontryies2=async(req,res)=>{
    try{
        const result=await getallcuontryies()
        res.json(result[0])
    }
    catch(err){
        res.status(500).send(err)
    }
    }
    const getcountrybyid2=async(req,res)=>{
        
        try{
            const id=req.params.id
            const result=await getcountrybyid(id)
            res.send(result)
        }catch   (err){
            res.send(err)}
        }
        
    const addcountry2=async (req,res)=>{
        try{
    const newcountry=req.body
    const result=await addcountry(newcountry)
    return result
        }
       catch(err){
           res.send(err)
       }}
    
       const updatecountry2=async (req,res)=>{
        try{
    const country=req.body
    const result=await updatecountry(country)
    return result
        }
       catch(err){
           res.send(err)}
       }
       const deletecountry2=async (req,res)=>{
        try{
    const id=req.body
    const result=await deletecountry(id)
    return result
        }
       catch(err){
           res.send(err)}
       }
       
      
    
    
    
    
    
    
    module.exports={
        getallcuontryies2,
        getcountrybyid2,
        addcountry2,
        updatecountry2,
        deletecountry2
    }
    