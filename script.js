// ================= HAMBURGER MENU =================
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// ================= SMOOTH SCROLL =================
document.querySelectorAll('a[href^="#"]').forEach(link => {

  link.addEventListener("click", function(e) {

    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if(target){
      target.scrollIntoView({
        behavior: "smooth"
      });
    }

  });

});

// ================= REVEAL ANIMATION =================
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {

  reveals.forEach(item => {

    const windowHeight = window.innerHeight;
    const revealTop = item.getBoundingClientRect().top;

    if(revealTop < windowHeight - 100){
      item.classList.add("active");
    }

  });

}

window.addEventListener("scroll", revealOnScroll);

// ================= IMAGE FALLBACK =================
document.querySelectorAll("img").forEach(img => {

  img.onerror = function() {
    this.src = "https://via.placeholder.com/400x300?text=Gambar+Belum+Ditambahkan";
  };

});