const Company = require("../Model/company");
module.exports.addCompany = async (req, res) => {
  console.log("h1");
  await Company.insertMany([
    { name: "Levi's", url: "http://levis.com/" },
    { name: "Puma", url: "http://puma.com/" },
    { name: "Salesforce", url: "http://salesforce.com/" },
    { name: "Adidas", url: "http://adidas.com/" },
    { name: "Nike", url: "http://nike.com/" },
    { name: "Cotopaxi", url: "http://cotopaxi.com/" },
    { name: "Netflix", url: "http://netflix.com/" },
    { name: "Colgate", url: "http://colgate.com/" },
    { name: "Valentino", url: "http://valentino.com/" },
    { name: "Curology", url: "http://curology.com/" },
    { name: "Purple", url: "http://purple.com/" },
  ]);
};
