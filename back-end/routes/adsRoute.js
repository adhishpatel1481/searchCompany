const {addAds,searchAds}=require('../controllers/adsController');

const router=require('express').Router();

router.post('/addAds',addAds);
router.get('/search/:key',searchAds);

module.exports=router;