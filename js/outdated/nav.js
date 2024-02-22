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
    name: "JÓGASZEMLÉLETÜNK",
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
    name: "JÓGASZEMLÉLETÜNK",
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

  const oratipusok = [
    { nev: "Ashtanga", url: `../oratipusok/asthaga.${pathType}` },
    { nev: "Vinyasa flow", url: `../oratipusok/vinyasa.${pathType}` },
    { nev: "Egyéni jóga", url: `../oratipusok/egyenijoga.${pathType}` },
    { nev: "KisBabás Baba-Mama jóga", url: `../oratipusok/babamamajoga.${pathType}` },
    { nev: "Hatha flow", url: `../oratipusok/hathaflow.${pathType}` },
    { nev: "Gerincterápiás jóga", url: `../oratipusok/gerincterapiasjoga.${pathType}` },
    { nev: "Yin jóga", url: `../oratipusok/yinjoga.${pathType}` },
    { nev: "Illat Eszenciás Hatha Jóga", url: `../oratipusok/illateszencias-hatha-joga.${pathType}` },
    { nev: "Kismama jóga", url: `../oratipusok/kismamajoga.${pathType}` },
    { nev: "Senior jóga", url: `../oratipusok/seniorjoga.${pathType}` },
    { nev: "Alapozó jóga", url: `../oratipusok/alapozo.${pathType}` },
    { nev: "Gyerekjóga", url: `../oratipusok/gyerekjoga.${pathType}` },
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
  createAndAppendClassList("oratipusok_container_titles", "not-visible-up");
  createAndAppendClassList("reder-2-element", "not-visible-up-2"); // Corrected class name here


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

