window.onload = function() {
  const notificationClosed = document.getElementById("notification_container");
  const checkbox_id = document.getElementById("checkbox_id");
  const nav_dots = document.getElementById("navdots");
  const message = document.getElementById("tip");

  // const disableTips = localStorage.getItem("disableTips");

  // if (!disableTips) {
  //   notificationClosed.style.display = "none";
  // } else {
  notificationClosed.style.display = "none";
  setTimeout(function() {
    notificationClosed.style.display = "block";
  }, 2000);
  // }

  const closeButton = document.getElementById("closeButton");
  closeButton.addEventListener("click", function(e) {
    e.preventDefault();
    notificationClosed.style.display = "none";
    if (checkbox_id.checked) {
      localStorage.setItem("disableTips", "hidden");
    }
  });
};

const notificationClosed = document.getElementById("notification_container");

const dayTips = ["one", "two", "three", "four", "five", "six", "seven"];

var slideIndex = 3;

showContent(slideIndex);

function plusIndex(n) {
  showContent((slideIndex += n));
}

function currentSlide(n) {
  showContent((slideIndex = n));
}

function showContent(n) {
  var dots = document.getElementsByClassName("dots");

  if (n > dayTips.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = dayTips.length;
  }
  document.getElementById("tip").innerHTML = dayTips[slideIndex - 1];

  for (var i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
}

window.document.addEventListener("keydown", checkKeyPress);

function checkKeyPress(key) {
  if (key.keyCode == "37") {
    plusIndex(-1);
  }

  if (key.keyCode == "39") {
    plusIndex(+1);
  }

  if (event.code == "Escape") {
    notificationClosed.style.display = "none";
  }
}

// var d=document.createElement('div');
// d.style.width='400px';
// d.style.height='200px';
// d.style.background='yellow';
// d.className='element';
// document.body.appendChild(d);
// };
//  document.getElementById('notification_container').hidden= 1;
// setTimeout (element, 5000)
