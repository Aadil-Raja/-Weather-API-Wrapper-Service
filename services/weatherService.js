const axios =require("axios");
const redisClient =require("../config/redis");

async function fetchweather(city){
    const url = `${process.env.WEATHER_API_URL}${city}?unitGroup=metric&key=${process.env.WEATHER_API_KEY}&contentType=json`;
     const response =await axios.get(url);
     return response.data 
}

async function getWeather(city){
    const cachekey =`weather:${city}`
    const cachedData =await redisClient.get(cachekey)
    if(cachedData)
    {
        return JSON.parse(cachedData);
    }
    const weatherData =await fetchweather(city);
    await redisClient.set(cacheKey, JSON.stringify(weatherData), 'EX', 43200); // 12 hours expiration
  return weatherData;

}

module.exports = { getWeather };
