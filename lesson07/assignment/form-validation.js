
// This variable represents the form itself for validation
const getData = document.querySelector('.needs-validation');


// The variable that has been declared starts with an 'event listener', then a submit function 
  getData.addEventListener('submit', function(event) {
    
    // That's prevent from submitting the form
    event.preventDefault;

    // This variable calls the selector to get the input value of the first name
    // var fname = document.getElementById("firstName").value;
    const fname = document.getElementById("firstName").value;
    // When it is submitted the result will be display in the console
    console.log(fname);

    // This variable calls the selector to get the input value of the last name
    const lname = document.getElementById("lastName").value;
    // When it is submitted the result will be display in the console
    console.log(lname);

    // This variable targets the Id 'inputAddress' by the querySelector method to print the value, with value method
    const address = document.querySelector("#inputAddress").value;
    console.log(address);

    // This variable targets the Id 'inputCity' by the querySelector method to print the value, with value method
    const city = document.querySelector("#inputCity").value;
    console.log(city);

    // This variable calls the Id 'email' by the DOM method, getElementById to print the value, with value method
    const email = document.getElementById("email").value;
    console.log(email);

    // This variable calls the Id 'email' by the DOM method, getElementById to print the value, with value method
    const season = document.getElementById('season').value;
        console.log('Your favorite season for travelling is: ', season);

    
    // Destination
    // Variables declared individually to be targeted by using the if/else statement
    const val1 = document.getElementById('africa');
    const val2 = document.getElementById('america');
    const val3 = document.getElementById('asia');
    const val4 = document.getElementById('australia');
    const val5 = document.getElementById('europe');
    const val6 = document.getElementById('outS');

    // Bunch of if/else statements for checkboxes and radios 
    if (val1.checked==true) {
      console.log("Your favorite global destination " + val1.value);
    } else if (val2.checked==true) {
      console.log("Your favorite global destination " + val2.value);
    } else if (val3.checked==true) {
      console.log("Your favorite global destination " + val3.value);
    } else if (val4.checked==true) {
      console.log("Your favorite global destination " + val4.value);
    } else if (val5.checked==true) {
      console.log("Your favorite global destination " + val5.value);
    } else { (val6.checked==true)
      console.log("Sorry, " + val6.value + " that is not available yet. First, explore Earth before visiting Mars");
    }

    // Types of vacation
    // Variables declared individually to be targeted by using the if/else statement
    const vl1 = document.getElementById('nature');
    const vl2 = document.getElementById('culture');
    const vl3 = document.getElementById('adventure');
    const vl4 = document.getElementById('relax');
    const vl5 = document.getElementById('business');
    
    // Bunch of if/else statements for checkboxes and radios 
    if (vl1.checked==true) {
      console.log("You selected " + vl1.value + " as your trip preference");
    } else if (vl2.checked==true) {
      console.log("You selected " + vl2.value + " as your trip preference");
    } else if (vl3.checked==true) {
      console.log("You selected " + vl3.value + " as your trip preference");
    } else if (vl4.checked==true) {
      console.log("You selected " + vl4.value + " as your trip preference");
    } else { (vl5.checked==true)
      console.log("You selected " + vl5.value + " as your trip preference");
    } 

    // Accomodation
    // Variables declared individually to be targeted by using the if/else statement
    const v1 = document.getElementById('airbnb');
    const v2 = document.getElementById('hotel');
    const v3 = document.getElementById('bAb');
    const v4 = document.getElementById('resort');
    const v5 = document.getElementById('outdoors');

    // Bunch of if/else statements for checkboxes and radios 
    if (v1.checked==true) {
      console.log("You selected " + v1.value + " as preferable accommodation");
    } else if (v2.checked==true) {
      console.log("You selected " + v2.value + " as preferable accommodation");
    } else if (v3.checked==true) {
      console.log("You selected " + v3.value + " as preferable accommodation");
    } else if (v4.checked==true) {
      console.log("You selected " + v4.value + " as preferable accommodation");
    } else { (v5.checked==true)
      console.log("You selected " + v5.value + " as preferable accommodation");
    } 

    // This variable calls the Text Area with query selector to print the value in the console, with the value method
    const commnt = document.querySelector('#floatingtextarea').value;
        console.log(commnt);

    // This alert will pop up when the entire form is completed
    alert("Thank you. The form information has been received");
    console.log("Thank you. The form information has been received");
     
    // End of the function
  });
