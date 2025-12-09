const ApplicationUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${
      process.env.VERCEL_ENV === "production"
        ? process.env.VERCEL_PROJECT_PRODUCTION_URL
        : process.env.VERCEL_URL
    }`
  : "http://localhost:3000";

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: ApplicationUrl,
  generateRobotsTxt: true, // (optional)
  generateIndexSitemap: false // (optional)
  // ...other options
};
