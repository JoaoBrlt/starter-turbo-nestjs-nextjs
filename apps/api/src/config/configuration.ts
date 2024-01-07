export default () => ({
  // Application
  port: parseInt(process.env.PORT || "3000", 10),

  // Database
  database: {
    host: process.env.DATABASE_HOST || "localhost",
    port: parseInt(process.env.DATABASE_PORT || "5432", 10),
    name: process.env.DATABASE_NAME || "database",
    user: process.env.DATABASE_USER || "user",
    password: process.env.DATABASE_PASSWORD || "password",
  },
});
