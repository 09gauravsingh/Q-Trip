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
  try {
    let response = await fetch("http://13.232.171.45:8082/cities");
    let user = await response.json();
    /**cd ~/workspace/gauravsingh78945-ME_QTRIPDYNAMIC
    git add .
    git commit -m “ME_QTRIPDYNAMIC_MODULE_CITIES”
    git push -u origin master
    
    # Ensure you have no pending commits
    git status**/
    return user;
  }
  catch (err) {
    return null;
  }
}

//Implementation of DOM manipulation to add cities
function addCityToDOM(id, city, description, image) {
  // TODO: MODULE_CITIES
  // 1. Populate the City details and insert those details into the DOM
  let element = document.createElement('div');
  element.className = 'col-12 col-md-3 col-sm-6 mb-4';
  element.innerHTML = `<a href="pages/adventures/?city=${id}" id='${id}'>
   <div class= " tile ">
     <img src=${image} class="img-fluid rounded">
     <div class="tile-text">
       <h5>${city}</h5>
       <p>${description}</p>
     </div>
    </div>
   </a>`

  document.getElementById('data').appendChild(element)

}

export { init, fetchCities, addCityToDOM };
