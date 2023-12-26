const {  knex } = require("./connection")





const getallcuontryies=async() =>{
    const query1="select *from countries"
const result=await knex.raw(query1)
return result

}

const getcountrybyid=async(id)=>{
    const result = await knex.select().from('countries').where({Id: id})
    return result

}

const addcountry=async(newcountry)=>{
    const result = await knex("countriess").insert(newcountry);
    return result;
}

const updatecountry=async (country)=>{
    const result = await knex("countries").where({Id:country.Id}).update(country);
    if (result===0) {
        throw new error("country not define")};
    return result;
}
const deletecountry=async (id)=>{
    const result = await knex("countries").where({Id:id}).del();
    if(result===0){
        throw new error("id not define")
    }
    return result;
}

module.exports={
    getallcuontryies,
    getcountrybyid,
    addcountry,updatecountry,deletecountry
}
