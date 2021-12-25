function popup() {
	document.querySelector(".popup").style.display = "flex";
	$(".popup").animate({opacity: "1"}, "slow");
	document.querySelector("body").style.overflow = "hidden";
}

function close_popup() {
	document.querySelector(".popup").style.display = "none";
	$(".popup").animate({opacity: "0"}, "slow");
	document.querySelector("body").style.overflow = "scroll";
	document.getElementById("username").value = "";
	document.getElementById("password").value = "";
}

function login(name) {
	document.querySelector(".user_profile").style.display = "inline";
	document.getElementById("username_profile").innerHTML = name;
	document.querySelector("#registration_1").style.display = "none";
	document.querySelector("#registration_2").style.display = "flex";
	document.getElementById("username").value = "";
	document.getElementById("password").value = "";
	close_popup();
}

function logout() {
	document.querySelector(".user_profile").style.display = "none";
	document.querySelector("#registration_1").style.display = "flex";
	document.querySelector("#registration_2").style.display = "none";
}

function hamburger_to_x() {
	document.querySelector(".menu").style.display = "block";
}

function x_to_hamburger() {
	document.querySelector(".menu").style.display = "none";
}

function showAlert() {
	alert("Your message is send." + '\n' + "Thanks for your feedback!");
}

function loadThePage() {
}

function dropdown_on() {
	document.querySelector(".electronic_parts").style.display = "block";
}

function dropdown_off() {
	document.querySelector(".electronic_parts").style.display = "none";
}