import config from "../conf/index.js";

async function init() {
  //Fetches list of all cities along with their images and description
  let cities = await fetchCities();

  //Updates the DOM with the cities
  cities.forEach((key) => {
    addCityToDOM(key.id, key.city, key.description, key.image);
  });
}

//Implementation of fetch call
async function fetchCities() {
  // TODO: MODULE_CITIES
  // 1. Fetch cities using the Backend API and return the data
  let response = await fetch("http://3.109.192.254:8082/cities");
  let user = await response.json();
  cd ~/workspace/gauravsingh78945-ME_QTRIPDYNAMIC
  git add .
  git commit -m “ME_QTRIPDYNAMIC_MODULE_CITIES”
  git push -u origin master
  
  # Ensure you have no pending commits
  git status
  return user;
}

//Implementation of DOM manipulation to add cities
function addCityToDOM(id, city, description, image) {
  // TODO: MODULE_CITIES
  // 1. Populate the City details and insert those details into the DOM

}

export { init, fetchCities, addCityToDOM };
