import { parse, evaluate } from "groq-js";
import fs from "fs";

export const database: Record<string, string> = JSON.parse(
  fs.readFileSync("assets/database.json", "utf8")
);

export const groq = async ([query]: TemplateStringsArray) => {
  const tree = parse(query);
  return async (dataset: Record<string, string>) => {
    const result = await evaluate(tree, { dataset });
    return await result.get();
  };
};
