// to work on javascript without using html and css

let button = document.createElement("button");
let input = document.createElement("input");
button.innerText = "click me";

document.querySelector("body").append(input);
document.querySelector("body").append(button);

// ans 2 

button.setAttribute("id", "btn");
input.setAttribute("placeholder", "username");


//ans 3 

let btn = document.querySelector("#btn");
btn.classList.add("btnStyle");


// ans 4 
let h1 = document.createElement("h1");
h1.innerHTML = "<u> DOM practise </u>";
document.querySelector("body").append(h1);

// ans 5 
let p = document.createElement("p");
p.innerHTML ="APN COLLANGE<b> delta </b> practise ";

document.querySelector("body").append(p);

