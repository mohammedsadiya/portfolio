document.addEventListener("DOMContentLoaded", function() {
    // Sticky navbar on scroll script
    window.addEventListener("scroll", function() {
      const navbar = document.querySelector(".navbar");
      if (this.scrollY > 20) {
        navbar.classList.add("sticky");
      } else {
        navbar.classList.remove("sticky");
      }
  
      // Scroll-up button show/hide script
      const scrollUpBtn = document.querySelector(".scroll-up-btn");
      if (this.scrollY > 500) {
        scrollUpBtn.classList.add("show");
      } else {
        scrollUpBtn.classList.remove("show");
      }
    });
  
    // Slide-up script
    const scrollUpBtn = document.querySelector(".scroll-up-btn");
    scrollUpBtn.addEventListener("click", function() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
      // Removing smooth scroll on slide-up button click
      document.documentElement.style.scrollBehavior = "auto";
    });
  
    // Smooth scroll on menu items click
    const menuItems = document.querySelectorAll(".menu li a");
    menuItems.forEach(function(item) {
      item.addEventListener("click", function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        window.scrollTo({
          top: target.offsetTop - 50,
          behavior: "smooth"
        });
      });
    });
  
    // Toggle menu/navbar script
    const menuBtn = document.querySelector(".menu-btn");
    const menu = document.querySelector(".menu");
    menuBtn.addEventListener("click", function() {
      menu.classList.toggle("active");
      this.querySelector("i").classList.toggle("active");
    });
  
    // Typing text animation script
    const typed = new Typed(".typing", {
      strings: ["explore", "full stack developer"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
    });
  
    const typed2 = new Typed(".typing-2", {
      strings: ["problem solver, beginner"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
    });
  
    // Owl carousel script
    $(".carousel").owlCarousel({
      margin: 20,
      loop: true,
      autoplay: true,
      autoplayTimeout: 2000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1,
          nav: false
        },
        600: {
          items: 2,
          nav: false
        },
        1000: {
          items: 3,
          nav: false
        }
      }
    });
  });