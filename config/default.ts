const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;

export default {
  port: 3000,
  dbUri: `mongodb+srv://${dbUser}:${dbPassword}@cluster0.wag2ehx.mongodb.net/api_filmes?retryWrites=true&w=majority`,
  env: "development",
};
