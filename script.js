// ===== Initialize AOS (Animate On Scroll) =====
AOS.init({
  duration: 1000,
  once: true,
});

// ===== Typing Effect for Typewriter Text =====
const roles = [
  "Web Developer",
  "UI/UX Designer",
  "Tech Explorer",
  "Problem Solver",
  "Quick Learner",
];

let index = 0;
let text = "";
let isDeleting = false;
const typewriter = document.getElementById("typewriter");

function typeEffect() {
  const current = roles[index];
  if (isDeleting) {
    text = current.substring(0, text.length - 1);
  } else {
    text = current.substring(0, text.length + 1);
  }

  typewriter.textContent = text;

  let speed = isDeleting ? 50 : 100;

  if (!isDeleting && text === current) {
    speed = 1500;
    isDeleting = true;
  } else if (isDeleting && text === "") {
    isDeleting = false;
    index = (index + 1) % roles.length;
    speed = 500;
  }

  setTimeout(typeEffect, speed);
}
typeEffect();

// ===== Particles.js Background in Hero Section =====
particlesJS("particles-js", {
  particles: {
    number: { value: 60, density: { enable: true, value_area: 800 } },
    color: { value: "#00bfff" },
    shape: { type: "circle" },
    opacity: { value: 0.3 },
    size: { value: 3, random: true },
    line_linked: {
      enable: true,
      distance: 120,
      color: "#00bfff",
      opacity: 0.3,
      width: 1,
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      out_mode: "out",
    },
  },
  interactivity: {
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" },
    },
    modes: {
      repulse: { distance: 150 },
      push: { particles_nb: 4 },
    },
  },
  retina_detect: true,
});

// ===== Active NavLink Highlight on Scroll =====
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav_links a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 150;
    const sectionHeight = section.offsetHeight;
    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});



// Animate skill bars when in view
const skillSection = document.querySelector("#skills");
const skillBars = document.querySelectorAll(".progress");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      skillBars.forEach(bar => {
        const target = bar.getAttribute("data-width");
        bar.style.width = target;
      });
    }
  });
}, { threshold: 0.3 });

if (skillSection) observer.observe(skillSection);
