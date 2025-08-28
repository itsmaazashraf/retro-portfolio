// Retro Portfolio JavaScript with MAXIMUM nostalgic effects

// Dynamic Year Update
function updateYear() {
  const currentYear = new Date().getFullYear();
  const yearElement = document.getElementById("currentYear");
  if (yearElement) {
    // Add retro effect when updating year
    yearElement.style.animation = "yearUpdate 0.5s ease-in-out";
    yearElement.textContent = currentYear;

    // Remove animation after it completes
    setTimeout(() => {
      yearElement.style.animation = "";
    }, 500);
  }
}

// Retro Mode Toggle
let retroModeActive = false;
function toggleRetroMode() {
  const body = document.body;
  const retroModeBtn = document.getElementById("retroMode");

  if (!retroModeActive) {
    // Activate extreme retro mode
    body.style.animation = "retroMode 2s ease-in-out infinite";
    body.style.filter = "hue-rotate(180deg) saturate(2) contrast(1.5)";
    document.title = "🎮 EXTREME RETRO MODE! 🎮";
    retroModeBtn.textContent = "DEACTIVATE";
    retroModeBtn.style.background = "var(--glitch-red)";
    retroModeBtn.style.borderColor = "var(--glitch-red)";

    // Add glitch effect to all text
    document.querySelectorAll("*").forEach((el) => {
      if (el.children.length === 0 && el.textContent.trim()) {
        el.classList.add("glitch");
        el.setAttribute("data-text", el.textContent);
      }
    });

    retroModeActive = true;
  } else {
    // Deactivate retro mode
    body.style.animation = "none";
    body.style.filter = "none";
    document.title = "Maaz Ashraf — Software Engineer";
    retroModeBtn.textContent = "RETRO MODE";
    retroModeBtn.style.background = "rgba(0, 0, 0, 0.8)";
    retroModeBtn.style.borderColor = "var(--retro-green)";

    // Remove glitch effects
    document.querySelectorAll(".glitch").forEach((el) => {
      el.classList.remove("glitch");
      el.removeAttribute("data-text");
    });

    retroModeActive = false;
  }
}

// Loading screen functionality
document.addEventListener("DOMContentLoaded", function () {
  const loadingScreen = document.querySelector(".loading-screen");

  // Simulate loading time
  setTimeout(() => {
    loadingScreen.style.animation = "fadeOut 1s ease-in-out forwards";
  }, 2000);

  // Hide loading screen after animation
  setTimeout(() => {
    loadingScreen.style.display = "none";
  }, 3000);

  // Add retro mode toggle event
  document
    .getElementById("retroMode")
    .addEventListener("click", toggleRetroMode);

  // Update the year
  updateYear();

  // Also update year on page focus (in case user visits in a different year)
  window.addEventListener("focus", updateYear);
});

// Retro button click effects
document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".btn");

  buttons.forEach((button) => {
    button.addEventListener("click", function (e) {
      // Create retro click effect
      const ripple = document.createElement("div");
      ripple.style.position = "absolute";
      ripple.style.borderRadius = "50%";
      ripple.style.background = "rgba(255, 255, 255, 0.6)";
      ripple.style.transform = "scale(0)";
      ripple.style.animation = "ripple 0.6s linear";
      ripple.style.left = e.clientX - button.offsetLeft + "px";
      ripple.style.top = e.clientY - button.offsetTop + "px";
      ripple.style.width = ripple.style.height = "20px";

      button.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });
});

// Add retro typing effect to job titles
document.addEventListener("DOMContentLoaded", function () {
  const jobTitles = document.querySelectorAll(".job-title");

  jobTitles.forEach((title) => {
    const text = title.textContent;
    title.textContent = "";

    let i = 0;
    const typeWriter = () => {
      if (i < text.length) {
        title.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
      }
    };

    // Start typing effect when element comes into view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(typeWriter, 500);
          observer.unobserve(entry.target);
        }
      });
    });

    observer.observe(title);
  });
});

// Retro hover effects for cards
document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-4px) rotate(0.5deg)";

      // Add retro sparkle effect
      if (!retroModeActive) {
        createSparkles(this);
      }
    });

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) rotate(0deg)";
    });
  });
});

// Retro sparkle effect
function createSparkles(element) {
  for (let i = 0; i < 5; i++) {
    const sparkle = document.createElement("div");
    sparkle.style.position = "absolute";
    sparkle.style.width = "4px";
    sparkle.style.height = "4px";
    sparkle.style.background = "var(--retro-yellow)";
    sparkle.style.borderRadius = "50%";
    sparkle.style.left = Math.random() * 100 + "%";
    sparkle.style.top = Math.random() * 100 + "%";
    sparkle.style.animation = "sparkle 1s ease-out forwards";

    element.appendChild(sparkle);

    setTimeout(() => sparkle.remove(), 1000);
  }
}

// Retro link hover effects
document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll("a");

  links.forEach((link) => {
    link.addEventListener("mouseenter", function () {
      this.style.textShadow = "0 0 10px currentColor";

      // Add retro link animation
      if (retroModeActive) {
        this.style.animation = "linkGlitch 0.5s ease-in-out infinite";
      }
    });

    link.addEventListener("mouseleave", function () {
      this.style.textShadow = "none";
      this.style.animation = "none";
    });
  });
});

// Retro scroll effects
let lastScrollTop = 0;
window.addEventListener("scroll", function () {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const cards = document.querySelectorAll(".card");

  cards.forEach((card, index) => {
    const rect = card.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

    if (isVisible) {
      card.style.transform = `translateY(${
        Math.sin(scrollTop * 0.01 + index) * 2
      }px)`;

      // Add retro scroll glow effect
      if (retroModeActive) {
        card.style.boxShadow = `0 8px 24px rgba(0,0,0,0.3), 0 0 20px var(--retro-green)`;
      }
    }
  });

  lastScrollTop = scrollTop;
});

// Retro resume button functionality
document.addEventListener("DOMContentLoaded", function () {
  const resumeBtn = document.getElementById("printBtn");

  if (resumeBtn) {
    resumeBtn.addEventListener("click", function () {
      // Add retro click effect
      this.style.transform = "scale(0.95)";
      this.style.background = "var(--retro-green)";

      setTimeout(() => {
        this.style.transform = "scale(1)";
        this.style.background =
          "linear-gradient(180deg, #efefff 0%, var(--chrome) 100%)";
      }, 150);

      // Redirect to resume after effect
      setTimeout(() => {
        window.open(
          "https://drive.google.com/file/d/1kGxxn3QF795ZNYSfOtO86_cNhaE8_LS3/view?usp=sharing",
          "_blank"
        );
      }, 300);
    });
  }
});

// Retro keyboard navigation
document.addEventListener("keydown", function (e) {
  // Add retro sound effect visual feedback
  if (e.key === "Enter" || e.key === " ") {
    const activeElement = document.activeElement;
    if (activeElement && activeElement.classList.contains("btn")) {
      activeElement.style.transform = "scale(0.95)";
      setTimeout(() => {
        activeElement.style.transform = "scale(1)";
      }, 150);
    }
  }

  // Quick retro mode toggle with R key
  if (e.key.toLowerCase() === "r" && e.ctrlKey) {
    e.preventDefault();
    toggleRetroMode();
  }
});

// Retro Easter egg - Konami code
let konamiCode = [];
const konamiSequence = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "KeyB",
  "KeyA",
];

document.addEventListener("keydown", function (e) {
  konamiCode.push(e.code);

  if (konamiCode.length > konamiSequence.length) {
    konamiCode.shift();
  }

  if (konamiCode.join(",") === konamiSequence.join(",")) {
    // Activate extreme retro mode!
    document.body.style.animation = "retroMode 5s ease-in-out infinite";
    document.title = "🎮 EXTREME RETRO MODE ACTIVATED! 🎮";

    // Add glitch to all elements
    document.querySelectorAll("*").forEach((el) => {
      if (el.children.length === 0 && el.textContent.trim()) {
        el.classList.add("glitch");
        el.setAttribute("data-text", el.textContent);
      }
    });

    // Reset after 10 seconds
    setTimeout(() => {
      document.body.style.animation = "none";
      document.title = "Maaz Ashraf — Software Engineer";

      document.querySelectorAll(".glitch").forEach((el) => {
        el.classList.remove("glitch");
        el.removeAttribute("data-text");
      });
    }, 10000);
  }
});

// Add CSS for new effects
const style = document.createElement("style");
style.textContent = `
  @keyframes ripple {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
  
  @keyframes retroMode {
    0%, 100% { filter: hue-rotate(0deg) saturate(1); }
    25% { filter: hue-rotate(90deg) saturate(1.5); }
    50% { filter: hue-rotate(180deg) saturate(2); }
    75% { filter: hue-rotate(270deg) saturate(1.5); }
  }
  
  @keyframes sparkle {
    0% { transform: scale(0) rotate(0deg); opacity: 1; }
    100% { transform: scale(1) rotate(180deg); opacity: 0; }
  }
  
  @keyframes linkGlitch {
    0%, 100% { transform: translate(0); }
    25% { transform: translate(-1px, 1px); }
    50% { transform: translate(1px, -1px); }
    75% { transform: translate(-1px, -1px); }
  }
  
  @keyframes yearUpdate {
    0% { transform: scale(1) rotate(0deg); color: var(--retro-green); }
    50% { transform: scale(1.3) rotate(180deg); color: var(--retro-cyan); }
    100% { transform: scale(1) rotate(360deg); color: inherit; }
  }
  
  .glitch {
    animation: glitch 0.3s infinite;
  }
  
  .glitch::before,
  .glitch::after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  
  .glitch::before {
    animation: glitch-1 0.3s infinite;
    color: var(--glitch-red);
    z-index: -1;
  }
  
  .glitch::after {
    animation: glitch-2 0.3s infinite;
    color: var(--glitch-blue);
    z-index: -2;
  }
`;
document.head.appendChild(style);

// Add retro mode instructions
document.addEventListener("DOMContentLoaded", function () {
  const instructions = document.createElement("div");
  instructions.style.position = "fixed";
  instructions.style.bottom = "20px";
  instructions.style.left = "20px";
  instructions.style.background = "rgba(0, 0, 0, 0.8)";
  instructions.style.color = "var(--retro-green)";
  instructions.style.padding = "10px";
  instructions.style.border = "1px solid var(--retro-green)";
  instructions.style.fontFamily = "Share Tech Mono";
  instructions.style.fontSize = "10px";
  instructions.style.zIndex = "1000";
  instructions.innerHTML = `
    RETRO CONTROLS:<br>
    • Click RETRO MODE for extreme effects<br>
    • Ctrl+R: Quick toggle<br>
    • Konami Code: ↑↑↓↓←→←→BA<br>
    • Hover cards for sparkles<br>
    • Scroll for glow effects
  `;

  document.body.appendChild(instructions);

  // Hide instructions after 10 seconds
  setTimeout(() => {
    instructions.style.opacity = "0.3";
  }, 10000);
});
