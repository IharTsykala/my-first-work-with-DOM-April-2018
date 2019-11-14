const showCurrentDay = document.getElementById("showCurrentDay");
const bigPicture = document.createElement("img");
bigPicture.src = "assets/img/AllDays.jpg";
bigPicture.alt = "days of the week";
showCurrentDay.append(bigPicture);
const smallPicture = document.querySelector("#imgSlides");

const notificationContainer = document.getElementById("notificationContainer");
const mainDescription = document.getElementById("mainDescription");
const closeNotification = document.getElementById("closeNotification");
const enter = document.getElementById("notificationContainerEnter");
const dots = document.getElementsByClassName("notification-container__dots");
const nameDay = document.getElementById("nameDay");
const quickNavigation = document.getElementById("quickNavigation");
const checkbox_id = document.getElementById("checkbox_id");

const week = [
  { day: "Monday", url: "assets/img/Monday.jpg" },
  { day: "Tuesday", url: "assets/img/Tuesday.jpg" },
  { day: "Wednesday", url: "assets/img/Wednesday.jpg" },
  { day: "Thursday", url: " assets/img/Thursday.jpg" },
  { day: "Friday", url: "assets/img/Friday.jpg" },
  { day: "Saturday", url: "assets/img/Saturday.jpg" },
  { day: "Sunday", url: "assets/img/Sunday.jpg" }
];

let currentDay = 2;

if (localStorage.currentDay) {
  currentDay = +localStorage.currentDay;
}

setTimeout(() => {
  bigPicture.style.display = "none";
  notificationContainer.style.display = "flex";

  checkbox_id.addEventListener("click", () => {
    if (checkbox_id.checked) {
      localStorage.setItem("currentDay", currentDay);
    }
  });

  const close = flag => {
    if (!flag) {
      bigPicture.src = `${week[currentDay].url}`;
    }
    notificationContainer.style.display = "none";
    bigPicture.style.display = "block";
    mainDescription.children[0].style.display = "none";
    mainDescription.children[1].style.display = "flex";
    if (localStorage.length) {
      windowStorage = localStorage.getItem("window");
    }
    if (checkbox_id.checked) {
      localStorage.setItem("currentDay", currentDay);
    } else {
      localStorage.clear();
    }
  };

  closeNotification.addEventListener("click", () => {
    close(true);
  });

  enter.addEventListener("click", () => {
    close();
  });

  smallPicture.addEventListener("click", () => {
    close();
  });

  const showDay = n => {
    if (checkbox_id.checked) {
      localStorage.setItem("currentDay", currentDay);
    } else {
      localStorage.clear();
    }

    if (n) {
      currentDay = n;
    }

    if (currentDay > week.length - 1) {
      currentDay = 0;
    }
    if (currentDay < 0) {
      currentDay = week.length - 1;
    }
    nameDay.innerHTML = `${week[currentDay].day}`;
    smallPicture.src = `${week[currentDay].url}`;
    smallPicture.alt = `${week[currentDay].day}`;

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
    bigPicture.style.display = "none";
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
      showNotification();
    }
  });

  bigPicture.addEventListener("click", () => {
    showNotification();
  });
}, 2000);
