import { database, groq } from "./lib";

groq`*[country == "Nigeria"]`
  .then((query) => query(database))
  .then((nigerians) => console.log(nigerians));
