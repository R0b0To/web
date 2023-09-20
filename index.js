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
  const bar = await redis.get("test");
  console.log(redis);

  res.json({
    body: `my test value: ${bar}`,
  });
};

