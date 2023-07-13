const main = document.querySelector(".content-section");


















export function Home () {

main.innerHTML = "";


let deal = document.createElement("div");
deal.classList.add("deal-section");
main.appendChild(deal);

let content = document.createElement("div");
content.classList.add("content");
deal.appendChild(content);

let h1 = document.createElement("h1");
h1.textContent = "Deal of the Day";
content.appendChild(h1);

let h3 = document.createElement("h3");
h3.textContent = "Our selfmade Burger with 2 Pattys and grilled cheese";
content.appendChild(h3);

let price = document.createElement("div");
price.textContent = "$10.99";
price.classList.add("price")
content.appendChild(price);




  console.log("module1");

}










export function Menu () {
  main.innerHTML = "";

  let menu = document.createElement("div");
menu.classList.add("menu-section");
main.appendChild(menu);

let menu_h = document.createElement("div");
menu_h.classList.add("menu-header");
menu.appendChild(menu_h);

let h1 = document.createElement("h1");
h1.textContent = "Our Menu";
menu_h.appendChild(h1);



let menu_grid = document.createElement("div");
menu_grid.classList.add("menu-grid")
menu.appendChild(menu_grid);

for(let i = 0; i < 9; i++){

  let item = document.createElement("div");
  item.classList.add("menu-item")
  menu_grid.appendChild(item);
  
  let left = document.createElement("div");
  left.classList.add("left")
  item.appendChild(left);

  let img = document.createElement("img");
  img.src = "./b28f88b12843ef40375353201f71062a.jpg";
  left.appendChild(img);


  let right = document.createElement("div");
  right.classList.add("right")
  item.appendChild(right);

  let h3 = document.createElement("h3");
  h3.textContent = "Hamburger";
  right.appendChild(h3);

let p1 = document.createElement("p");
p1.textContent = "Juicy Meet, nice Cabbage, Meat of best Quality, very nice!";
right.appendChild(p1);
 
let p2 = document.createElement("p");
p2.textContent = "$7.99";
right.appendChild(p2);

}

}














  







export function Contact () {
  main.innerHTML = "";

  
  let contact = document.createElement("div");
  contact.classList.add("contact-section");
main.appendChild(contact);

let flex_header = document.createElement("div");
flex_header.classList.add("flex-header");
contact.appendChild(flex_header);

let h1 = document.createElement("h1");
h1.textContent = "Contact Us";
flex_header.appendChild(h1);

let form = document.createElement("form");
form.classList.add("form");
contact.appendChild(form);


let from_wrapper = document.createElement("div");
from_wrapper.classList.add("from-wrapper")
form.appendChild(from_wrapper);


let input_section = document.createElement("div");
input_section.classList.add("input-section")
from_wrapper.appendChild(input_section);

let up1 = document.createElement("div");
up1.classList.add("up")
input_section.appendChild(up1);

let label1 = document.createElement("label");
label1.textContent = "Name";
label1.for = "name";
up1.appendChild(label1);

let input1 = document.createElement("input");
input1.type = "text";
input1.id = "name";
input1.name = "yourname";
up1.appendChild(input1);

let up2 = document.createElement("div");
up2.classList.add("up")
input_section.appendChild(up2);

let label2 = document.createElement("label");
label2.textContent = "Comment";
label2.for = "text";
up2.appendChild(label2);

let txtarea = document.createElement("textarea");
txtarea.id = "text";
up2.appendChild(txtarea);


let btn_section = document.createElement("div");
btn_section.classList.add("btn-section")
from_wrapper.appendChild(btn_section);

let btn = document.createElement("button");
btn.type = "submit";
btn.textContent = "Submit";
btn_section.appendChild(btn);

  console.log("module3");
}
