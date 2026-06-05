document.addEventListener("DOMContentLoaded", () => {
  
  // ==========================================
  // 1. LOGIKA BUKA/TUTUP HAMBURGER MENU (MOBILE)
  // ==========================================
  const menuToggle = document.getElementById('mobile-menu');
  const navOverlay = document.getElementById('nav-overlay');
  const closeMenu = document.getElementById('close-menu');
  const overlayLinks = document.querySelectorAll('.overlay-links a');

  if (menuToggle && navOverlay) {
    menuToggle.addEventListener('click', () => {
      navOverlay.classList.add('open');
    });
  }

  if (closeMenu && navOverlay) {
    closeMenu.addEventListener('click', () => {
      navOverlay.classList.remove('open');
    });
  }

  overlayLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 768 && navOverlay) {
        navOverlay.classList.remove('open');
      }
    });
  });

  // ==========================================
  // 2. LOGIKA SMART HIDDEN NAVBAR ON SCROLL (OPTIMIZED FOR MOBILE)
  // ==========================================
  let lastScrollTop = 0;
  const navbar = document.getElementById('main-nav');
  let isScrolling = false;

  if (navbar) {
    window.addEventListener('scroll', function() {
      if (!isScrolling) {
        window.requestAnimationFrame(() => {
          let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
          
          if (currentScroll > 80) {
            if (currentScroll > lastScrollTop) {
              navbar.classList.add('nav-hidden');
            } else {
              navbar.classList.remove('nav-hidden');
            }
          } else {
            navbar.classList.remove('nav-hidden');
          }
          
          lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
          isScrolling = false;
        });

        isScrolling = true;
      }
    }, false);
  }

  // ==========================================
  // 3. LOGIKA POP-UP MODAL (ON-DEMAND LAZY LOADING)
  // ==========================================
  const modal = document.getElementById("certModal");
  const modalImg = document.getElementById("modalImg");
  const closeModal = document.getElementById("closeModal");

  if (modal && modalImg && closeModal) {
    document.querySelectorAll(".btn-transkrip").forEach(button => {
      button.addEventListener("click", function() {
        const targetImageSrc = this.getAttribute("data-fullimg");
        modalImg.src = targetImageSrc;
        modal.classList.add("show");
      });
    });

    closeModal.addEventListener("click", () => {
      modal.classList.remove("show");
      setTimeout(() => { modalImg.src = ""; }, 300); 
    });

    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.classList.remove("show");
        setTimeout(() => { modalImg.src = ""; }, 300);
      }
    });
  }
});
