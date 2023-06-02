import { database, groq } from "./lib";

groq`*[country == "Nigeria"].first_name`
  .then((query) => query(database))
  .then((nigerianFirstNames) => console.log(nigerianFirstNames));

groq`*[country == "Nigeria"].last_name`
  .then((query) => query(database))
  .then((nigerianLastNames) => console.log(nigerianLastNames));
