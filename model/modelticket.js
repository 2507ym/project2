const {  knex } = require("./connection")





const getallticket=async() =>{
    const query1="select * from tickets"
const result=await knex.raw(query1)
return result

}

const getticketbyid=async(id)=>{
    const result = await knex.select().from('tickets').where({Id: id})
    return result

}

const addticket=async (newticket)=>{
    const result = await knex("tickets").insert(newticket);
    return result;
}

const updateticket=async (ticket)=>{
    const result = await knex("tickets").where({Id:ticket.Id}).update(ticket);
    if (ticket===0){
        throw new Error("ticket not define")
    }
    return result;
}
const deleteticket=async (id)=>{
    const result = await knex("tickets").where({Id:id}).del();
    if (id===0){
        throw new Error("id not define")}
    return result;
}

module.exports={
   getallticket,
    getticketbyid,
   addticket,updateticket,deleteticket
}
