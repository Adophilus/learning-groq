import { parse, evaluate } from "groq-js";
import fs from "fs";

export const database = fs.readFileSync("assets/database.json", "utf8");

export const groq = async ([query]: TemplateStringsArray) => {
  let tree = parse(query);
  return async (dataset: any) => {
    let result = await evaluate(tree, { dataset });
    return await result.get();
  };
};
