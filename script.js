const userAgent = navigator.userAgent.toLowerCase();
console.log("User Agent: ", userAgent); // <-- Add this to debug


// disable right click
document.addEventListener("contextmenu", function(event) {
  event.preventDefault();
});

function checkLogin() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // define the list of predefined users and their corresponding links
  var userLinks = {
    "testuser": "./course/course.html",
    "atikulhoque": "./course/course.html",
    // "parvezahamed527": "./course/course.html",
    // "tahlilazim89": "./course/course.html",
    // "muhammmadali177": "./course/course.html",
    // "atikulhoque": "./course/course.html",
    // "partha6459": "./course/course.html",
    // "samihahaque2560": "./course/course.html",
    // "abdullah.adnin.97": "./course/course.html",
    // "musahidmahi777": "./course/course.html",
    // "arafathossainreduan": "./course/course.html",
    // "zakibalazad": "./course/course.html",
    // "mariamim": "./course/course.html",
    // "sifat": "./course/course.html",
    // "sabbiranik": "./course/course.html",
    // "sabbirkhan": "./course/course.html",
    // "omairij": "./course/course.html",
    // "niazmuhit": "./course/course.html",
    // "samihahaque": "./course/course.html",
    // "arifulislam18340": "./course/course.html",
    // "tanjinmehrab0727": "./course/course.html",
    // "sanjidhaislam": "./course/course.html",
    // "moniraakter": "./course/course.html",
    // "arfanhoq": "./course/course.html"
  };

  // define the list of predefined users with their authentication details
  var users = [
    { username: "testuser", password: "testpassword"},
    { username: "atikulhoque", password: "atikulhoque486588"},
    // { username: "parvezahamed527", password: "parvez527978"},
    // { username: "tahlilazim89", password: "tahlilazim846538"},
    // { username: "muhammmadali177", password: "muhammmadali496531"},
    // { username: "atikulhoque", password: "atikulhoque496531"},
    // { username: "partha6459", password: "partha64597562"},
    // { username: "samihahaque2560", password: "samiha784698665"},
    // { username: "abdullah.adnin.97", password: "adnin4653232123"},
    // { username: "musahidmahi777", password: "musahidmahi84653241"},
    // { username: "arafathossainreduan", password: "reduan84653241"},
    // { username: "zakibalazad", password: "zakibalazad86824"},
    // { username: "mariamim", password: "maria781265452"},
    // { username: "sifat", password: "sifat635486537"},
    { username: "sabbirkhan", password: "sabbirkhan26112001"},
    // { username: "sabbiranik", password: "oihzauwds5421"},
    // { username: "safayethossain", password: "vbnzajmds6523"},
    // { username: "omairij", password: "pftgnza526532"},
    // { username: "niazmuhit", password: "oertzved5265"},
    // { username: "samihahaque", password: "fzazamel77987"},
    // { username: "arifulislam18340", password: "zkidarke9987"},
    // { username: "tanjinmehrab0727", password: "aquazmdg5844"},
    // { username: "sanjidhaislam", password: "faztamzing5844"},
    // { username: "moniraakter", password: "dzarkulse8599"},
    // { username: "arfanhoq", password: "arjapuz52844"}
  ];

  // check if the username and password match any of the predefined users
  var authenticatedUser = users.find(function(user) {
    return user.username === username && user.password === password;
  });

  // check if the user's IP address matches their predefined IP address
  if (authenticatedUser) {
    // set the authenticated flag in session storage
    sessionStorage.setItem("authenticated", "true");

    // redirect the user to their corresponding page
    window.location.href = userLinks[username];
  } else {
    alert("Access denied");
  }
}

