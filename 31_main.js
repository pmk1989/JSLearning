
console.log("1. Change the color of header One");

const elementProfileDetails = document.getElementById('details');
elementProfileDetails.style.color = 'brown';

console.log("2. Removing chid node");

let parent = document.querySelector("#unorder");

let child = document.querySelector("#list");

parent.removeChild(child);