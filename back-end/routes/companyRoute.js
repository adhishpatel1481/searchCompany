const { addCompany }=require('../controllers/companyController');

const router=require('express').Router();

router.post('/addCompany',addCompany);

module.exports=router;