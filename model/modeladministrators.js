const {  knex } = require("./connection")





const getalladminstrator=async() =>{
    const query1="select *from adminstrators"
const result=await knex.raw(query1)
return result

}

const getadminbyid=async(id)=>{
    const result = await knex.select().from('adminstrators').where({Id: id})
    return result

}

const addadmin=async (newadminstrator)=>{
    const result = await knex("adminstrators").insert(newadminstrator);
    return result;
}

const updateadmin=async (admin)=>{
    const result = await knex("adminstrators").where({Id:admin.Id}).update(admin);
    if (result === 0) {
        throw new Error('Airline not found');
    }
    return result;
}
const deleteadmin=async (id)=>{
    const result = await knex("adminstrators").where({Id:id}).del();
    if (result === 0) {
        throw new Error('Airline not found');
    }
    return result;
}

module.exports={
    getalladminstrator,
    getadminbyid,
    addadmin,updateadmin,deleteadmin
}
