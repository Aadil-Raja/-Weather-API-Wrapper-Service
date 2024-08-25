const express =require("express");
const app =express()
const { getWeather } = require('./services/weatherService');
require('dotenv').config()

const PORT = process.env.PORT ||3000

app.use("/weather",require("./routes/weatherRoutes"))
app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
});