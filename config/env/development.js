module.exports = {
    port: process.env.PORT || 9001,
    url: process.env.URL || 'http://0.0.0.0',
    db: {
        username: process.env.DB_USERNAME,
        host: process.env.DB_HOST,
        database: process.env.DB_NAME,
        password: process.env.DB_PASSWORD,
        dialect: "mysql",
        logging: false
    }
};
