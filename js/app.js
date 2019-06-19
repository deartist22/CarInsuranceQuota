//Variables
const form = document.getElementById('request-quote');

//EventListeners
eventListeners();
function eventListeners() {
    document.addEventListener('DOMContentLoaded', function() {
        //Create the <options> for the years
        const html = new HTMLUI();
        html.displayYears();
        console.log( html.displayYears());
    })

    //When the form is submitted
    form.addEventListener('submit', function(e) {
        e.preventDefault();


        //Read the values from the form
        const make = document.getElementById('make').value;
        const year = document.getElementById('year').value;

        //Read the radio buttons
        const level = document.querySelector('input[name="level"]:checked').value;

        //Check that all fields have something
        if(make === '' || year === ''|| level === ''){
            console.log('Error');
        } else {
            console.log('Working');
        }
    })
}

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