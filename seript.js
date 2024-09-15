const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');
const more = document.querySelector(".more");
const btn = document.querySelector(".button");
const btn2 = document.querySelector(".btn2");
const height_fix = document.querySelector(".height-fix");
// console.log(btn2);

burger.addEventListener('click', () => {
  navLinks.classList.toggle('toggle');
  burger.classList.toggle('toggle');
});

btn.addEventListener("click", () => {
  more.classList.toggle("show");
})
btn2.addEventListener("click", () => {
  height_fix.classList.toggle("auto");
})


// Get the button
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Show the button when the user scrolls down 20px from the top of the document
window.onscroll = function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
};

// When the user clicks on the button, scroll to the top of the document
scrollToTopBtn.onclick = function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
