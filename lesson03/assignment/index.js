  //  The code starts from here
  // devJSON holds four objects in an array 
  const devJSON = [{
    "name": "Paolo Maldini",
    "jobTitle": "Front End Developer",
    "company": "Web Weavers",
    "experience": "3 years",
    "school": "University of Washington",
    "major": "Marketing",
    "email": "paolo@example.com",
    "linkedInUrl": "paolo.linkedinprofile.com",
    "codeLanguages": [
        "HTML", "CSS", "JavaScript", "Node", "Express" 
    ]    
  },
  {
    "name": "Barbara Bonansea",
    "jobTitle": "Software Engineer",
    "company": "Excellence in the Cloud",
    "experience": "12 years",
    "school": "University of Southern California",
    "major": "Computer Science",
    "email": "barbara@example.com",
    "linkedInUrl": "barbara.linkedinprofile.com",
    "codeLanguages": [
        "HTML", "JavaScript", "C", "Go" 
    ]
  },
  {
    "name": "Javier Hernandez",
    "jobTitle": "User Experience Engineer",
    "company": "Web Sites and More",
    "experience": "5 years",
    "school": "Seattle University",
    "major": "Performing Arts",
    "email": "javier@example.com",
    "linkedInUrl": "javier.linkedinprofile.com",
    "codeLanguages": [
        "HTML", "CSS" 
    ]
  },
  {
    "name": "Maribel Dominguez",
    "jobTitle": "Front End Engineer",
    "company": "Bits and Bytes",
    "experience": "6 years",
    "school": "University of Washington",
    "major": "Mechanical Engineering",
    "email": "maribel@example.com",
    "linkedInUrl": "maribel.linkedinprofile.com",
    "codeLanguages": [
       "HTML", "CSS", "JavaScript", "React", "Vue", "Redux"
    ]
  }
 ] 

// console.log(devJSON);


// devHTML calls the array of objects that applies the map method. The .map method will map 'devJSON' array. The function comes inside the parentheses with the argument 'el' (element) which represents the HTML data.
let devHTML = devJSON.map(function(el) {
  // In order to save line of code, I placed 'return' here instead of the bottom, otherwise I would need to create another variable 
  // After 'return', backticks render the HTML component extracted from index.html. The div class call 'main-container' serves as a bridge between index.html and index.js  
  // String interpolation is inside the code to consecutively print the variables of each value in the array 
  return `
  <div class="main-container">   
    <div class="card">
            <div class="card-body">
            <header class="left-side">
                <img src="./img/headshot.jpg" class="card-img" alt="Paolo Maldini developer">
                <h1 class="card-title">${el.name}</h1>
                <h2 class="card-subtitle">${el.jobTitle}</h2>
            </header>

            <div class="card-list right-side">
                <ul class="list-group">
                    <li class="list-group-item"><span>Company: </span>${el.company}</li>
                    <li class="list-group-item"><span>Experience: </span>${el.experience}</li>
                    <li class="list-group-item"><span>Schools: </span>${el.school}</li>
                    <li class="list-group-item"><span>Major: </span>${el.major}</li>
                    <li class="list-group-item"><span>Email: </span><span class="email-list">${el.email}</span></li>
                    <li class="list-group-item-link"><img src="./img/linkedin.svg" class="linkedin-img" alt="linkedin icon"><a class="linkedin-link" href="https://www.linkedin.com/" title="Linkedin"><span class="linkedin-list">${el.linkedInUrl}</span></a></li>
                    <li class="list-group-item"><span>Code Languages: </span>${el.codeLanguages.join(', ')}</li>
                </ul>     
            </div>  
        </div>
    </div>
    </div>
    `;
});

// This method selects an element which a class call 'main-container' to append the data inside of it in index.html to sync 'devHTML' data and output the content into the browser 
document.querySelector('div.main-container').innerHTML = devHTML;