const ulSelector = document.querySelector(".header_nav_container_ul");
const ulSelectorMobile = document.getElementById("mobile-menu");

const pathType = "php";

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
  { name: "KAPCSOLAT", url: "/#", id: "nav-10", class: "btn_nav" },
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
