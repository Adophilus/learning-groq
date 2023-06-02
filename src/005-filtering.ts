import { database, groq } from "./lib";

groq`*[age >= 18]`
  .then((query) => query(database))
  .then((adults) => console.log(adults));

groq`*[age < 18]`
  .then((query) => query(database))
  .then((children) => console.log(children));
