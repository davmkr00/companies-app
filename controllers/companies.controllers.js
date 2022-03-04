const db = require('../db/index');
const companyDetails = db.companyDetails;

const createCompany = (req, res) => {
        companyDetails.create(req.body);
        res.json(req.body);
}

const getCompany = async (req, res) => {
    const comapanyData = await companyDetails.findOne({where: {name: req.params.name}});
    res.json(comapanyData);
}
    
const getCompanies = async (req, res) => {
    const comapanyData = await companyDetails.findAll();
    res.json(comapanyData);
}

const updateCompany = async (req, res) => {
    const companyId = await companyDetails.update(
        {name: req.body.name, purpose: req.body.purpose}, 
        {where: {id: req.body.id}});
    res.json(companyId);
}

const deleteComapany = async (req, res) => {
    const comapnyId = await companyDetails.destroy({where: {name: req.params.name}});
    res.json(comapnyId);
}

module.exports = { 
    createCompany, 
    getCompanies,
    updateCompany,
    getCompany,
    deleteComapany
}