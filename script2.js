function removeItem() {
    this.style.opacity = "0";
    this.style.transition = "1s";
    setTimeout(() => { this.remove(); }, 1000);
}

function startClicking() {
    var items = document.getElementsByClassName("santa");
    //console.log(items);
    for (let i = 0; i < items.length; i++) {
        items[i].addEventListener('click', removeItem, false);
    }
}

startClicking();


/*
var items = document.getElementsByClassName("santa");
console.log(items)
for ( let i in items ){
    items[i].addEventListener("click", removeItem, false);
}
*/


function changeColor() {
var red = Math.floor(Math.random() * 256);
var green = Math.floor(Math.random() * 256);
var blue = Math.floor(Math.random() * 256);

color = 'rgb(' + red + ',' + green + ',' + blue + ')';
document.getElementById('colorbox').style.backgroundColor = color;
}

document.getElementById("colorbox").addEventListener("click", function() {
changeColor();
} );
