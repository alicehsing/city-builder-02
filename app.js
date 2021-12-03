// import functions and grab DOM elements
import { makeStatsString } from './utils.js';
const skylineDropdown = document.querySelector('#skyline-dropdown');
const waterfrontDropdown = document.querySelector('#waterfront-dropdown');
const castleDropdown = document.querySelector('#castle-dropdown');

const skylineImageEl = document.querySelector('#skyline-image');
const waterfrontImageEl = document.querySelector('#waterfront-image');
const castleImageEl = document.querySelector('#castle-image');

const cityInputEl = document.querySelector('#city-input');
const cityButton = document.querySelector('#city-button');
const cityListEl = document.querySelector('.my-city');

const sloganInputEl = document.querySelector('#slogan-input');
const sloganButton = document.querySelector('#slogan-button');
const sloganListEl = document.querySelector('.list');
const countEl = document.querySelector('.count'); 

// let state
let skylineCount = 0;
let waterfrontCount = 0;
let castleCount = 0;
// set state for all of the slogan inputs
let sloganInput = [];
// set event listeners 
skylineDropdown.addEventListener('change', () => {
    // get the value from the dropdown element
    const id = skylineDropdown.value;
    // use that value to change the correct image tag's `.src` property
    skylineImageEl.src = `./assets/skyline-${id}.jpeg`;
    //count of that dropdown will increment
    skylineCount++;
    // update the DOM to reflect new count by calling a function
    displayStats();
});

waterfrontDropdown.addEventListener('change', () => {
    const id = waterfrontDropdown.value;
    waterfrontImageEl.src = `./assets/waterfront-${id}.jpeg`;
    waterfrontCount++;
    displayStats();
});

castleDropdown.addEventListener('change', () => {
    const id = castleDropdown.value;
    castleImageEl.src = `./assets/castle-${id}.jpeg`;
    castleCount++;
    displayStats();
});

sloganButton.addEventListener('click', () => {
    // get the value of the slogan input
    const newInput = cityInputEl.value + ":" + " " + sloganInputEl.value;
    // push the new slogan to the sloganInput array in state
    sloganInput.push(newInput);
    // clear out the form input's value so it's empty to the user
    sloganInputEl.value = '';
    cityInputEl.value = '';

    // update the dom to show the new slogan by calling a function
    displaySlogans();

});

cityButton.addEventListener('click', () => {
    const newCityInput = cityInputEl.value;
    cityListEl.textContent = newCityInput;
});



// Two impure functions displayStats() and displaySlogans()
function displayStats() {
    countEl.textContent = makeStatsString(skylineCount, waterfrontCount, castleCount);
}

function displaySlogans() {
   // clear out the DOM for the currently displayed slogan
    sloganInput.value = '';
  // clear slogan list;
    sloganListEl.textContent = '';
   // loop through each catchphrase in state  
    for (let slogan of sloganInput) {
        const p = document.createElement('p');
   // and append that HTML element to the cleared-out DOM
        p.classList.add('slogan');     
        sloganListEl.append(p);
        p.textContent = slogan;
    
    }

}
