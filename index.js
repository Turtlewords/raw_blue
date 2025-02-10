const submitBtn = document.getElementById("submit-btn");
const fName = document.getElementById("first-name");
const lName = document.getElementById("last-name");
const email = document.getElementById('email');
const subject = document.getElementById('subject');
const message = document.getElementById('message');
const record = document.getElementById('recording');
const mix = document.getElementById('mixing');
const master = document.getElementById('mastering');
const genre = document.getElementById('genre');
const form = document.getElementById("form");

window.addEventListener("load", () => {
    fName.value = "";
    lName.value = "";
    email.value = "";
    subject.value = "";
    message.value = "";
    record.checked = false;
    mix.checked = false;
    master.checked = false;
    genre.selectedIndex = 0;

})