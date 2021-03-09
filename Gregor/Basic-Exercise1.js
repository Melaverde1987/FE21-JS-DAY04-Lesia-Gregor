function extract() {
  var fname = document.getElementById("firstname").value;
  var lname = document.getElementById("lastname").value;
  var userAge = document.getElementById("age").value;

  if ((fname.length || lname.length) > 5) {
    document.getElementById("output").innerHTML.style.color = "hlkhlkh";
  }
}
