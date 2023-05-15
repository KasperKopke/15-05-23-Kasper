console.log("jeg virker");

function validate() {
  let form = document.forms["formm"];
  let errorbox = document.querySelector(".error-message");
  let textField = document.querySelector("textarea");

  const errorMessages = [];

  if (form["firstname"].value == "") {
    errorMessages.push("Name is Required |");
  }

  if (form["accountmail"].value == "") {
    errorMessages.push("Mail is Requried|");
  }

  if (form["textarea"].value == "") {
    errorMessages.push("Message is Requried|");
  }
  if (textField.value.length > 250) {
    console.log("hej");
    errorMessages.push("Max words is reached!! max words is (250) |");
  }

  if (errorMessages.length != 0) {
    errorbox.classList.add("show");
    errorbox.innerText = errorMessages.toString();
    return false;
  }

  return true;
}

const contact = document.querySelector(".form-tag");
const navbar = document.querySelector("nav");
const contactwrapper = document.querySelector(".form-section-left");

contact.addEventListener("click", (data) => {
  console.log(data.target);
  if (data.target.classList.contains("form-tag")) {
    removeactive();
  }
});

function removeactive() {
  contact.classList.remove("active");
}

function formtags() {
  document.querySelector(".form-tag").classList.toggle("active");

  if (contact.classList.contains("active")) {
    console.log("jeg har aktiv");
    navbar.classList.remove("active");
  }
}
function burgerMenu() {
  document.querySelector("nav").classList.toggle("active");
}
