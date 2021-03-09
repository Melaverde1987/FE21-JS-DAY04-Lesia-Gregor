function removeItem() {
    this.style.opacity = "0";
    this.style.transition = "1s";
    setTimeout(() => { this.remove(); }, 1000);
}

function startClicking() {
    var items = document.getElementsByClassName("santa");
    for (let i = 0; i < items.length; i++) {
        items[i].addEventListener('click', removeItem, false);
    }
}

document.getElementById("box").addEventListener("click", startClicking);

/*
for (var i = 0; i < comment.length; i++) {
    comment[i].addEventListener('click', showComment, false);
}
*/