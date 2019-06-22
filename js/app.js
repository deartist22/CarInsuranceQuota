//Variables
const form = document.getElementById('request-quote');
const html = new HTMLUI();

//EventListeners
eventListeners();
function eventListeners() {
    document.addEventListener('DOMContentLoaded', function() {
        //Create the <options> for the years
        
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
            html.displayError('All the fields are mandatory');
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

//Prints an error
HTMLUI.prototype.displayError = function(message) {

    const div = document.createElement('div');
    div.classList = 'error';

    div.innerText = ` <p>${message}</p>`;

    form.insertBefore(div, document.querySelector('.form-group'));

    //Remove the error
    setTimeout(function() {
        document.querySelector('.error').remove();
    }, 3000)
}
