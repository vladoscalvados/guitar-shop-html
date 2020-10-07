const aGuitarTabLinks = document.querySelectorAll(`.a-guitar-tab-links`);
const acoustic = document.querySelectorAll(`.acoustic`);
const eGuitarTabLinks = document.querySelectorAll(`.e-guitar-tab-links`);
const electric = document.querySelectorAll(`.electric`);
const testimonial = document.querySelectorAll(`.testimonial`);
const chevronRight = document.querySelector(`.chevron-right`);
const chevronLeft = document.querySelector(`.chevron-left`);
const navBar = document.querySelector(`#nav-bar`);
const myCart = document.querySelector(`#my-cart`);
const myCartMobile = document.querySelector(`#my-cart-mobile`);
const closeBtn = document.querySelector(`#close-btn`);
const cart = document.querySelector(`#cart`);
const responsiveNavBar = document.querySelector(`#responsive-nav-bar`);
const toggleBtn = document.querySelector(`#toggle-btn`);

// Navbar
toggleBtn.addEventListener("click", () => {
  if (toggleBtn.classList.contains("fa-close")) {
    toggleBtn.classList.add("fa-bars");
    toggleBtn.classList.remove("fa-close");
    responsiveNavBar.style = "top: -320px";
  } else {
    toggleBtn.classList.remove("fa-bars");
    toggleBtn.classList.add("fa-close");
    responsiveNavBar.style = "top: 80px";
  }
});

// Add to cart
myCart.addEventListener("click", (e) => {
  e.preventDefault();
  cart.style = "right: 0px; transition: right .2s;";
});
closeBtn.addEventListener("click", () => {
  cart.style = "right:-420px; transition: right .2s;";
});
// Add to cart mobile
myCartMobile.addEventListener("click", (e) => {
  e.preventDefault();
  cart.style = "right: 0px; transition: right .2s;";
});
closeBtn.addEventListener("click", () => {
  cart.style = "right:-420px; transition: right .2s;";
});

// Navbar
window.addEventListener("scroll", () => {
  if (window.scrollY > 150) {
    navBar.style =
      "top: -10px; height: 90px; box-shadow:var(--main-dark-color) 0 0 5px; transition:var(--main-transition); ";
  } else if (window.scrollY <= 0) {
    navBar.style =
      "top: 0px; height: 80px; box-shadow:none; transition:var(--main-transition); ";
  }
});

// Featured Acoustic Guitar Tab Button
showAcoustic = (event, getID) => {
  for (let i = 0; i < acoustic.length; i++)
    [(acoustic[i].style.display = "none")];

  for (let i = 0; i < aGuitarTabLinks.length; i++) {
    aGuitarTabLinks[i].className = aGuitarTabLinks[i].className.replace(
      " active",
      ""
    );
  }

  document.getElementById(getID).style.display = "grid";
  event.currentTarget.className += " active";
};
// Featured Electric Guitar Tab Button
showElectric = (event, getID) => {
  for (let i = 0; i < electric.length; i++)
    [(electric[i].style.display = "none")];

  for (let i = 0; i < eGuitarTabLinks.length; i++) {
    eGuitarTabLinks[i].className = eGuitarTabLinks[i].className.replace(
      " active",
      ""
    );
  }

  document.getElementById(getID).style.display = "grid";
  event.currentTarget.className += " active";
};

// Testimonials chevron
leftChevron = (prevID) => {
  for (let i = 0; i < testimonial.length; i++) {
    testimonial[i].style.display = "none";
  }
  document.getElementById(prevID).style.display = "grid";
  chevronLeft.style.display = "none";
  chevronRight.style = "display:block; visibility:visible;";
};
rightChevron = (prevID) => {
  for (let i = 0; i < testimonial.length; i++) {
    testimonial[i].style.display = "none";
  }
  document.getElementById(prevID).style.display = "grid";
  chevronRight.style.display = "none";
  chevronLeft.style.display = "block";
};
