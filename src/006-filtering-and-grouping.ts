import { database, groq } from "./lib";

groq`*[gender == "Male"]{
  "isYoung": select(age < 18 => true, false),
  ...
}`
  .then((query) => query(database))
  .then((boys) => console.log(boys));
