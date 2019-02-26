///////////////EXO 1//////////////////

let footer = document.getElementsByTagName('footer');
let x = 1;

footer[0].addEventListener("click", function () {
    console.log(`clique n° ${x}`);
    ++x;
})

///////////////EXO 2//////////////////
let navBar = document.getElementById("navbarHeader")
let button = document.getElementsByClassName("navbar-toggler")

console.log(navBar)
console.log(button)

button[0].addEventListener("click", function () {
    navBar.classList.toggle("collapse");

})

//hamburger[0].elementDuDOM.collapse.toggle("nomDeLaClasse")