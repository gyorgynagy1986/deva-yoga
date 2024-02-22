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
