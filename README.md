# Covidya

# Project Overview

## Project Name

Covidya

## Project Description
 
This project displays all the information related Covid-19. Like from Cases, History and Vaccination information based on the user search all around the world. To be specific, in cases link, it displays information regarding DEATH, RECOVRED, CONFIRMED etc.. 

## API and Data Sample

# API

** https://github.com/M-Media-Group/Covid-19-API

https://covid-api.mmediagroup.fr/v1/cases?country=(Country Name/State Name)

# Data Sample: 
```
"All": {
        "confirmed": 5819575,
        "recovered": 402447,
        "deaths": 110940,
        "country": "France",
        "population": 64979548,
        "sq_km_area": 551500,
        "life_expectancy": "78.8",
        "elevation_in_meters": 375,
        "continent": "Europe",
        "abbreviation": "FR",
        "location": "Western Europe",
        "iso": 250,
        "capital_city": "Paris",
        "lat": "46.2276",
        "long": "2.2137",
        "updated": "2021/06/21 21:22:00+00"
    },
    "French Guiana": {
        "lat": "4",
        "long": "-53",
        "confirmed": 26450,
        "recovered": 9995,
        "deaths": 141,
        "updated": "2021/06/21 21:22:00+00"
    },
    "French Polynesia": {
        "lat": "-17.6797",
        "long": "-149.4068",
        "confirmed": 18963,
        "recovered": 18787,
        "deaths": 142,
        "updated": "2021/06/21 21:22:00+00"
    },
    "Guadeloupe": {
        "lat": "16.265",
        "long": "-61.551",
        "confirmed": 17427,
        "recovered": 2250,
        "deaths": 266,
        "updated": "2021/06/21 21:22:00+00"
    },
    "Martinique": {
        "lat": "14.6415",
        "long": "-61.0242",
        "confirmed": 12199,
        "recovered": 98,
        "deaths": 99,
        "updated": "2021/06/21 21:22:00+00"
    },
```


## Wireframes

![Screen Shot 2021-06-21 at 3 55 13 PM](https://user-images.githubusercontent.com/85080279/122837517-134c3700-d2a9-11eb-8d84-ef9733790996.png)

### MVP/PostMVP
  

#### MVP 

- Get the project API and add axios API call to find and use data from the COVID API database. 
- Create a base frame for the project using HTML CSS and JS
- Allow user to search for the latest information.
- Render Vaccination information.
- Adding media query.
- Add styling in CSS, include Flexbox or Grid styling.
- Remove previous search results for new search. 

#### PostMVP  

- Add graphical representation for the information searched.
- Render search images, cases and history info.
- Allow user to scroll back to the top of the page by single click.

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|June 21| Prompt / Wireframes / Priority Matrix / Timeframes | Complete
|June 22| Project Approval / Core Application Structure (HTML, CSS, etc.) | Incomplete
|June 23| Pseudocode / actual code | Incomplete
|June 24| MVP  | Incomplete
|June 25| PMVP and advance styling | Incomplete
|June 28| Presentations | Incomplete

## Priority Matrix

![Screen Shot 2021-06-21 at 8 35 58 PM](https://user-images.githubusercontent.com/85080279/122859102-4c4bd200-d2d0-11eb-97da-e8f4736c25d5.png)


## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Create HTML/CSS and basic structure| H | 4hrs| 3hrs | 3hrs |
| DOM Implimentation | H | 2hrs | 1.5hrs | 1.5hrs |
| JS actual code | H | 3hrs | 4hrs | 4hrs |
| Working with API | H | 3hrs| 2hrs | 2hrs |
| Appending Info to DOM | H | 4hrs | 3hrs | 3hrs |
| Navigations | H | 4hrs | 2hrs | 2hrs |
| Creating Search Bar | H | 4hrs | 3.5hrs | 3.5hrs |
| Responsive web desiging | H | 5hrs | -hrs | -hrs |
| CSS Styling | H | 6hrs | 6.5hrs | 6.5hrs |
| Review of Functionality | H | 3hrs | -hrs | -hrs |
| Total | H | 38hrs| -hrs | -hrs |

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  
