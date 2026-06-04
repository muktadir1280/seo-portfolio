// Mobile menu toggle
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mobileMenu = document.getElementById("mobileMenu");

mobileMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// Smooth scrolling
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  section.scrollIntoView({ behavior: "smooth" });
}

// Add smooth scrolling to all navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    // Close mobile menu if open
    mobileMenu.classList.add("hidden");
  });
});

// Contact form handling
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (name && email && message) {
    // Create success message
    const successDiv = document.createElement("div");
    successDiv.className =
      "bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded-xl mb-6 shadow-lg";
    successDiv.innerHTML = `
                    <strong>Thank you ${name}!</strong> Your message has been sent successfully. I will get back to you soon.
                `;

    // Insert success message before the form
    const form = document.getElementById("contactForm");
    form.parentNode.insertBefore(successDiv, form);

    // Clear form
    form.reset();

    // Remove success message after 5 seconds
    setTimeout(() => {
      successDiv.remove();
    }, 5000);
  } else {
    // Create error message
    const errorDiv = document.createElement("div");
    errorDiv.className =
      "bg-red-100 border border-red-400 text-red-700 px-6 py-4 rounded-xl mb-6 shadow-lg";
    errorDiv.innerHTML = "<strong>Error!</strong> Please fill in all fields.";

    // Insert error message before the form
    const form = document.getElementById("contactForm");
    form.parentNode.insertBefore(errorDiv, form);

    // Remove error message after 3 seconds
    setTimeout(() => {
      errorDiv.remove();
    }, 3000);
  }
});

// Animate skill bars when they come into view
const observerOptions = {
  threshold: 0.3,
  rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const skillBars = entry.target.querySelectorAll(".skill-bar");
      skillBars.forEach((bar) => {
        bar.style.width = bar.style.width || "0%";
      });
    }
  });
}, observerOptions);

// Observe skills section
const skillsSection = document.getElementById("skills");
if (skillsSection) {
  observer.observe(skillsSection);
}

// Add scroll effect to navigation
window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");
  if (window.scrollY > 100) {
    nav.classList.add("bg-white/95");
    nav.classList.remove("bg-white/90");
  } else {
    nav.classList.add("bg-white/90");
    nav.classList.remove("bg-white/95");
  }
});

// Parallax effect for hero section
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const parallax = document.querySelector(".gradient-bg");
  const speed = scrolled * 0.5;
  parallax.style.transform = `translateY(${speed}px)`;
});

//block
// document.addEventListener("keydown", function (e) {
//   if (e.ctrlKey && (e.key === "u" || e.key === "U")) {
//     e.preventDefault();
//     alert("Source code is protected!");
//   }
//   if (e.key === "F12") {
//     e.preventDefault();
//     alert("Developer Tools disabled!");
//   }
// });

// document.addEventListener("contextmenu", function (e) {
//   e.preventDefault();
//   alert("Right click disabled!");
// });
