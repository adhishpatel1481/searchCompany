const mongoose=require('mongoose');

const adsSchema=new mongoose.Schema({
    companyId :mongoose.ObjectId,
    primaryText:String,
    headline:String,
    discription:String,
    CTA:String,
    imageUrl:String
});

module.exports=mongoose.model('ads',adsSchema)