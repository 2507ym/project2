const {  knex } = require("./connection")




const getallcustomers=async() =>{

    const query1="select * from customers"
const result=await knex.raw(query1)
return result;
}

const getcustomersbyid=async(id)=>{
    const result = await knex.select().from('customers').where({Id: id})
    return result

}

const addcustomer=async (newcustomer)=>{
    const result = await knex("customers").insert(newcustomer);
    return result;
}

const updatecustomer=async (customer)=>{
    const result = await knex("customers").where({Id:customer.Id}).update(customer);
    if (customer===0){
        throw new Error("customer not define")
    }
    return result;
}
const deletecustomer=async (id)=>{
    const result = await knex("customers").where({Id:id}).del();
    if (id===0){
        throw new Error("id not define")}
    return result;
}

module.exports={
getallcustomers,
getcustomersbyid,
addcustomer,updatecustomer,deletecustomer
}
