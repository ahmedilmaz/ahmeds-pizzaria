function orderPizza() {
const phoneNumber = "0501234567";

const message = document.getElementById("message");

message.innerText = "Thanks! Calling Ahmed's Pizza... 🍕";

window.location.href = "tel:" + phoneNumber;
}
