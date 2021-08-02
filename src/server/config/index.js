import dotenv from "dotenv";

const envFound = dotenv.config();

if (!envFound) {
  throw new Error("Couldn't find .env!");
}

export default {
  port: parseInt(process.env.PORT),
};
