// get covid current cases info "https://covid-api.mmediagroup.fr/v1/cases?country=All"
// get vaccination info "https://covid-api.mmediagroup.fr/v1/vaccines?country=All"
// get covid history info "https://covid-api.mmediagroup.fr/v1/history?country=All&status=deaths"


// Global variables
const searchSection = document.querySelector('#search-section');
const userInput = document.querySelector('#user-input-bar');
const searchButton = document.querySelector('#search-button');
const displayData = document.querySelector('#data-list');
const dataContainer = document.querySelector('.data-container')

//Global variables for 2nd API
const searchVaccInput = document.querySelector('#search-vacc-Input');
const searchVaccButton = document.querySelector('#search-vacc-button');
const vaccineInfo = document.querySelector('#vaccine-info');
const vaccineData = document.querySelector('.vaccine-data')


// Adding event listener when user clicks search button - cases
searchButton.addEventListener('click', search);

function search() {
  displayCurrentData(userInput)
  console.log(userInput.value);
}

//function call - API for Cases around the world

async function displayCurrentData(country) {
  try {
    const response = await axios.get(`https://covid-api.mmediagroup.fr/v1/cases?country=${userInput.value}`)
    removeOldData(dataContainer);
    const dataList = response.data.All;
    console.log(dataList);

    const countryName = document.createElement('h2');
    countryName.textContent = `Country: ${dataList.country}`;
    dataContainer.appendChild(countryName);

    const countryCapital = document.createElement('h3');
    countryCapital.textContent = `Capital: ${dataList.capital_city}`;
    dataContainer.appendChild(countryCapital);

    const confirmCases = document.createElement('h4');
    confirmCases.textContent = `Confirmed Cases: ${dataList.confirmed}`;
    dataContainer.appendChild(confirmCases);

    const recoveredCases = document.createElement('h4');
    recoveredCases.textContent = `Recovered: ${dataList.recovered}`;
    dataContainer.appendChild(recoveredCases);

    const deathsNums = document.createElement('h4');
    deathsNums.textContent = `Total Deaths: ${dataList.deaths}`;
    dataContainer.appendChild(deathsNums);

    const lastUpdated = document.createElement('h4');
    lastUpdated.textContent = `Last Updated: ${dataList.updated}`;
    dataContainer.appendChild(lastUpdated);


  } catch (error) {
    console.error(error);
  }
}

// Adding event listener when user clicks search button - Vaccines
searchVaccButton.addEventListener('click', searchVacc);

function searchVacc() {
  displayVaccineData(searchVaccInput)
  console.log(searchVaccInput.value);
}

//function call - API for Vaccines around the world..

async function displayVaccineData(vaccine) {
  try {
    const res = await axios.get(`https://covid-api.mmediagroup.fr/v1/vaccines?country=${searchVaccInput.value}`)
    removeOldData(vaccineData);
    const vaccList = res.data.All;
    console.log(vaccList);

    const countryName = document.createElement('h2');
    countryName.textContent = `Country: ${vaccList.country}`;
    vaccineData.appendChild(countryName);

    const countryCapital = document.createElement('h3');
    countryCapital.textContent = `Capital: ${vaccList.capital_city}`;
    vaccineData.appendChild(countryCapital);

    const peopleVaccinated = document.createElement('h4');
    peopleVaccinated.textContent = `Total Vaccinated: ${vaccList.people_vaccinated}`;
    vaccineData.appendChild(peopleVaccinated);

    const peoplePartiallyVaccinated = document.createElement('h4');
    peoplePartiallyVaccinated.textContent = `Partially Vaccinated: ${vaccList.people_partially_vaccinated}`;
    vaccineData.appendChild(peoplePartiallyVaccinated);

    const administered = document.createElement('h4');
    administered.textContent = `Total Administered: ${vaccList.administered}`;
    vaccineData.appendChild(administered);

    const lastUpdated = document.createElement('h4');
    lastUpdated.textContent = `Last Updated: ${vaccList.updated}`;
    vaccineData.appendChild(lastUpdated);


  } catch (error) {
    console.error(error);
  }
}

// function to remove last searched data from DOM
function removeOldData(element) {
  while (element.lastChild) {
    element.removeChild(element.lastChild)
  }
}

// //Function to scroll Top of the page button

// const homeButton = document.getElementById('#home')

// //When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function () {
//   scrollHome()
// }

// function scrollHome() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     homeButton.style.display = "block";
//   } else {
//     homeButton.style.display = "none";
//   }
// }

// //When the user clicks on the button, scroll to the top of the document
// function topScroll() {
//   document.body.scrollTop = 0; //For safari
//   document.documentElement.scrollTop = 0; //for other browsers
// }