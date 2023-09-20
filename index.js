const { Redis } = require("@upstash/redis");
console.log("doing something")
module.exports = async (req, res) => {
  /**
   * Redis.fromEnv() will read the following from environment variables:
   * - UPSTASH_REDIS_REST_URL
   * - UPSTASH_REDIS_REST_TOKEN
   */
  console.log(res)
  const redis = Redis.fromEnv();
  //const bar = await redis.get("test");


  redis.keys('*', (err, keys) => {
    if (err) {
      console.error('Error:', err);
      return;
    }
    keys.forEach((key) => {
      redis.get(key, (error, value) => {
        if (error) {
          console.error(`Error fetching value for key ${key}:`, error);
        } else {
          console.log(`Key: ${key}, Value: ${value}`);
        }
      });
    });
  });



/*  res.json({
    body: `my test value: ${bar}`,
  });*/
};

