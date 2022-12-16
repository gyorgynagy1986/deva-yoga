

    
    // MOBILE MENU
    const  hambibambi = document.querySelector('.mobile-menu-hambi');     
    const  hambiClose = document.querySelector('.mobile-menu-hambi-close');
    const mobileMenu = document.querySelector('.mobile-menu');
    const contactClose = document.querySelector('.btn_nav');
    const bodyOver = document.getElementById('body');

      hambibambi.addEventListener('click', () => {
        if (hambibambi.style.display === "none") {
            hambibambi.style.display = "block";

        } else {
            hambibambi.style.display = "none";
            hambiClose.style.display = "block";
            mobileMenu.style.display = "flex";
            bodyOver.style.overflow ='hidden';
        }

        
       if(localStorage.getItem('mobile-timetabe')) { document.querySelector('.mobile-timetable').innerText = localStorage.getItem('mobile-timetabe')}
       if(localStorage.getItem('mobile-gallery')) { document.querySelector('.mobile-gallery').innerText = localStorage.getItem('mobile-gallery')}
       if(localStorage.getItem('mobile-philo')) { document.querySelector('.mobile-philo').innerText = localStorage.getItem('mobile-philo')}
       if(localStorage.getItem('mobile-rule')) { document.querySelector('.mobile-rule').innerText = localStorage.getItem('mobile-rule')}
       if(localStorage.getItem('mobile-prices')) { document.querySelector('.mobile-prices').innerText = localStorage.getItem('mobile-prices')}
       if(localStorage.getItem('mobile-traning')) { document.querySelector('.mobile-traning').innerText = localStorage.getItem('mobile-traning')}
       if(localStorage.getItem('mobile-types')) { document.querySelector('.mobile-type').innerText = localStorage.getItem('mobile-types')}



    }); 

    hambiClose.addEventListener('click', () => {
        if (hambiClose.style.display === "block") {           
           hambiClose.style.display = "none";
            hambibambi.style.display = "block"; 
            mobileMenu.style.display = "none";
            bodyOver.style.overflow ='visible';
            bodyOver.style.overflowX ='hidden';
        }
    }); 

    
    contactClose.addEventListener('click', () => {
      if (hambiClose.style.display === "block") {
          hambiClose.style.display = "none";
          hambibambi.style.display = "block"; 
          mobileMenu.style.display = "none";
      }
  }); 


// SCROLL TO TOP
  document.addEventListener("scroll", handleScroll);
  // get a reference to our predefined button
  const scrollToTopBtn = document.querySelector(".scrollToTopBtn");

  function handleScroll() {
  const scrollableHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const GOLDEN_RATIO = 0.1;

    if ((document.documentElement.scrollTop / scrollableHeight ) > GOLDEN_RATIO) {
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
      behavior: "smooth"
    });
  }

window.removeFakeCaptcha = function() {
  document.querySelector('.captcha-fake-field').remove();
}


// ALERT! 

if (navigator.language !== 'en-US' ) {

  if(document.URL === 'https://devayoga.hu/' || document.URL === 'https://devayoga.hu/index.php' || document.URL === 'http://127.0.0.1:5501/' || document.URL === 'http://127.0.0.1:5501/index.html') {
  
  const alertContainer = document.querySelector('.alert-container');
  const removeClass = document.querySelector('.modal');
  const btnClost = document.querySelector('.close-modal');
  const overlay = document.querySelector('.overlay'); 
  
  const showAlert = () => {
    alertContainer.classList.remove('hidden'); 
    removeClass.classList.remove('hidden'); 
    overlay.classList.remove('hidden'); 
  };
  
  window.setTimeout(showAlert, 2000);
  
  
  // CLOSE 
  
  btnClost.addEventListener('click', ()=> {
   removeClass.classList.add('hidden'); 
   overlay.classList.add('hidden'); 
   alertContainer.classList.add('hidden'); 
  })
} 

} else {
  console.log('hello from scroll');
  } 




  if(document.URL === 'https://devayoga.hu/' || document.URL === 'https://devayoga.hu/index.php' || document.URL === 'http://127.0.0.1:5501/' || document.URL === 'http://127.0.0.1:5501/index.html') { 


  const sr = ScrollReveal({
    origin: 'top',
    distance: '10px',
    duration: 3000,
    delay: 150,
    //reset: true
  })

  sr.reveal(`.studio_container_textBox`, {distance: '40px'} )
  sr.reveal(`.oktatok_container-grid`, {distance: '150px', origin: 'center', distance: '0px',} )

  sr.reveal(`.contact_container_detailes`, {distance: '240px', origin: 'left', duration: 2000, delay: 450,} )


}










//Lazy loading image from css
document.addEventListener("DOMContentLoaded", function() {
  var lazyBackgrounds = [].slice.call(document.querySelectorAll(".studio_container_photo"));

  if ("IntersectionObserver" in window) {
    let lazyBackgroundObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          lazyBackgroundObserver.unobserve(entry.target);
        }
      });
    });

    lazyBackgrounds.forEach(function(lazyBackground) {
      lazyBackgroundObserver.observe(lazyBackground);
    });
  }
});



 