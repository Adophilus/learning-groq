import { database, groq } from "./lib";

groq`*[country == "Nigeria"]{
  "full_name": first_name + " " + last_name
}`
  .then((query) => query(database))
  .then((nigerianNames) => console.log(nigerianNames));

groq`*[country == "Nigeria"]{
  "full_name": first_name + " " + last_name
}.full_name`
  .then((query) => query(database))
  .then((nigerianNames) => console.log(nigerianNames));
