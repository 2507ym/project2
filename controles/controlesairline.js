
const{getAirlines, getAirlineById,addAirline,updateairline, deleteairline}=require("../model/modelairline")





const getAirlines2=async (req, res) => {
    try {
        console.log("ingetairline");
        const result = await getAirlines()
        res.send(result[0])
    } catch (err) {
        res.status(500).send(err)
    }
}
const getAirlineById2=async (req, res) => {
    try {
        const id =req.params.id
        const result = await getAirlineById(id)
        res.send(result)
    } catch (err) {
        res.send(err)}
}
const addAirline2=async (req, res) => {
    try {
        const newAirline = req.body
        const result = await addAirline(newAirline)
        res.send(result)
    } catch (err) {
        res.status(500).send(err)
    }
}

const updateairline2=async (req, res) => {
    try {
        const airline= req.body
        const result = await updateairline(airline)
        res.json(result)
    } catch (err) {
        res.status(500).send(err)
    }
}

const deleteairline2=async (req, res) => {
   
    try {
        const id= req.params.id
        const result = await deleteairline(id)
       
        res.json(result)
    } catch (err) {
        res.status(500).send(err)
    }
}

module.exports={ getAirlines2,getAirlineById2,addAirline2,
    updateairline2,deleteairline2
}