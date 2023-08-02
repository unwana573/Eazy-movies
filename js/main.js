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

// ! WRAPPER (SLIDER)
const carousel = document.querySelector(".carousel"),
firstImg = carousel.querySelectorAll("img")[0];
arrowIcons = document.querySelectorAll(".wrapper button");

let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;

const showHideIcons = () => {
    let scrollWidth = carousel.scrollWidth - carousel.clientWidth;
    arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block"; 
    arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block"; 
}


arrowIcons.forEach(icon => {
    let firstImgWidth = firstImg.clientWidth + 14;
    icon.addEventListener("click", () => {
       carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
        //setTimeout{() => showHideIcons(), 60};
    });
});

const autoslide = () => {
    if (carousel.scrollLeft == (carousel.scrollWidth - carousel.clientWidth)) return;
    
    positionDiff = Math.ads(positionDiff);
    let firstImg = firstImg.clientWidth + 14;
    let valDifference = firstImg - positionDiff;
    if (carousel.scrollLeft > prevScrollLeft) {
        return carousel.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
    } 
    carousel.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
}

const dragStart = (e) => {
    isDragStart = true;
    prevPageX = e.pageX || e.touched[0].pageX;
    prevScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    if (!isDragStart) return;
    e.preventDefault();
    isDragging = true;
    carousel.classList.add("dragging");
    let positionDiff = (e.pageX || e.touched[0].pageX) - prevPageX;    
    carousel.scrollLeft = prevScrollLeft - positionDiff;
    showHideIcons(); 
}

const dragStop = () =>  {
    isDragStart = false;
    carousel.classList.remove("dragging");
    
    if(!isDragging) return;   
    isDragging = false
    autoslide();
    
}
// PLAY MOVIE     
    
carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);
carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);
carousel.addEventListener("mouseup", dragStop);
carousel.addEventListener("mouseleave", dragStop);
carousel.addEventListener("touchend", dragStop);

let playButton = document.querySelector('.play-movie') 
let video = document.querySelector('.video-container'); 
let myvideo = document.querySelector('#myvideo'); 
let closebtn = document.querySelector('.close-video'); 

playButton.onclick = () => {
    video.classList.add(".show-video"); 
    myvideo.play();    
};

closebtn.onclick = () => {
    video.classList.remove(".show-video"); 
    myvideo.pause();    
  };
    
// // https://www.omdbapi.com/?i=tt3896198&apikey=d5d24b40