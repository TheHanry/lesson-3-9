"use strict";
let $elForm = document.getElementById("form");
let $elBox = document.getElementById("box");

let $elUserName = document.getElementById("userName");
let $elUserSecondName = document.getElementById("userSecondName");
let $elUserEmail = document.getElementById("userEmail");
let $elUserPhNum = document.getElementById("userPhNum");
let $elUserCountry = document.getElementById("userCountry");
let $elUserCity = document.getElementById("userCity");
let $elUserPassword = document.getElementById("userPassword");
let $elUserConfPass = document.getElementById("userConfPass");

$elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  let name = $elUserName.value.trim();
  let secondName = $elUserSecondName.value.trim();
  let email = $elUserEmail.value.trim();
  let phNum = $elUserPhNum.value.trim();
  let country = $elUserCountry.value.trim();
  let city = $elUserCity.value.trim();
  let password = $elUserPassword.value.trim();
  let confPassword = $elUserConfPass.value.trim();

  if (password !== confPassword) {
    alert("Make shure that both passwords are same!");
    $elUserPassword.value = null;
    $elUserConfPass.value = null;
  }

  $elBox.innerHTML += `
    <li class="item">
        <p>User first name: ${name}</p>
        <p>User second name: ${secondName}</p>
        <p>User email: ${email}</p>
        <p>User phone number: ${phNum}</p>
        <p>User country: ${country}</p>
        <p>User city: ${city}</p>
        <p>User password: ${password}</p>
    </li>
    `;
  $elUserName.value = null;
  $elUserSecondName.value = null;
  $elUserEmail.value = null;
  $elUserPhNum.value = null;
  $elUserCountry.value = null;
  $elUserCity.value = null;
  $elUserPassword.value = null;
  $elUserConfPass.value = null;
});

function myFunction(){
  let element = document.body;
  element.classList.toggle("dark-mode");
}