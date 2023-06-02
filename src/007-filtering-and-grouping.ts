import { database, groq } from "./lib";

groq`*[gender == "Male"]{
  "state": select(
    age < 13 => "a child",
    age < 18 => "a young person",
    age < 30 => "a young adult",
    age < 40 => "an adult",
    "a dinosaur"
  ),
  ...
}{
  "sentence": first_name + " " + last_name + " is " + state
}.sentence`
  .then((query) => query(database))
  .then((boys) => console.log(boys));
