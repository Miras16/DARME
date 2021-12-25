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

// function load() {
// 	$(".content_2").animate({opacity: "0", left: "+=100px"}, "slow");
// 	$(".content_2").animate({opacity: "1", left: "+=100px"}, "slow");
// }

// DESING

function contact_1_animate_on() {
	document.querySelector("#contact_1_hr").style.height = "100px";
}

function contact_1_animate_off() {
	document.querySelector("#contact_1_hr").style.height = "1px";
}

function contact_2_animate_on() {
	document.querySelector("#contact_2_hr").style.height = "100px";
}

function contact_2_animate_off() {
	document.querySelector("#contact_2_hr").style.height = "1px";
}

function contact_3_animate_on() {
	document.querySelector("#contact_3_hr").style.height = "100px";
}

function contact_3_animate_off() {
	document.querySelector("#contact_3_hr").style.height = "1px";
}

function contact_4_animate_on() {
	document.querySelector("#contact_4_hr").style.height = "100px";
}

function contact_4_animate_off() {
	document.querySelector("#contact_4_hr").style.height = "1px";
}

function hamburger_to_x() {
	document.querySelector(".menu").style.display = "block";
}

function x_to_hamburger() {
	document.querySelector(".menu").style.display = "none";
}

// function popup_close_menu() {
// 	document.querySelector(".menu").style.display = "none";
// }

function dropdown_on() {
	document.querySelector(".electronic_parts").style.display = "block";
}

function dropdown_off() {
	document.querySelector(".electronic_parts").style.display = "none";
}