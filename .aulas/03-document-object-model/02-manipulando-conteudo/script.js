const allGuestsCount = document.querySelectorAll(".guest");
console.log(allGuestsCount.length);

const spanGuest1 = document.querySelector("#guest-1 span");
console.log(spanGuest1.innerHTML);

spanGuest1.innerText = "Victor Martins";
console.log(spanGuest1);

const secondGuest = document.querySelector("#guest-2");
console.log(secondGuest.textContent);
console.log(secondGuest.innerText);

const guest3 = document.querySelector("#guest-3");
guest3.innerHTML = "José <strong>V</strong>";
console.log(guest3.innerHTML);
