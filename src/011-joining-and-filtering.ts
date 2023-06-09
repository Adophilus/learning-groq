import { database, groq } from "./lib";

groq`*[]{
  first_name,
  last_name,
  "relatives": *[id != ^.id && last_name == ^.last_name]{ first_name, last_name }
}[count(relatives) > 0]`
  .then((query) => query(database))
  .then((relatedPeople) => console.log(relatedPeople));
