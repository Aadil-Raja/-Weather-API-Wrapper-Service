const express =require("express");
const {getWeather}=require("../services/weatherService")
exports.getcity= async(req,res)=>{
    const city=req.query.city;
    if(!city)
    {
        return res.send("City is required");
    }
    try {
        const weatherData = await getWeather(city);
        res.json(weatherData);
      } catch (error) {
        console.error('Error details:', error);
        res.status(500).json({ error: 'Failed to fetch weather data' });
      }

}