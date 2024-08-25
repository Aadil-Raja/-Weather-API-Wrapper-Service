const redis =require("redis");

const redisClient =redis.createClient({
    host : process.env.REDIS_HOST,
    port : process.env.REDIS_PORT
})

redisClient.connect().then(() => {
    console.log('Connected to Redis successfully');
  }).catch((err) => {
    console.error('Failed to connect to Redis:', err);
  });
  
module.exports=redisClient;