//
const x = document.getElementById("demo");
const getLocation = () => {
  if (navigator.geolocation) {
    //chat about navigator vs window
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  }
};

function showPosition(position) {
  x.innerHTML =
    "Latitude: " +
    position.coords.latitude +
    "<br>Longitude: " +
    position.coords.longitude;

  console.log(position);
}

const showError = error => {
  x.innerHTML = error.message;
  console.log(error);
};

getLocation();
navigator.geolocation.getCurrentPosition(function(position) {
  console.log(position);
  console.log(navigator.appName);
});

let date = new Date();
let days = ["Sunday", "Monday", "Tuesday", "Wednesday"];
let months = ["Jan", "Feb", "Mar", "Apr", "May"];
// console.log(date.getDay());
console.log(days[date.getDay()]);
console.log(months[date.getMonth()]);
console.log(date.getDate());
console.log(date.getHours());
console.log(date.getMinutes());
