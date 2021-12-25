function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  document.getElementById("defaultOpen");

  function hamburger_to_x() {
    document.querySelector(".menu").style.display = "block";
  }
  
  function x_to_hamburger() {
    document.querySelector(".menu").style.display = "none";
  }
  
  function dropdown_on() {
    document.querySelector(".electronic_parts").style.display = "block";
  }
  
  function dropdown_off() {
    document.querySelector(".electronic_parts").style.display = "none";
  }
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
  