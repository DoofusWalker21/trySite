const navbarE1 = document.querySelector(".navbar");
const bottmContE1 = document.querySelector(".bottom-container");
navbarE1.classList.remove("active");

window.addEventListener("scroll", ()=> {
    if(window.scrollY > bottmContE1.offsetTop - navbarE1.offsetHeight - 50) {
        navbarE1.classList.add("active");
    }
    else {
        navbarE1.classList.remove("active");
    }
})

document.querySelectorAll(".navbar ul li a").forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
  
      const targetSectionId = link.getAttribute('href').substr(1);
      const targetSection = document.getElementById(targetSectionId);
  
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - navbarE1.offsetHeight,
          behavior: 'smooth'
        });
      }
    });
  });