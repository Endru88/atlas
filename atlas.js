fetch('https://restcountries.com/v3.1/region/europe')
.then(res => res.json())
.then(data =>{
    data.forEach(country =>{
      console.log(country);
        console.log(country.translations.ces.common);
        console.log(country.flags.png);
        console.log(country.maps.googleMaps);
        let blockCountry = `<div class="col-xl-1 col-lg-2 col-md-3 col-sm-6 mt-2 color">
        <p><img src="${country.flags.png}" alt="${country.translations.ces.common}"class="img-fluid mt-2" srcset=""></p>
        <h5><a href="${country.maps.googleMaps}">${country.translations.ces.common}</a></h5>
        <p>Pocet obyvatel:</p>
        <p>${country.population}</p>
        <p>Capital:</p>  
        <p>${country.capital}</p>
      </div>`;
      countrieslist.innerHTML += blockCountry;
    });
});