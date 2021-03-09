function result() {
    var name = document.getElementById("name").value;
    var lastname = document.getElementById("lastname").value;
    var age = document.getElementById("age").value;
    var profession = document.getElementById("profession").value;
    console.log(profession);

    if (name.length >= 5) {
        document.getElementById("result").style.color = "#32bd19";
        document.getElementById("result").style.display = "block";
    } else {
        document.getElementById("result").style.color = "#ea125c";
        document.getElementById("result").style.display = "block";
    }

    if (profession == 'it') {
        document.getElementById("result").style.backgroundColor = "#c3c2c2";
        document.getElementById("result").style.display = "block";
    } else if (profession == 'hospitality') {
        document.getElementById("result").style.backgroundColor = "#ffa5a5";
        document.getElementById("result").style.display = "block";
    } else if (profession == 'tourismus') {
        document.getElementById("result").style.backgroundColor = "#9eabda";
        document.getElementById("result").style.display = "block";
    } else {
        document.getElementById("result").style.colbackgroundColoror = "#a4da9e";
        document.getElementById("result").style.display = "block";
    }
    
    document.getElementById("result").innerHTML = 'The name is: ' + name + '<br>The lastname is: ' + lastname + '<br>The age is: ' + age + '<br>The profession is: ' + profession;
}

document.getElementById("submit").addEventListener("click", result);