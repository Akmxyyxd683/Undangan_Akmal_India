const audioiconwrapper = document.querySelector("#disc");
const song = document.querySelector("#song");
const audioicon = document.querySelector(".audio-icon-wrapper i");
let isPlaying = false;

function nonaktifScroll() {
  scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

  window.onscroll = function () {
    window.scrollTo(scrollTop, scrollLeft);
  };
}

function nyalakanScroll() {
  window.onscroll = function () {};
  playAudio();
}

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

nonaktifScroll();
