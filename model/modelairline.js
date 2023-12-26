const {  knex } = require("./connection")


const getAirlines = async () => {
    const query1 = "select * from airline_compenies"
    const result = await knex.raw(query1)
    
    return result[0];
}
const getAirlineById =async (id)=>{
    const result = await knex.select().from('airline_compenies').where({Id: id})
    return result;
}




const addAirline = async (airline) => {
    const result = await knex("airline_compenies").insert(airline);
    return result;
}
const updateairline=async(airline)=>{
    const result=await knex("airline_compenies").where({Id:airline.Id}).update(airline)
    if (result === 0) {
        throw new Error('Airline not found');
    }
    return result
}
const deleteairline=async(id)=>{
    const result =await knex("airline_compenies").where({Id:id}).del()
   
    if (result === 0) {
        throw new Error('Airline not found');
    }
    return result;
    }

    module.exports={getAirlines,getAirlineById,
        addAirline,updateairline,
        deleteairline
    }