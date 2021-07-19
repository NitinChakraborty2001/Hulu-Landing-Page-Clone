const modal = document.querySelector(".modal");
const loginButton = document.querySelector(".login-btn");
const closeButton = document.querySelector(".close");

loginButton.addEventListener("click", openModal);
closeButton.addEventListener("click", closeModal);
window.addEventListener("click", outsideClick);

function openModal() {
	modal.style.display = "block";
}

function closeModal() {
	modal.style.display = "none";
}

function outsideClick(event) {
	if (event.target == modal) {
		closeModal();
	}
}
