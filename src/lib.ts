import { parse, evaluate } from "groq-js";

export let groq = async ([query]: TemplateStringsArray) => {
  let tree = parse(query);
  return async (dataset: any) => {
    let result = await evaluate(tree, { dataset });
    return await result.get();
  };
};
