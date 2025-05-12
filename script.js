document.addEventListener("DOMContentLoaded", function () {
  // Heading styling
  const heading = document.querySelector(".main-content h2");
  if (heading) {
    heading.textContent = "Welcome to the World of Graphic Design! 🎨✨";
    heading.style.color = "#4CAF50";
    heading.style.fontSize = "2rem";
  }

  // Show/Hide Trends Section
  const toggleBtn = document.getElementById("toggleBtn");
  const trendsSection = document.getElementById("trendsSection");

  if (toggleBtn && trendsSection) {
    toggleBtn.addEventListener("click", () => {
      if (trendsSection.style.display === "none") {
        trendsSection.style.display = "block";
        toggleBtn.textContent = "Hide Trends";
      } else {
        trendsSection.style.display = "none";
        toggleBtn.textContent = "Show Trends";
      }
    });
  }

  // Dark mode toggle with localStorage
  const darkToggle = document.getElementById("darkModeToggle");

  // Apply saved theme
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    if (darkToggle) {
      const icon = darkToggle.querySelector("i");
      icon.classList.remove("fa-moon");
      icon.classList.add("fa-sun");
    }
  }

  if (darkToggle) {
    darkToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");

      const isDark = document.body.classList.contains("dark-mode");
      localStorage.setItem("theme", isDark ? "dark" : "light");

      const icon = darkToggle.querySelector("i");
      icon.classList.toggle("fa-sun", isDark);
      icon.classList.toggle("fa-moon", !isDark);
    });
  }
});
