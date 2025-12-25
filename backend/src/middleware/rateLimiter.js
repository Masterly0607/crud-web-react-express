import ratelimit from "../config/upstash.js";

// Creating ratelimit middleware
const rateLimiter = async (req, res, next) => {
  try {
    const { success } = await ratelimit.limit("my-limit-key"); // in production, we can replace my-limit-key by user.id

    if (!success) {
      return res.status(429).json({
        message: "Too many requests, please try again later",
      });
    }
    next(); // go to controller
  } catch (error) {
    console.error("Rate limit error", error);
    next(error);
  }
};

export default rateLimiter;
