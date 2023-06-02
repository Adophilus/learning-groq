import { groq } from "./lib";
import fs from "fs/promises";

const main = async () => {
  const database = await fs.readFile("assets/database.json", "utf8");
  const query = await groq`
  *
  `;

  const result = await query(database);
  console.log(result);
};

main();
