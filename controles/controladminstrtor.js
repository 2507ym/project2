const{
    getalladminstrator,
    getadminbyid,
    addadmin,updateadmin,deleteadmin
}=require ("../model/modeladministrators")




     const getalladminstrator2=async(req,res)=>{
    try{
        const result=await getalladminstrator()
        res.json(result[0])
    }
    catch(err){
        res.status(500).send(err)
    }
    }
    const getadminbyid2=async(req,res)=>{
        
        try{
            const id=req.params.id
            const result=await getadminbyid(id)
            res.send(result)
        }catch   (err){
            res.send(err)}
        }
        
    const addadmin2=async (req,res)=>{
        try{
    const newadmin=req.body
    const result=await addadmin(newadmin)
    return result
        }
       catch(err){
           res.send(err)
       }}
    
       const updateadmin2=async (req,res)=>{
        try{
    const admin=req.body
    const result=await updateadmin(admin)
    return result
        }
       catch(err){
           res.send(err)}
       }
       const deleteadmin2=async (req,res)=>{
        try{
    const id=req.body
    const result=await deleteadmin(id)
    return result
        }
       catch(err){
           res.send(err)}
       }
       
      
    
    
    
    
    
    
    module.exports={
        getalladminstrator2,
        getadminbyid2,
        addadmin2,
        updateadmin2,
        deleteadmin2
    }
    