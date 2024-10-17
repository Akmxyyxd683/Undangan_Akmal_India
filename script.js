document.querySelector(".Button").addEventListener("click", function () {
  const mainCover = document.querySelector(".Container-judul");
  const sections = document.querySelector(".sections");
  const navbar = document.getElementById("nav");
  const body = document.body;

  mainCover.style.transition =
    "transform 0.8s ease-in-out, opacity 0.8s ease-in-out";
  mainCover.style.transform = "translateY(-100vh)";
  mainCover.style.opacity = "0";

  setTimeout(() => {
    mainCover.style.display = "none";
    sections.removeAttribute("hidden");
    navbar.style.display = "flex";
    body.style.overflow = "visible";

    playAudio();
  }, 800);
});

const audioiconwrapper = document.querySelector("#disc");
const song = document.querySelector("#song");
const audioicon = document.querySelector(".audio-icon-wrapper i");
let isPlaying = false;

function playAudio() {
  song.volume = 0.5;
  song.play();
  audioiconwrapper.style.display = "flex";
  isPlaying = true;
}

audioiconwrapper.onclick = function () {
  if (isPlaying) {
    song.pause();
    audioicon.classList.remove("fa-compact-disc");
    audioicon.classList.add("fa-circle-pause");
  } else {
    song.play();
    audioicon.classList.add("fa-compact-disc");
    audioicon.classList.remove("fa-circle-pause");
  }
  isPlaying = !isPlaying;
};

function copyText(text) {
  navigator.clipboard.writeText(text).then(() => {
    var message = document.getElementById("rek");
  });
}

var swiper = new Swiper(".love-story-slider", {
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true, // Slide akan loop terus
  autoplay: {
    delay: 2500, // Otomatis berpindah slide
    disableOnInteraction: false,
  },
});
