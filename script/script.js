const showCurrentDay = document.getElementById("showCurrentDay");
const picture = document.createElement("img");
picture.src = "assets/img/AllDays.jpg";
picture.alt = "days of the week";
showCurrentDay.append(picture);

const week = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
];

let currentDay = 2;

const notificationContainer = document.getElementById("notificationContainer");
setTimeout(() => {
  picture.style.display = "none";
  notificationContainer.style.display = "flex";
}, 2000);

const closeNotification = document.getElementById("closeNotification");
closeNotification.addEventListener("click", () => {
  notificationContainer.style.display = "none";
  picture.style.display = "block";
  // if (checkbox_id.checked) {
  //   localStorage.setItem("disableTips", "hidden");
  // }
});

const enter = document.getElementById("notificationContainerEnter");
enter.addEventListener("click", () => {
  picture.src = `assets/img/${week[currentDay]}.jpg`;
  notificationContainer.style.display = "none";
  picture.style.display = "block";
});

const dots = document.getElementsByClassName("notification-container__dots");
const nameDay = document.getElementById("nameDay");

const showDay = n => {
  currentDay = n;

  if (n > week.length - 1) {
    currentDay = 0;
  }
  if (n < 0) {
    currentDay = week.length - 1;
  }
  nameDay.innerHTML = week[currentDay];

  for (var i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  dots[currentDay].classList.add("active");
};

const quickNavigation = document.getElementById("quickNavigation");

const setActiveDots = e => {
  for (let i = 0; i < quickNavigation.children.length; i++) {
    if (quickNavigation.children[i] === e.target) {
      for (let i = 0; i < quickNavigation.children.length; i++) {
        quickNavigation.children[i].classList.remove("active");
      }
      e.target.classList.add("active");
    }
  }
};

quickNavigation.addEventListener("click", e => {
  setActiveDots(e);
});

const getNextDay = n => {
  showDay((currentDay += n));
};

const defineCurrentDay = n => {
  showDay((currentDay = n));
};

showDay(currentDay);

const checkKeyPress = key => {
  if (key.keyCode == "37") {
    getNextDay(-1);
  }

  if (key.keyCode == "39") {
    getNextDay(+1);
  }

  if (event.code == "Escape") {
    notificationContainer.style.display = "none";
  }
};

// const notificationContainer = document.getElementById("notificationContainer");

window.document.addEventListener("keydown", key => {
  if (notificationContainer.style.display === "flex") {
    checkKeyPress(key);
  }
});

// console.log(showCurrentDay);
// console.log(picture);

// window.onload = function() {
//   const notificationClosed = document.getElementById("notification_container");
//   const checkbox_id = document.getElementById("checkbox_id");
//   const nav_dots = document.getElementById("navdots");
//   const message = document.getElementById("tip");

//   // const disableTips = localStorage.getItem("disableTips");

//   // if (!disableTips) {
//   //   notificationClosed.style.display = "none";
//   // } else {
//   notificationClosed.style.display = "none";
//   setTimeout(function() {
//     notificationClosed.style.display = "block";
//   }, 2000);
//   // }

//   const closeButton = document.getElementById("closeButton");
//   closeButton.addEventListener("click", function(e) {
//     e.preventDefault();
//     notificationClosed.style.display = "none";
//     if (checkbox_id.checked) {
//       localStorage.setItem("disableTips", "hidden");
//     }
//   });
// };

// const notificationClosed = document.getElementById("notification_container");

// const dayTips = ["one", "two", "three", "four", "five", "six", "seven"];

// var slideIndex = 3;

// showContent(slideIndex);

// function plusIndex(n) {
//   showContent((slideIndex += n));
// }

// function currentSlide(n) {
//   showContent((slideIndex = n));
// }

// function showContent(n) {
//   var dots = document.getElementsByClassName("dots");

//   if (n > dayTips.length) {
//     slideIndex = 1;
//   }
//   if (n < 1) {
//     slideIndex = dayTips.length;
//   }
//   document.getElementById("tip").innerHTML = dayTips[slideIndex - 1];

//   for (var i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
// }

// window.document.addEventListener("keydown", checkKeyPress);

// function checkKeyPress(key) {
//   if (key.keyCode == "37") {
//     plusIndex(-1);
//   }

//   if (key.keyCode == "39") {
//     plusIndex(+1);
//   }

//   if (event.code == "Escape") {
//     notificationClosed.style.display = "none";
//   }
// }

// var d=document.createElement('div');
// d.style.width='400px';
// d.style.height='200px';
// d.style.background='yellow';
// d.className='element';
// document.body.appendChild(d);
// };
//  document.getElementById('notification_container').hidden= 1;
// setTimeout (element, 5000)
