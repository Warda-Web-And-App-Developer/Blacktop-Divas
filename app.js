
    const toggleBtn = document.getElementById("nav-toggle");
    const menu = document.getElementById("navbar-menu");

    toggleBtn.addEventListener("click", () => {
      const isHidden = menu.classList.contains("hidden");
      if (isHidden) {
        menu.classList.remove("hidden");
        menu.classList.add("animate-[fadeIn_0.3s_ease-out]");
        toggleBtn.setAttribute("aria-expanded", "true");
      } else {
        menu.classList.add("hidden");
        toggleBtn.setAttribute("aria-expanded", "false");
      }
    });
