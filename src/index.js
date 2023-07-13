import _ from 'lodash';
import './test.jpg';
import './burger.jpg';
import './burger-bg.jpg'
import {Home, Menu, Contact} from './module.js';




const open_btn = document.querySelector(".burger-menu");
const overlay = document.querySelector(".menu-overlay");
const close_btn = document.querySelector(".close");
const links = document.querySelectorAll(".link");
const logo = document.querySelector(".logo");
const credit = document.querySelector(".Credit");
const credit_box = document.querySelector(".credit-box");
const credit_close = document.querySelector(".credit-close");


//Start Site wille be Home
Home();

links.forEach((item) => {

item.addEventListener("click", (e) =>{

  overlay.style.display = "none";

switch(e.target.id){

case "home":
  Home();
break;
case "menu":
  Menu();
break;
case "about":
  Contact();
break;
default:
  console.log("nothing clicked");
  break;

}


console.log(e.target.textContent);

})

})


open_btn.addEventListener("click", () =>{

  overlay.style.display = "flex";
  credit_box.style.display = "none";

});

close_btn.addEventListener("click", () =>{

  overlay.style.display = "none";

});

credit.addEventListener("click", () =>{

  credit_box.style.display = "flex";

});

credit_close.addEventListener("click", () =>{

  credit_box.style.display = "none";

});

logo.addEventListener("click", GoHome);


function GoHome (){

  Home();
}



console.log("SetUp works");