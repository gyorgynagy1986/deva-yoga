document.addEventListener("DOMContentLoaded", function () {
  var e = [].slice.call(document.querySelectorAll(".studio_container_photo"));
  if ("IntersectionObserver" in window) {
    let l = new IntersectionObserver(function (e, o) {
      e.forEach(function (e) {
        e.isIntersecting &&
          (e.target.classList.add("visible"), l.unobserve(e.target));
      });
    });
    e.forEach(function (e) {
      l.observe(e);
    });
  }
}),
  (hambibambi = document.querySelector(".mobile-menu-hambi")),
  (hambiClose = document.querySelector(".mobile-menu-hambi-close")),
  (mobileMenuOpen = document.querySelector(".mobile-menu")),
  hambibambi.addEventListener("click", () => {
    "none" === hambibambi.style.display
      ? (hambibambi.style.display = "block")
      : ((hambibambi.style.display = "none"),
        (hambiClose.style.display = "block"),
        (mobileMenuOpen.style.display = "flex"));
  }),
  hambiClose.addEventListener("click", () => {
    "block" === hambiClose.style.display &&
      ((hambiClose.style.display = "none"),
      (hambibambi.style.display = "block"),
      (mobileMenuOpen.style.display = "none"));
  }),
  document.addEventListener("scroll", handleScroll);
const scrollToTopBtn = document.querySelector(".scrollToTopBtn");
function handleScroll() {
  var e =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  0.1 < document.documentElement.scrollTop / e
    ? (scrollToTopBtn.style.display = "block")
    : (scrollToTopBtn.style.display = "none");
}
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
scrollToTopBtn.addEventListener("click", scrollToTop);
let map;
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 46.25624369819664, lng: 20.148850679397587 },
    zoom: 16.5,
    mapId: "dc748274853a2ec0",
  });
  new google.maps.Marker({
    position: { lat: 46.25625102883284, lng: 20.148884697890406 },
    map: map,
    icon: "https://devayoga.hu/photos/svg/map-3.svg",
    title: "Devá Yoga Studio, Tisza Lajos krt. 37",
    animation: google.maps.Animation.DROP,
  });
}
