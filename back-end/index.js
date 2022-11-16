require("./config");
const cors = require("cors");
const express = require("express");
const companyRoutes = require("./routes/companyRoute");
const adsRoutes = require("./routes/adsRoute");
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/company", companyRoutes);
app.use("/api/ad", adsRoutes);

app.listen(5000);
