const express = require('express');
const { 
    createCompany, 
    getCompanies, 
    updateCompany, 
    getCompany, 
    deleteComapany } = require('../controllers/companies.controllers');
const router = express.Router();


router.route('/').get(getCompanies).post(createCompany).put(updateCompany);
router.route('/:name').get(getCompany).delete(deleteComapany);


module.exports = router;