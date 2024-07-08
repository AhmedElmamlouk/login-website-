// Check how many letters the user have input
function checkName() {
  const fullName = document.getElementById("fullName").value.trim();

  if (fullName.length < 5) {
    document.getElementById("fullNamAlert").innerText =
      "Full Name must be 5 letters at least";
  } else {
    document.getElementById("fullNamAlert").innerText = "";
  }
}
function addressCheck() {
  const address = document.getElementById("address").value.trim();
  console.log("www");

  if (address.length < 10) {
    document.getElementById("addressAlert").innerText =
      "Adress must be 10 letters at least";
  } else {
    document.getElementById("addressAlert").innerText = "";
  }
}
