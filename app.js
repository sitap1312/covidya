// get covid current cases info "https://covid-api.mmediagroup.fr/v1/cases?country=All"
// get vaccination info "https://covid-api.mmediagroup.fr/v1/vaccines?country=All"
// get covid history info "https://covid-api.mmediagroup.fr/v1/history?country=All&status=deaths"


// Global variables
const searchSection = document.querySelector('.search-section');
const userInput = document.querySelector('input');
const searchButton = document.querySelector('#search-button');
const displayData = document.querySelector('.data-list');

// Adding event listener when user clicks search button
searchButton.addEventListener('click', search);

function search() {
  displayCurrentData(userInput)
  console.log(userInput.value);
}

async function displayCurrentData(country) {
  try {
    const response = await axios.get(`https://covid-api.mmediagroup.fr/v1/cases?country=${userInput.value}`)
    const dataList = response.data.All;
    console.log(dataList);

    const countryCapital = document.createElement('h2');
    countryCapital.textContent = `Capital: ${dataList.capital_city}`;
    displayData.append(countryCapital);

    const confirmCases = document.createElement('h4');
    confirmCases.textContent = `Confirmed Cases: ${dataList.confirmed}`;
    displayData.append(confirmCases);

    const recoveredCases = document.createElement('h4');
    recoveredCases.textContent = `Recovered: ${dataList.recovered}`;
    displayData.append(recoveredCases);

    const deathsNums = document.createElement('h4');
    deathsNums.textContent = `Total Deaths: ${dataList.deaths}`;
    displayData.append(deathsNums);

    const lastUpdated = document.createElement('h4');
    lastUpdated.textContent = `Last Updated: ${dataList.updated}`;
    displayData.append(lastUpdated);


    



  } catch (error) {
    console.error(error);
  }
}