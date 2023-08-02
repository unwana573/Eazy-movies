// PRELOADER

window.addEventListener('load', function() {
    var preloader = document.querySelector('.load');
    var content = document.getElementById('content');
  
    // Simulate loading time (you can replace this with actual loading logic)
    setTimeout(function() {
      preloader.style.display = 'none';
      content.style.display = 'block';
    }, 2000); // 3 seconds
});
const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});


sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});