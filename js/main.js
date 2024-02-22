


const ulSelector = document.querySelector(".header_nav_container_ul");
const ulSelectorMobile = document.getElementById("mobile-menu");

const pathType = "html";

function navigationHandler(navigation, navigationMObile) {
  navigation.forEach((item) => {
    const liElement = document.createElement("li");
    const linkElement = document.createElement("a");
    linkElement.textContent = item.name;
    linkElement.href = item.url;
    linkElement.id = item.id;
    linkElement.className = item.class;
    liElement.appendChild(linkElement);
    ulSelector.appendChild(liElement);
  });

  navigationMObile.forEach((item) => {
    const liElement = document.createElement("li");
    const linkElement = document.createElement("a");
    linkElement.textContent = item.name;
    linkElement.href = item.url;
    linkElement.className = item.class;
    liElement.appendChild(linkElement);
    ulSelectorMobile.appendChild(liElement);
  });
}

const navigation = [
  { name: "HOME", url: "/", id: "nav-1" },
  { name: "GALÉRIA", url: `/jogafotok.${pathType}`, id: "nav-2" },
  { name: "ÓRAREND", url: `/orarend.${pathType}`, id: "nav-3" },
  {
    name: "Rólunk",
    url: `/jogaszemleletunk.${pathType}`,
    id: "nav-4",
  },
  { name: "HÁZIREND", url: `/joga-hazirend.${pathType}`, id: "nav-5" },
  { name: "ÁRLISTA", url: `/arlista.${pathType}`, id: "nav-6" },
  {
    name: "JÓGAOKTATÓ KÉPZÉS",
    url: `/jogaoktato-kepzes.${pathType}`,
    id: "nav-7",
  },
  { name: "ÓRATÍPUSOK", url: `/oratipusok.${pathType}`, id: "nav-8" },
  { name: "JÓGATÁBOR", url: `/jogatabor.${pathType}`, id: "nav-9" },
  { name: "KAPCSOLAT", url: "/#contact", id: "nav-10", class: "btn_nav" },
];

const navigationMObile = [
  { name: "HOME", url: "/", class: "" },
  {
    name: "ONLINE BEJELENTKEZÉS",
    url: "https://devayogastudio.booked4.us/public/book",
    class: "mobile-booking",
  },
  { name: "GALÉRIA", url: `/jogafotok.${pathType}`, class: "mobile-gallery" },
  { name: "ÓRAREND", url: `/orarend.${pathType}`, class: "mobile-timetable" },
  {
    name: "Rólunk",
    url: `/jogaszemleletunk.${pathType}`,
    class: "mobile-philo",
  },
  { name: "HÁZIREND", url: `/joga-hazirend.${pathType}`, class: "mobile-rule" },
  { name: "ÁRLISTA", url: `/arlista.${pathType}`, class: "mobile-prices" },
  {
    name: "JÓGAOKTATÓ KÉPZÉS",
    url: `/jogaoktato-kepzes.${pathType}`,
    class: "mobile-traning",
  },
  { name: "JÓGATÁBOR", url: `/jogatabor.${pathType}`, class: "mobile-camp" },
  { name: "ÓRATÍPUSOK", url: `/oratipusok.${pathType}`, class: "mobile-type" },
];

navigationHandler(navigation, navigationMObile);

const path = window.location.pathname;
const fullPath = window.location.pathname;
const lastSlashIndex = fullPath.lastIndexOf("/");
const pathAfterLastSlash = fullPath.substring(lastSlashIndex);

console.log(window.location.pathname);

navigation.forEach((i) => {
  if (pathAfterLastSlash === i.url) {
    document.getElementById(i.id).classList.add("btn_home");
  }
});

/*****************RENDERING THE YOGA CLASSES DYNAMICALLY *********************** */
document.addEventListener("DOMContentLoaded", function () {

  const isOratipusokPage = window.location.pathname.includes('/oratipusok');


  const oratipusok = [
    { nev: "Ashtanga", url: `../oratipusok/asthaga.${pathType}` },
    { nev: "Vinyasa flow", url: `../oratipusok/vinyasa.${pathType}` },
    { nev: "Egyéni jógaterápia", url: `../oratipusok/egyenijoga.${pathType}` },
    { nev: "KisBabás Baba-Mama jóga", url: `../oratipusok/babamamajoga.${pathType}` },
    { nev: "Hatha flow", url: `../oratipusok/hathaflow.${pathType}` },
    { nev: "Gerincterápiás jóga", url: `../oratipusok/gerincterapiasjoga.${pathType}` },
    { nev: "Yin jóga", url: `../oratipusok/yinjoga.${pathType}` },
    { nev: "Illat Eszenciás Hatha Jóga", url: `../oratipusok/illateszencias-hatha-joga.${pathType}` },
    { nev: "Kismama jóga", url: `../oratipusok/kismamajoga.${pathType}` },
    { nev: "Senior jóga", url: `../oratipusok/seniorjoga.${pathType}` },
    { nev: "Alapozó jóga", url: `../oratipusok/alapozo.${pathType}` },
    { nev: "Gyerekjóga", url: `../oratipusok/gyerekjoga.${pathType}` },
    { nev: "Meditációs hangfürdő", url: `../oratipusok/meditacios-hangfurdo.${pathType}` },
    { nev: "Női jóga hangtál medidtációval", url: `../oratipusok/noijoga-hangtalmeditacioval.${pathType}` },
    { nev: "Csakraharmonizáló hatha jóga", url: `../oratipusok/csakraharmonizalo-hathajoga.${pathType}` },

  ];

  function createAndAppendClassList(containerClass, notVisibleClass) {
    let container = document.querySelector(`.${containerClass}`);
    if (!container) {
      container = document.createElement("div");
      container.className = `${containerClass} ${notVisibleClass}`;
      document.body.appendChild(container); // Or append to a specific existing element
    }

    oratipusok.forEach(oratipus => {
      const p = document.createElement("p");
      if (oratipus.url !== "#") {
        p.setAttribute("onclick", `document.location='${oratipus.url}'`);
      }
      p.textContent = oratipus.nev;
      container.appendChild(p);
    });
  }

  // Correcting the class name to match the HTML
  if (isOratipusokPage) {
    // Only call createAndAppendClassList if on the "ÓRATÍPUSOK" page
    createAndAppendClassList("oratipusok_container_titles", "not-visible-up");
    createAndAppendClassList("reder-2-element", "not-visible-up-2");
  }


  function createAndAppendClassList(containerClass, notVisibleClass) {
    let container = document.querySelector(`.${containerClass}`);
    if (!container) {
      container = document.createElement("div");
      container.className = `${containerClass} ${notVisibleClass}`;
      document.body.appendChild(container); // Or append to a specific existing element
    }
  
    const currentUrl = window.location.pathname;
  
    oratipusok.forEach(oratipus => {
      const p = document.createElement("p");
      const url = new URL(oratipus.url, window.location.origin); // Create a full URL to compare with the current URL
      if (oratipus.url !== "#") {
        p.setAttribute("onclick", `document.location='${oratipus.url}'`);
        if (currentUrl === url.pathname) { // Check if the current page's path matches the item's path
          p.classList.add("current-page"); // Add underline style to the current page item
        }
      }
      p.textContent = oratipus.nev;
      container.appendChild(p);
    });
  }

});
























// MOBILE MENU
const hambibambi = document.querySelector(".mobile-menu-hambi");
const hambiClose = document.querySelector(".mobile-menu-hambi-close");
const mobileMenu = document.querySelector(".mobile-menu");
const contactClose = document.querySelector(".btn_nav");
const bodyOver = document.getElementById("body");

hambibambi.addEventListener("click", () => {
  if (hambibambi.style.display === "none") {
    hambibambi.style.display = "flex";
  } else {
    hambibambi.style.display = "none";
    hambiClose.style.display = "flex";
    mobileMenu.style.display = "flex";
    bodyOver.style.overflow = "hidden";
  }

  // LANGUAGE HANDLER

  if (localStorage.getItem("mobile-timetabe")) {
    document.querySelector(".mobile-timetable").innerText =
      localStorage.getItem("mobile-timetabe");
  }
  if (localStorage.getItem("mobile-gallery")) {
    document.querySelector(".mobile-gallery").innerText =
      localStorage.getItem("mobile-gallery");
  }
  if (localStorage.getItem("mobile-booking")) {
    document.querySelector(".mobile-booking").innerText =
      localStorage.getItem("mobile-booking");
  }
  if (localStorage.getItem("mobile-camp")) {
    document.querySelector(".mobile-camp").innerText =
      localStorage.getItem("mobile-camp");
  }
  if (localStorage.getItem("mobile-philo")) {
    document.querySelector(".mobile-philo").innerText =
      localStorage.getItem("mobile-philo");
  }
  if (localStorage.getItem("mobile-rule")) {
    document.querySelector(".mobile-rule").innerText =
      localStorage.getItem("mobile-rule");
  }
  if (localStorage.getItem("mobile-prices")) {
    document.querySelector(".mobile-prices").innerText =
      localStorage.getItem("mobile-prices");
  }
  if (localStorage.getItem("mobile-traning")) {
    document.querySelector(".mobile-traning").innerText =
      localStorage.getItem("mobile-traning");
  }
  if (localStorage.getItem("mobile-types")) {
    document.querySelector(".mobile-type").innerText =
      localStorage.getItem("mobile-types");
  }
});

hambiClose.addEventListener("click", () => {
  if (hambiClose.style.display === "flex") {
    hambiClose.style.display = "none";
    hambibambi.style.display = "flex";
    mobileMenu.style.display = "none";
    bodyOver.style.overflow = "visible";
    bodyOver.style.overflowX = "hidden";
  }
});

contactClose.addEventListener("click", () => {
  if (hambiClose.style.display === "flex") {
    hambiClose.style.display = "none";
    hambibambi.style.display = "flex";
    mobileMenu.style.display = "none";
  }
});

// SCROLL TO TOP
document.addEventListener("scroll", handleScroll);
// get a reference to our predefined button
const scrollToTopBtn = document.querySelector(".scrollToTopBtn");

function handleScroll() {
  const scrollableHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const GOLDEN_RATIO = 0.1;

  if (document.documentElement.scrollTop / scrollableHeight > GOLDEN_RATIO) {
    //show button
    scrollToTopBtn.style.display = "block";
  } else {
    //hide button
    scrollToTopBtn.style.display = "none";
  }
}
scrollToTopBtn.addEventListener("click", scrollToTop);
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

window.removeFakeCaptcha = function () {
  document.querySelector(".captcha-fake-field").remove();
};


if (
  document.URL === "https://devayoga.hu/" ||
  document.URL === "https://devayoga.hu/index.php" ||
  document.URL === "http://127.0.0.1:5501/" ||
  document.URL === "http://127.0.0.1:5501/index.html"
) {
  const sr = ScrollReveal({
    origin: "top",
    distance: "10px",
    duration: 3000,
    delay: 150,
    //reset: true
  });

  sr.reveal(`.studio_container_textBox`, { distance: "40px" });
  sr.reveal(`.oktatok_container-grid`, {
    distance: "150px",
    origin: "center",
    distance: "0px",
  });
  sr.reveal(`.contact_container_detailes`, {
    distance: "240px",
    origin: "left",
    duration: 2000,
    delay: 450,
  });
}

//Lazy loading image from css
document.addEventListener("DOMContentLoaded", function () {
  var lazyBackgrounds = [].slice.call(
    document.querySelectorAll(".studio_container_photo"),
  );

  if ("IntersectionObserver" in window) {
    let lazyBackgroundObserver = new IntersectionObserver(function (
      entries,
      observer,
    ) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          lazyBackgroundObserver.unobserve(entry.target);
        }
      });
    });

    lazyBackgrounds.forEach(function (lazyBackground) {
      lazyBackgroundObserver.observe(lazyBackground);
    });
  }
});
