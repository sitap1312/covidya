// get covid current cases info "https://covid-api.mmediagroup.fr/v1/cases?country=All"
// get vaccination info "https://covid-api.mmediagroup.fr/v1/vaccines?country=All"
// get covid history info "https://covid-api.mmediagroup.fr/v1/history?country=All&status=deaths"


// Global variables
const searchSection = document.querySelector('#search-section');
const userInput = document.querySelector('input');
const searchButton = document.querySelector('#search-button');
const displayData = document.querySelector('#data-list');
const dataContainer = document.querySelector('.data-container')


// Adding event listener when user clicks search button
searchButton.addEventListener('click', search);

function search() {
  displayCurrentData(userInput)
  console.log(userInput.value);
}

async function displayCurrentData(country) {
  try {
    const response = await axios.get(`https://covid-api.mmediagroup.fr/v1/cases?country=${userInput.value}`)
    removeOldData(dataContainer);
    const dataList = response.data.All;
    console.log(dataList);

    const countryCapital = document.createElement('h2');
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

// function to remove last searched data from DOM
function removeOldData(element) {
  while (element.lastChild) {
    element.removeChild(element.lastChild)
  }
}