/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
  const header = document.getElementById("header");
  // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 50) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/*=============== SERVICES MODAL ===============*/
const modalViews = document.querySelectorAll(".services__modal"),
  modalBtns = document.querySelectorAll(".services__button"),
  modalClose = document.querySelectorAll(".services__modal-close");

let modal = function (modalClick) {
  modalViews[modalClick].classList.add("active-modal");
};

modalBtns.forEach((mb, i) => {
  mb.addEventListener("click", () => {
    modal(i);
  });
});

modalClose.forEach((mc) => {
  mc.addEventListener("click", () => {
    modalViews.forEach((mv) => {
      mv.classList.remove("active-modal");
    });
  });
});
// TIming modal
const TmodalViews = document.querySelectorAll(".timings__modal"),
  TmodalBtns = document.querySelectorAll(".timings__button"),
  TmodalClose = document.querySelectorAll(".services__modal-close");

let Tmodal = function (TmodalClick) {
  TmodalViews[TmodalClick].classList.add("active-modal");
};

TmodalBtns.forEach((mb, i) => {
  mb.addEventListener("click", () => {
    Tmodal(i);
  });
});

TmodalClose.forEach((mc) => {
  mc.addEventListener("click", () => {
    TmodalViews.forEach((mv) => {
      mv.classList.remove("active-modal");
    });
  });
});

/*=============== MIXITUP FILTER PORTFOLIO ===============*/
// let mixerPortfolio = mixitup(".work__container", {
//   selectors: {
//     target: ".work__card",
//   },
//   animation: {
//     duration: 300,
//   },
// });

/* Link active work */
// const linkWork = document.querySelectorAll(".work__item");

// function activeWork() {
//   linkWork.forEach((l) => l.classList.remove("active-work"));
//   this.classList.add("active-work");
// }
// linkWork.forEach((l) => l.addEventListener("click", activeWork));

/*=============== SWIPER TESTIMONIAL ===============*/
let swiperTestimonial = new Swiper(".testimonial__container", {
  spaceBetween: 24,
  loop: true,
  grabCursor: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 48,
    },
  },
});

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
// const sections = document.querySelectorAll("section[id]");

// function scrollActive() {
//   const scrollY = window.pageYOffset;

//   sections.forEach((current) => {
//     const sectionHeight = current.offsetHeight,
//       sectionTop = current.offsetTop - 58,
//       sectionId = current.getAttribute("id");

//     if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
//       document
//         .querySelector(".nav__menu a[href*=" + sectionId + "]")
//         .classList.add("active-link");
//     } else {
//       document
//         .querySelector(".nav__menu a[href*=" + sectionId + "]")
//         .classList.remove("active-link");
//     }
//   });
// }
// window.addEventListener("scroll", scrollActive);

const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__list a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__list a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);


/*=============== LIGHT DARK THEME ===============*/
const themeButton = document.getElementById("theme-button");
const lightTheme = "light-theme";
const iconTheme = "bx-sun";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the light-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(lightTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "bx bx-moon" : "bx bx-sun";

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the light
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    lightTheme
  );
  themeButton.classList[selectedIcon === "bx bx-moon" ? "add" : "remove"](
    iconTheme
  );
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or remove the light / icon theme
  document.body.classList.toggle(lightTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  // reset: true
});

sr.reveal(`.home__data`);
sr.reveal(`.home__handle`, { delay: 700 });
sr.reveal(`.home__social, .home__scroll`, { delay: 900, origin: "bottom" });

/*=========================heading==========================*/

// const text = "Dr. Dasaradha Ram Barla"; // The text to display
// let index = 0;

// function typeText() {
//   if (index < text.length) {
//     document.getElementById("companyName").innerHTML += text.charAt(index);
//     index++;
//     setTimeout(typeText, 100); // Adjust speed by changing the delay (150ms here)
//   }
// }

// // Start the typing effect
// window.onload = typeText;

//============== Show Modal ===============//

// function showDetails(name, age, gender, medicalHistory, summary) {
//   const detailsSection = document.getElementById("details-section");

//   // Fill the modal content dynamically
//   detailsSection.innerHTML = `
//       <h2>${name}</h2>
//       <p><strong>Age:</strong> ${age}</p>
//       <p><strong>Gender:</strong> ${gender}</p>
//       <p><strong>Medical History:</strong> ${medicalHistory}</p>
//       <p class="summary_p">${summary}</p>
//       <button onclick="closeDetails()">Close</button>
//     `;

//   // Display the modal
//   detailsSection.style.display = "block";
//   detailsSection.classList.add("services__modal-content");
// }

// function closeDetails() {
//   const detailsSection = document.getElementById("details-section");
//   detailsSection.style.display = "none";
// }
let toggleSectionsEle = document.getElementById("toggleSections");

// Select all sections
let sectionsEle = document.querySelectorAll("#home, #about, #quote, #toggleSections, #experience, #services, #contact");

// Select all nav items
let navEle = document.querySelectorAll(".nav__item");

// Hide all sections when 'toggleSectionsEle' is clicked
toggleSectionsEle.onclick = function() {
  sectionsEle.forEach(section => {
    section.style.display = 'none';
  });
  // document.getElementById("articles").style.height = "80vh"
};

// Show all sections when any nav item is clicked
navEle.forEach(navItem => {
  navItem.addEventListener('click', function() {
    sectionsEle.forEach(section => {
      section.style.display = 'block';
    });
  });
});
