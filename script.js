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
    "adnin": "./course/course.html",
    "niaz": "./course/course.html",
    "parvez": "./course/course.html",
    "tahlil": "./course/course.html",
    "sifat": "./course/course.html",
    "mim": "./course/course.html",
    "ariful": "./course/course.html",
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
    { username: "adnin", password: "adnin13486588"},
    { username: "niaz", password: "niaz486542588"},
    { username: "parvez", password: "parvez46586588"},
    { username: "tahlil", password: "tahlil9465321634"},
    { username: "sifat", password: "sifat4812621588"},
    // { username: "mahbubc255", password: "mahbubc526532"},
    { username: "ariful", password: "ariful216123"},
    { username: "mim", password: "mim216123"},
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

