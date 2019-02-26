///////////////EXO 1//////////////////

let footer = document.getElementsByTagName('footer');
let x = 1;

footer[0].addEventListener("click", function () {
    console.log(`clique n° ${x}`);
    ++x;
})

///////////////EXO 2//////////////////

let navBar = document.getElementById("navbarHeader")
let navBarBtn = document.getElementsByClassName("navbar-toggler")

navBarBtn[0].addEventListener("click", function () {
    navBar.classList.toggle("collapse");

})

///////////////EXO 3//////////////////
let cardText = document.getElementsByClassName("card-text")
let editBtn = document.getElementsByClassName("btn-outline-secondary")

console.log(cardText)
console.log(editBtn)

editBtn[0].addEventListener("click", function () {
    cardText[0].style.color = "red"
})

//EXO 4

let secondCardTextColor = cardText[1].style

editBtn[1].addEventListener("click", function () {
    secondCardTextColor.color === "green" ? secondCardTextColor.color = '' : secondCardTextColor.color = 'green'
})


///////////////EXO 4//////////////////