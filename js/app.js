//Variables


//EventListeners
document.addEventListener('DOMContentLoaded', function() {
    //Create the <options> for the years
    const html = new HTMLUI();
    html.displayYears();
    console.log( html.displayYears());
})


//Objects

function HTMLUI() {}

//Display the last 20 years in the select
HTMLUI.prototype.displayYears = function() {
    //Max & min years
    const max = new Date().getFullYear(),
          min = max - 20;


    //Generate the list with the last 20 years
    const selectedYears = document.getElementById('year');

    //Print the values
    for(let i = max; i >= min; i--) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        selectedYears.appendChild(option);
    }
}