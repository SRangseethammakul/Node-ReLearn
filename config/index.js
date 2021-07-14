require('dotenv').config();
module.exports = {
    PORT : process.env.PORT,
    MONGODB_URI : process.env.MONGODB_URI,
    DOMAIN : process.env.DOMAIN,
    DOMAIN_GOOGLE_URL : process.env.DOMAIN_GOOGLE_URL
}