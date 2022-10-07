let colorButton = document.querySelector(".colorBtn");
let sizeButton = document.querySelector(".sizeBtn");
let priceButton = document.querySelector(".priceBtn");
//console.log(sizeButton);

colorButton.addEventListener('click', showDropDown);

function showDropDown() {
    let colorHiddenBtn = document.getElementById("color-hide");

    let colorHideContain = colorHiddenBtn.classList.contains('hidden');

    colorHideContain ? colorHiddenBtn.classList.remove('hidden') : colorHiddenBtn.classList.add('hidden');

}


sizeButton.addEventListener('click', showDropDown1);

function showDropDown1() {

    let sizeHiddenBtn = document.getElementById("size-hide");
    //sizeHiddenBtn.classList.remove('hidden');
    let condit = sizeHiddenBtn.classList.contains('hidden');

    condit ? sizeHiddenBtn.classList.remove('hidden') : sizeHiddenBtn.classList.add('hidden');

}

priceButton.addEventListener('click', showDropDown2);

function showDropDown2() {
    let priceHiddenBtn = document.getElementById("price-hide");

    let priceHideContain = priceHiddenBtn.classList.contains('hidden');

    priceHideContain ? priceHiddenBtn.classList.remove('hidden') : priceHiddenBtn.classList.add('hidden');

}
//filtering the blue color
let cardBlue = document.querySelectorAll("div.blue");
console.log(cardBlue);

let resu = document.getElementById("show");

cardBlue.forEach(element => {

    resu.append(element);

});