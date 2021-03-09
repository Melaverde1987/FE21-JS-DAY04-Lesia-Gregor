function result() {
    var name = document.getElementById("name").value;
    var lastname = document.getElementById("lastname").value;
    var age = document.getElementById("age").value;

    if (name.length >= 5) {
        document.getElementById("result").style.color = "#32bd19";
    } else {
        document.getElementById("result").style.color = "#ea125c";
    }
    
    document.getElementById("result").innerHTML = name + '<br>' + lastname + '<br>' + age;
}

document.getElementById("btn").addEventListener("click", result);