let colorButton = document.querySelector(".colorBtn");
let sizeButton = document.querySelector(".sizeBtn");
let priceButton = document.querySelector(".priceBtn");
//console.log(priceButton);
let displayCards = document.querySelector(".displayCard");
let childItems = displayCards.children;
//console.log(childItems);

//1...addEventListener for color Button
colorButton.addEventListener('click', showDropDown);

function showDropDown() {
    let colorHiddenBtn = document.getElementById("color-hide");

    let colorHideContain = colorHiddenBtn.classList.contains('hidden');

    colorHideContain ? colorHiddenBtn.classList.remove('hidden') : colorHiddenBtn.classList.add('hidden');
}


//2..addEventListener for size Button
sizeButton.addEventListener('click', showDropDown1);

function showDropDown1() {

    let sizeHiddenBtn = document.getElementById("size-hide");
    //sizeHiddenBtn.classList.remove('hidden');
    let sizeHidecontain = sizeHiddenBtn.classList.contains('hidden');

    sizeHidecontain ? sizeHiddenBtn.classList.remove('hidden') : sizeHiddenBtn.classList.add('hidden');

}

//3..addEventListener for price Button
priceButton.addEventListener('click', showDropDown2);

function showDropDown2() {
    let priceHiddenBtn = document.getElementById("price-hide");

    let priceHideContain = priceHiddenBtn.classList.contains('hidden');

    priceHideContain ? priceHiddenBtn.classList.remove('hidden') : priceHiddenBtn.classList.add('hidden');

}

//get all the item details.
let selectedName = document.querySelectorAll('.py-1');
//console.log(selectedName);


//get the selected item in the top of the input box .
selectedName.forEach((element) => {
    element.addEventListener('click', findItem);

    function findItem(event) {
        let clickedItem = event.target.innerHTML;

        if (event.target.classList.contains('color')) {
            colorButton.innerHTML = clickedItem;
            showDropDown();

        } else if (event.target.classList.contains('size')) {
            sizeButton.innerHTML = clickedItem;
            showDropDown1();

        } else if (event.target.classList.contains('price')) {
            priceButton.innerHTML = clickedItem;
            showDropDown2();
        }
        return (console.log(clickedItem));
    }

});


//search button
function showResult() {

    //get the value of the input box from innerHTML
    let color = colorButton.innerHTML;
    let size = sizeButton.innerHTML;
    let price = priceButton.innerHTML;
    price = price.replace('$ ', 'price-');
    //console.log(price);

    for (item of childItems) {
        //if (item.classList.contains(price)) {
        console.log(item.classList);
        if (item.classList.contains(color) && item.classList.contains(size) && item.classList.contains(price)) {

            if (item.classList.contains('hidden')) {
                item.classList.remove('hidden');
            }
        } else {
            item.classList.add('hidden');

        }
    }
}

//reset input box--and show all the items
function restInput() {
    colorButton.innerHTML = "Color";
    sizeButton.innerHTML = "Size";
    priceButton.innerHTML = "Price";


    for (item of childItems) {
        if (item.classList.contains('hidden')) {
            item.classList.remove('hidden');
        }
    }

}