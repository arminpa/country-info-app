const countryContainer = document.querySelector(".country_container");
const countriesSearch = document.getElementById("countries_search");
const btnSearch = document.getElementById("btn_search");
btnSearch.addEventListener("click",  function () {
  const country = countriesSearch.value;
  const request = new XMLHttpRequest();
  request.open(
    "GET",
    `https://countries-api-836d.onrender.com/countries/name/${country}`
  );
  request.send();

  request.addEventListener("load", function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    const html = `
    <img src="${data.flag}" alt="Flag" class="country_flag">
    <h3 class="country_name">${data.name}</h3>
    <h6 class="country_region">🌐${data.subregion.toUpperCase()}</h5>
    <h5 class="country_pop">👨‍👩‍👧‍👦Population: ${+(
      data.population / 1000000
    ).toFixed(1)}</h5>
    <h5 class="country_cur">💰Currency: ${data.currencies[0].name}</h5>
    <h5 class="country_lang">🗣️Laanguage: ${data.languages[0].name}</h5>
  `;
    countryContainer.innerHTML = html;
  });
});
