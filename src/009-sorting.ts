import { database, groq } from "./lib";

groq`*[gender == "Male" && age < 18] | order(age desc)[0..10]`
  .then((query) => query(database))
  .then((oldestBoys) => console.log(oldestBoys));
