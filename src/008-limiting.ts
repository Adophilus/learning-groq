import { database, groq } from "./lib";

groq`*[gender == "Male" && age < 18][0..10]`
  .then((query) => query(database))
  .then((boys) => console.log(boys));
