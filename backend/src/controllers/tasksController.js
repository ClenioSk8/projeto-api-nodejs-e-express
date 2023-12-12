const getAll = (req, res)=>{
    return res.status(200).json({menssagem: ' Controler Funcionando'})
}

module.exports = {
    getAll
}