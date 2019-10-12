const showCurrentDay = document.getElementById("showCurrentDay");
const picture = document.createElement("img");
picture.src = "assets/img/AllDays.jpg";
picture.alt = "days of the week";
showCurrentDay.append(picture);

const notificationContainer = document.getElementById("notificationContainer");
const mainDescription = document.getElementById("mainDescription");
const closeNotification = document.getElementById("closeNotification");
const enter = document.getElementById("notificationContainerEnter");
const dots = document.getElementsByClassName("notification-container__dots");
const nameDay = document.getElementById("nameDay");
const quickNavigation = document.getElementById("quickNavigation");

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

setTimeout(() => {
  picture.style.display = "none";
  notificationContainer.style.display = "flex";

  const close = flag => {
    if (!flag) {
      picture.src = `assets/img/${week[currentDay]}.jpg`;
    }
    notificationContainer.style.display = "none";
    picture.style.display = "block";
    mainDescription.children[0].style.display = "none";
    mainDescription.children[1].style.display = "flex";
    // const disableTips = localStorage.getItem("disableTips");
    // if (checkbox_id.checked) {
    //   localStorage.setItem("disableTips", "hidden");
    // }
  };

  closeNotification.addEventListener("click", () => {
    close(true);
  });

  enter.addEventListener("click", () => {
    close();
  });

  const showDay = n => {
    if (n) {
      currentDay = n;
    }

    if (currentDay > week.length - 1) {
      currentDay = 0;
    }
    if (currentDay < 0) {
      currentDay = week.length - 1;
    }
    nameDay.innerHTML = week[currentDay];

    for (var i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    dots[currentDay].classList.add("active");
  };

  showDay(currentDay);

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

  const prev = document.getElementById("prev");
  const next = document.getElementById("next");

  prev.addEventListener("click", () => {
    getNextDay(-1);
  });

  next.addEventListener("click", () => {
    getNextDay(1);
  });

  const defineCurrentDay = n => {
    showDay((currentDay = n));
  };

  quickNavigation.addEventListener("click", e => {
    for (let i = 0; i < quickNavigation.children.length; i++) {
      if (quickNavigation.children[i] === e.target) {
        defineCurrentDay(i);
      }
    }
  });

  const showNotification = () => {
    notificationContainer.style.display = "flex";
    picture.style.display = "none";
    mainDescription.children[0].style.display = "block";
    mainDescription.children[1].style.display = "none";
  };

  const checkKeyPress = () => {
    if (event.code === "ArrowLeft") {
      getNextDay(-1);
    }

    if (event.code === "ArrowRight") {
      getNextDay(+1);
    }

    if (event.code === "Escape") {
      close(true);
    }

    if (event.code === "Enter") {
      close();
    }
  };

  window.document.addEventListener("keydown", () => {
    if (notificationContainer.style.display === "flex") {
      checkKeyPress();
    } else {
      console.log("1");
      showNotification();
    }
  });

  picture.addEventListener("click", () => {
    showNotification();
  });
}, 2000);
