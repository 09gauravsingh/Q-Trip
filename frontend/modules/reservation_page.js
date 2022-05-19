import config from "../conf/index.js";

//Implementation of fetch call to fetch all reservations
async function fetchReservations() {
  // TODO: MODULE_RESERVATIONS
  // 1. Fetch Reservations by invoking the REST API and return them
  try{
    const result = await fetch(config.backendEndpoint + '/reservations/')
    const data = await result.json()
    return data;
  }
  catch(err){
    return null;
  }

  // Place holder for functionality to work in the Stubs
   
}

//Function to add reservations to the table. Also; in case of no reservations, display the no-reservation-banner, else hide it.
function addReservationToTable(reservations) {
  // TODO: MODULE_RESERVATIONS
  // 1. Add the Reservations to the HTML DOM so that they show up in the table
  
 if(reservations.length != 0){
  document.getElementById("reservation-table-parent").style.display="block";
  document.getElementById("no-reservation-banner").style.display="none";
 }
 else {
   document.getElementById("reservation-table-parent").style.display="none"
   document.getElementById("no-reservation-banner").style.display="block";
  }
    
 //Conditionally render the no-reservation-banner and reservation-table-parent

  /*
    Iterating over reservations, adding it to table (into div with class "reservation-table") and link it correctly to respective adventure
    The last column of the table should have a "Visit Adventure" button with id=<reservation-id>, class=reservation-visit-button and should link to respective adventure page
    Note:
    1. The date of adventure booking should appear in the format D/MM/YYYY (en-IN format) Example:  4/11/2020 denotes 4th November, 2020
    2. The booking time should appear in a format like 4 November 2020, 9:32:31 pm
  */

  let row=document.getElementById("reservation-table")
   reservations.map((booking) => {
     let tr=document.createElement("tr")
     tr.innerHTML = 
     `
     <tr>
        <td scope="col">${booking.id}</td>
        <td scope="col">${booking.name}</td>
        <td scope="col">${booking.adventureName}</td>
        <td scope="col">${booking.person}</td>
        <td scope="col">${new Date(booking.date).toLocaleDateString("en-IN")}</td>
        <td scope="col">${booking.price}</td>
        <td scope="col">${new Date(booking.time).toLocaleDateString("en-IN",{
          year: "numeric",
          day: "numeric",
          month: "long",
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          hour12:true,
        })}</td>
        <td scope="col"><div class="reservation-visit-button" id=${booking.id}>
        <a href="../detail/?adventure=${booking.adventure}">
        Visit Adventure</a></div></td>
    </tr>
    `
    row.append(tr)    
  })

}

export { fetchReservations, addReservationToTable };