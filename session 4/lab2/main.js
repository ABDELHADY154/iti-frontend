function operation() {
  let operations = window.prompt("please enter an operation (add,search)");
}
function addContact() {
  let name = window.prompt("please enter the full name");
  let number = parseFloat(window.prompt("please enter the phone number"));
  let contact = { fullName: name, phoneNumber: number };
  contacts.push(contact);
  console.log(contacts);
  let div = document.getElementById("demo");
  let li = document.createElement("li");
  div.appendChild(li);
  contacts.forEach(element => {
    li.innerHTML =
      "<a> Name: " +
      element.fullName +
      " | Phone: " +
      element.phoneNumber +
      "</a>";
  });
}

function searchContact() {
  let search = window.prompt("search for?");
}

let contacts = [];
let operations = window.prompt("please enter an operation (add,search)");
if (operations == "add") {
  addContact();
} else if (operations == "search") {
  searchContact();
}
