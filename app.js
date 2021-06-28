// get covid current cases info "https://covid-api.mmediagroup.fr/v1/cases?country=All"
// get vaccination info "https://covid-api.mmediagroup.fr/v1/vaccines?country=All"
// get covid history info "https://covid-api.mmediagroup.fr/v1/history?country=All&status=deaths"


// Global variables
const searchSection = document.querySelector('#search-section');
let userInput = document.querySelector('#user-input-bar');
const searchButton = document.querySelector('#search-button');
const displayData = document.querySelector('#data-list');
const dataContainer = document.querySelector('.data-container')


// Adding event listener when user clicks search button - cases

searchButton.addEventListener('click', search);


function search() {

  // userInput.value = userInput.value.toLowerCase();
  // userInput.value = userInput.value[0].toUpperCase() + userInput.value.substring(1, userInput.length);
  // console.log(userInput.value);

  // caseSensitive(userInput);
  // displayCurrentData(userInput)
  // displayCurrentData(searchVaccInput)

  displayCurrentData(userInput)
  console.log(userInput.value);
}

//function call - API for Cases around the world

async function displayCurrentData(country) {
  try {
    const response = await axios.get(`https://covid-api.mmediagroup.fr/v1/cases?country=${userInput.value}`)
    const res = await axios.get(`https://covid-api.mmediagroup.fr/v1/vaccines?country=${userInput.value}`)
    removeOldData(dataContainer);
    // removeOldData(vaccineData);
    
    let dataList = response.data.All;
    let vaccList = res.data.All;

    let totalList = {
      dataList: response.data.All,
      vaccList: res.data.All
    }

    console.log(totalList);
    // console.log(dataList);
    // console.log(vaccList);
    // console.log(res);
    // console.log(response);

    const countryName = document.createElement('h1');
    countryName.textContent = `Country: ${totalList.dataList.country}`;
    dataContainer.appendChild(countryName);

    const countryCapital = document.createElement('h2');
    countryCapital.textContent = `Capital: ${totalList.dataList.capital_city}`;
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

// Vaccination info append

    const peopleVaccinated = document.createElement('h3');
    peopleVaccinated.textContent = `Total Vaccinated: ${totalList.vaccList.people_vaccinated}`;
    dataContainer.appendChild(peopleVaccinated);

    const peoplePartiallyVaccinated = document.createElement('h4');
    peoplePartiallyVaccinated.textContent = `Partially Vaccinated: ${totalList.vaccList.people_partially_vaccinated}`;
    dataContainer.appendChild(peoplePartiallyVaccinated);

    const administered = document.createElement('h4');
    administered.textContent = `Administered: ${totalList.vaccList.administered}`;
    dataContainer.appendChild(administered);

    const updated = document.createElement('h4');
    updated.textContent = `Last Updated: ${totalList.vaccList.updated}`;
    dataContainer.appendChild(updated);


  } catch (error) {
    console.error(error);
  }
}

// //function for case sensitive
// function caseSensitive() {
//   displayCurrentData();
//   let userInput = userInput.value;
//   let output = userInput.match(dataList.country);
//   console.log(output);
//   return output;
// }


// function to remove last searched data from DOM
function removeOldData(element) {
  while (element.lastChild) {
    element.removeChild(element.lastChild)
  }
}

//Function to scroll Top of the page button

// ***** Got help through google search *****

const homeButton = document.querySelector('.to-top')

//When the user scrolls down 250px from the top of the document, show the button
window.onscroll = function () {
  scrollHome()
}

function scrollHome() {
  if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
    homeButton.style.display = "block";
  } else {
    homeButton.style.display = "none";
  }
}

// //When the user clicks on the button, scroll to the top of the document
// function topScroll() {
//   document.body.scrollTop = 0; //For safari
//   document.documentElement.scrollTop = 0; //for other browsers
// } 