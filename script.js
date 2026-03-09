/* =====================================
   SCROLL REVEAL ANIMATION
   (Reveal sections when scrolling)
===================================== */

const sections = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  entries => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {
        entry.target.classList.add("active");   // add animation class
      }

    });

  },
  { threshold: 0.15 }   // trigger when 15% of section is visible
);

// observe each section
sections.forEach(section => observer.observe(section));



/* =====================================
   MOBILE NAVBAR TOGGLE
   (Open / Close mobile menu)
===================================== */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

// toggle menu when hamburger icon is clicked
menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});


// close menu when a navigation link is clicked
document.querySelectorAll("#navMenu a").forEach(link => {

  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });

});



/* =====================================
   PROJECT FILTER
   (Filter projects by category)
===================================== */

function filterProjects(type, btn) {

  const projects = document.querySelectorAll(".project-card");
  const buttons = document.querySelectorAll(".project-filter button");

  projects.forEach(project => {

    // show matching project
    if (type === "all" || project.dataset.type === type) {
      project.style.display = "block";
    }

    // hide non matching project
    else {
      project.style.display = "none";
    }

  });

  // remove active class from all buttons
  buttons.forEach(b => b.classList.remove("active"));

  // add active class to clicked button
  btn.classList.add("active");

}