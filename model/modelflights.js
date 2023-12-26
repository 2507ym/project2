const {  knex } = require("./connection")





const getallflights=async() =>{
    const query1=`SELECT f.Id, a.Name  ,c.Name depurture,cto.Name arrival,f.Departure_Time,f.Landing_Time,f.Remaining_Tickets 
    FROM ((flights f 
     inner join airline_compenies a
        on f.Airline_Compeny_Id=a.Id)
        INNER join countries c  on f.Origine_Country_Id=c.Id 
        INNER join countries cto  on f.destination_Country_Id=cto.Id )
        order by f.Id`
const result=await knex.raw(query1)

return result[0]

}

const getflightsbyid=async(id)=>{
    const result = await knex.select().from('flights').where({Id: id})
    return result

}

const addflight=async (newflight)=>{
    const result = await knex("flights").insert(newflight);
    return result;
}

const updateflight=async (id, flight)=>{

    const result = await knex("flights").where({Id:id}).update(flight)
    if (flight===0){
        throw new Error("flight not define")}
       return result;
    }
   

const deleteflight=async (id)=>{
    
    const result = await knex ("flights").where({Id:id}).del();
    return result
}

module.exports={
   getallflights,getflightsbyid,
   addflight,updateflight,deleteflight
}
