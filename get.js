// fetchCountries.js
import { writeFileSync } from "fs";

async function fetchCountries() {
  const url = "https://restcountries.com/v3.1/all?fields=name,cca2,idd";

  const res = await fetch(url);
  const data = await res.json();

  const formatted = {};

  data.forEach((c) => {
    const code = c.cca2;
    const name = c.name?.common || "";

    formatted[code] = {
      name,
      phone: c.idd || null
    };
  });

  return formatted;
}

// Run + Save to file
fetchCountries()
  .then((json) => {
    writeFileSync("./countries.json", JSON.stringify(json, null, 2));
    console.log("Saved to countries.json");
  })
  .catch((err) => console.error("Error:", err));
