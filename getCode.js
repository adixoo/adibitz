async function fetchCountries() {
  const res = await fetch(
    "https://restcountries.com/v3.1/all?fields=name,cca2,idd"
  );
  const data = await res.json();

  const formatted = data.map((c) => ({
    name: c?.name?.common || "",
    code: c?.cca2 || "",
    phone: c?.idd?.root || ""
  }));

  console.log(JSON.stringify(formatted, null, 2));
}

fetchCountries();
