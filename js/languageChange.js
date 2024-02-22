const btnEng = document.getElementById("eng");
const btnHu = document.getElementById("hu");
const mobileMenuOpen = document.querySelector(".mobile-menu");
const hambiCloses = document.querySelector(".mobile-menu-hambi-close");
const hambibambis = document.querySelector(".mobile-menu-hambi");
const typeselection = document.querySelectorAll(".type-yoga");

// TIMETABLE OPACITY

const containerTimetableSelector = document.querySelectorAll(
  ".main_container_day",
);
const InternationalClasses = document.querySelectorAll(".inter");

const opactityHandler = function (active, inactive) {
  containerTimetableSelector.forEach((e) => (e.style.opacity = active));
  InternationalClasses.forEach((add) => (add.style.opacity = inactive));
};

// MEDIA QUERY ISSUE AT MOBILE MENU

const mediaQfixe = window.matchMedia("(max-width: 700px)");

//NAV START

const nav = [
  "gallery",
  "timetable",
  "About",
  "House rule",
  "prices",
  "yoga training",
  "class types",
  "yoga camp",
  "contact",
];

const navOnlineBooking = ["booking"];

const navHu = [
  "GALÉRIA",
  "ÓRAREND",
  "Rólunk",
  "HÁZIREND",
  "ÁRLISTA",
  "JÓGAOKTATÓ KÉPZÉS",
  "ÓRATÍPUSOK",
  "JÓGATÁBOR",
  "kapcsolat",
];

//NAV END

// MAIN HEADER START

const contentMainPageEng = [
  "Anyone who starts practicing yoga with any goal,  will be enriched with a treasure of great value. Come and be with us through yoga in our yoga studio in Szeged.",
];
const contentMainPageHu = [
  "Bárki bármilyen céllal kezdi is el a jóga gyakorlását, mindenképp komoly értéket hordozó kinccsel lesz gazdagabb. Gyere és kapcsolódj velünk a jógán keresztül szegedi jógastúdiónkban.",
];
const btnmainHeader = ["YOGA CLASS BOOKING"];
const btnmainHeaderHu = ["ONLINE BEJELENTKEZÉS"];

// SECTION 1

const sectionTitle = [`PRACTICE YOGA\nIN THE CITY CENTER`];
const sectionText = [
  "Experience endless tranquility in the beautiful yoga rooms of our studio",
];
const sectionTxt1 = [
  "We have small-group yoga classes, which have the advantage that each guest receives personalized attention, so we build up practice from the basics in an intimate, family environment.",
];
const sectionTxt2 = [
  "Join us to experience the wonderful path of yoga on the island of tranquility at Devá Yoga Studio.",
];

// SECTION 2
const section2Title = ["DEVÁ YOGA\n TEAM"];

const dettiEng = [
  "Yoga is a value that I share with all my students and guests with a heart full of gratitude.",
];
const tomiEng = [
  "It is important for us to learn yoga from a pure source and to transmit this pure knowledge.",
];
const lillaEng = [
  "Our approach is imbued with a precision focused on anatomy, but also with a deeper spiritual understanding of the asana.",
];
const liviEng = [
  "Yoga teaches self-knowledge, it helps us to get in deeper contact with our own inner world",
];

// CONTACT

const sectionContact = ["GET IN TOUCH \n WITH US"];
const sectionContactList = [
  "Name",
  "E-mail address",
  "Phone number",
  "Message",
  "SEND",
];

// PRiCE LIST

const prieListH1 = ["PRICE LIST"];

// TIME-TABLE

const begginer = ["Begginer"];

btnEng.addEventListener("click", () => {
  opactityHandler("0.1", "1");

  bugFixValue = true;
  if (bugFixValue) {
    document.getElementById("send-eng").value = sectionContactList[4];
  }

  // MOBIL MENU FIX

  mobileMenuOpen.style.display = "none";
  hambiCloses.style.display = "none";

  if (!mediaQfixe.matches === false) {
    hambibambis.style.display = "flex";
  } else {
    hambibambis.style.display = "none";
  }

  // LANGUAGE BTNS

  btnHu.classList.remove("hidden");
  btnEng.classList.add("hidden");

  // MAIN CONTENT LANDING

  if (
    document.URL === "http://127.0.0.1:5501/" ||
    document.URL === "http://127.0.0.1:5501/index.html" ||
    document.URL === "https://devayoga.hu/" ||
    document.URL === "https://devayoga.hu/index.php"
  ) {
    document.querySelector(".header_content_col-1_text").innerText =
      contentMainPageEng[0];
    document.getElementById("btn-mainHeader").innerText = btnmainHeader[0];

    // SECTION 1

    document.getElementById("sec-1-title").innerText = sectionTitle;
    document.getElementById("sectionH2").innerText = sectionText;
    document.getElementById("sectionTxt1").innerText = sectionTxt1;
    document.getElementById("sectionTxt2").innerText = sectionTxt2;

    // SECTION 2
    document.getElementById("our-team").innerText = section2Title;

    document.getElementById("detti-eng").innerText = dettiEng;
    document.getElementById("tomi-eng").innerText = tomiEng;
    document.getElementById("lilla-eng").innerText = lillaEng;
    document.getElementById("livi-eng").innerText = liviEng;
  }

  // PRICE LIST

  // if(document.URL === 'http://127.0.0.1:5501/arlista.html') {
  //   document.getElementById('price-list').innerText = prieListH1;
  // }

  // // TIME TABLE

  // if(document.URL === 'http://127.0.0.1:5501/orarend.html') {

  //   //HIGHTLIGHT ENGLISH CLASSES

  //
  //     for (const type of typeselection ) {
  //       console.log(type);

  //       if(type.innerText === 'Kezdő') {
  //       type.innerText = begginer;
  //     }
  //
  //  }
  // }

  // NAVIGATION GLOBAL

  saveNav2 = document.getElementById("nav-2").innerText = nav[0];
  saveNav3 = document.getElementById("nav-3").innerText = nav[1];
  saveNav4 = document.getElementById("nav-4").innerText = nav[2];
  saveNav5 = document.getElementById("nav-5").innerText = nav[3];
  saveNav6 = document.getElementById("nav-6").innerText = nav[4];
  saveNav7 = document.getElementById("nav-7").innerText = nav[5];
  saveNav8 = document.getElementById("nav-8").innerText = nav[6];
  saveNav9 = document.getElementById("nav-9").innerText = nav[7];
  saveNav10 = document.getElementById("nav-10").innerText = nav[8];

  // CONTACT GLOBAL

  ContactHeadTitle = document.getElementById("contact-us").innerText =
    sectionContact;
  Contactname = document.getElementById("name-eng").innerText =
    sectionContactList[0];
  ContactEmail = document.getElementById("email-eng").innerText =
    sectionContactList[1];
  Contactphone = document.getElementById("phone-eng").innerText =
    sectionContactList[2];
  Contactmessage = document.getElementById("message-eng").innerText =
    sectionContactList[3];
  Contactbutton = document.getElementById("send-eng").innerText =
    sectionContactList[4];

  // MOBILE MENU GLOBAL
  localStorage.setItem("mobile-gallery", nav[0]);
  localStorage.setItem("mobile-timetabe", nav[1]);
  localStorage.setItem("mobile-philo", nav[2]);
  localStorage.setItem("mobile-rule", nav[3]);
  localStorage.setItem("mobile-prices", nav[4]);
  localStorage.setItem("mobile-traning", nav[5]);
  localStorage.setItem("mobile-types", nav[6]);
  localStorage.setItem("mobile-camp", nav[7]);
  localStorage.setItem("mobile-booking", navOnlineBooking[0]);

  // NAV GLOBAL

  localStorage.setItem("nav2", saveNav2);
  localStorage.setItem("nav3", saveNav3);
  localStorage.setItem("nav4", saveNav4);
  localStorage.setItem("nav5", saveNav5);
  localStorage.setItem("nav6", saveNav6);
  localStorage.setItem("nav7", saveNav7);
  localStorage.setItem("nav8", saveNav8);
  localStorage.setItem("nav9", saveNav9);
  localStorage.setItem("nav10", saveNav10);
  localStorage.setItem("saveButton", "hidden");

  // CONTACT GLOBAL
  localStorage.setItem("contactH1", ContactHeadTitle);
  localStorage.setItem("contactName", Contactname);
  localStorage.setItem("contactEmail", ContactEmail);
  localStorage.setItem("contactPhone", Contactphone);
  localStorage.setItem("contactMessage", Contactmessage);
  localStorage.setItem("contactbutton", Contactbutton);

  // MAIN CONTETN LANDING

  localStorage.setItem("mianContent", contentMainPageEng);
  localStorage.setItem("mianCbtn", btnmainHeader);

  // SECTION 1
  localStorage.setItem("sectionTitle", sectionTitle);
  localStorage.setItem("sectionh2Local", sectionText);
  localStorage.setItem("sectionTxt1", sectionTxt1);
  localStorage.setItem("sectionsText2", sectionTxt2);

  // SECTION 2

  localStorage.setItem("ourTeam", section2Title);
  localStorage.setItem("detti", dettiEng);
  localStorage.setItem("tomi", tomiEng);
  localStorage.setItem("lilla", lillaEng);
  localStorage.setItem("livi", liviEng);

  // PRICE LIST

  localStorage.setItem("price-list", prieListH1);

  // TIME TABLE
  localStorage.setItem("opacityClassesAll", "0.1");
  localStorage.setItem("opacityClassesInter", "1");
});

// BTN GLOBAL

btnEng.classList.add(`${localStorage.getItem("saveButton")}`);
btnHu.classList.remove(`${localStorage.getItem("saveButton")}`);

// OPATICY ENGLISH CLASSES

opactityHandler(
  `${localStorage.getItem("opacityClassesAll")}`,
  `${localStorage.getItem("opacityClassesInter")}`,
);

// NAV GLOBAL

if (localStorage.getItem("nav2")) {
  document.getElementById("nav-2").innerText = localStorage.getItem("nav2");
}
if (localStorage.getItem("nav3")) {
  document.getElementById("nav-3").innerText = localStorage.getItem("nav3");
}
if (localStorage.getItem("nav4")) {
  document.getElementById("nav-4").innerText = localStorage.getItem("nav4");
}
if (localStorage.getItem("nav5")) {
  document.getElementById("nav-5").innerText = localStorage.getItem("nav5");
}
if (localStorage.getItem("nav6")) {
  document.getElementById("nav-6").innerText = localStorage.getItem("nav6");
}
if (localStorage.getItem("nav7")) {
  document.getElementById("nav-7").innerText = localStorage.getItem("nav7");
}
if (localStorage.getItem("nav8")) {
  document.getElementById("nav-8").innerText = localStorage.getItem("nav8");
}
if (localStorage.getItem("nav9")) {
  document.getElementById("nav-9").innerText = localStorage.getItem("nav9");
}
if (localStorage.getItem("nav10")) {
  document.getElementById("nav-10").innerText = localStorage.getItem("nav10");
}

// CONTACT GLOBAL

if (localStorage.getItem("contactH1")) {
  document.getElementById("contact-us").innerText =
    localStorage.getItem("contactH1");
}
if (localStorage.getItem("contactName")) {
  document.getElementById("name-eng").innerText =
    localStorage.getItem("contactName");
}
if (localStorage.getItem("contactEmail")) {
  document.getElementById("email-eng").innerText =
    localStorage.getItem("contactEmail");
}
if (localStorage.getItem("contactPhone")) {
  document.getElementById("phone-eng").innerText =
    localStorage.getItem("contactPhone");
}
if (localStorage.getItem("contactMessage")) {
  document.getElementById("message-eng").innerText =
    localStorage.getItem("contactMessage");
}
if (localStorage.getItem("contactbutton")) {
  document.getElementById("send-eng").value =
    localStorage.getItem("contactbutton");
}

// LANDING (NOT GLOBAL)

if (
  document.URL === "http://127.0.0.1:5501/" ||
  document.URL === "http://127.0.0.1:5501/index.html" ||
  document.URL === "https://devayoga.hu/" ||
  document.URL === "https://devayoga.hu/index.php"
) {
  // Main CONTENT HEADER (BAD SOLUTION)

  const mianContentText = (document.querySelector(
    ".header_content_col-1_text",
  ).innerText = localStorage.getItem("mianContent"));
  if (!mianContentText)
    document.querySelector(".header_content_col-1_text").innerText =
      contentMainPageHu;
  const mainContentBtn = (document.getElementById("btn-mainHeader").innerText =
    localStorage.getItem("mianCbtn"));
  if (!mainContentBtn)
    document.getElementById("btn-mainHeader").innerText = btnmainHeaderHu;

  // SECTION 1 (BETTER SOLUTION)

  if (localStorage.getItem("sectionTitle")) {
    document.getElementById("sec-1-title").innerText =
      localStorage.getItem("sectionTitle");
  }
  if (localStorage.getItem("sectionh2Local")) {
    document.getElementById("sectionH2").innerText =
      localStorage.getItem("sectionh2Local");
  }
  if (localStorage.getItem("sectionTxt1")) {
    document.getElementById("sectionTxt1").innerText =
      localStorage.getItem("sectionTxt1");
  }
  if (localStorage.getItem("sectionsText2")) {
    document.getElementById("sectionTxt2").innerText =
      localStorage.getItem("sectionsText2");
  }

  // SECTION 2

  if (localStorage.getItem("ourTeam")) {
    document.getElementById("our-team").innerText =
      localStorage.getItem("ourTeam");
  }
  if (localStorage.getItem("detti")) {
    document.getElementById("detti-eng").innerText =
      localStorage.getItem("detti");
  }
  if (localStorage.getItem("tomi")) {
    document.getElementById("tomi-eng").innerText =
      localStorage.getItem("tomi");
  }
  if (localStorage.getItem("lilla")) {
    document.getElementById("lilla-eng").innerText =
      localStorage.getItem("lilla");
  }
  if (localStorage.getItem("livi")) {
    document.getElementById("livi-eng").innerText =
      localStorage.getItem("livi");
  }
}

// PRICE LIST

if (
  document.URL === "http://127.0.0.1:5501/arlista.html" ||
  document.URL === "https://devayoga.hu/arlista.php"
) {
  if (localStorage.getItem("price-list")) {
    document.getElementById("price-list").innerText =
      localStorage.getItem("price-list");
  }
}

//TIME TABLE

if (
  document.URL === "http://127.0.0.1:5501/orarend.html" ||
  document.URL === "https://devayoga.hu/arlista.php"
) {
  if (localStorage.getItem("table-begginer")) {
    for (const typeTable of typeselection) {
      console.log(typeTable);

      if (typeTable.innerText === "Kezdő") {
        typeTable.innerText = localStorage.getItem("table-begginer");
      }
    }
  }
}

btnHu.addEventListener("click", () => {
  btnEng.classList.remove("hidden");
  btnHu.classList.add("hidden");

  localStorage.clear();
  location.reload();
});
