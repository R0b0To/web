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
  await redis.set("test", "one");
  const bar = await redis.get("test");

  res.json({
    body: `my test value: ${bar}`,
  });
};
