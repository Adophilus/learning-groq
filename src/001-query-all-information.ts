import { database, groq } from "./lib";

groq`*`.then((query) => query(database)).then((result) => console.log(result));
