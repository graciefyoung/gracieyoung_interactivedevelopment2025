const container = document.getElementById("scroll-container");

// Duplicate the content to make seamless loop
container.innerHTML += container.innerHTML;

let scrollPosition = 0;

function scrollOptions() {
  scrollPosition += 1; // speed: 1px per frame
  if (scrollPosition >= container.scrollHeight / 2) {
    scrollPosition = 0; // reset when half the content scrolls
  }
  container.scrollTop = scrollPosition;
  requestAnimationFrame(scrollOptions);
}

scrollOptions();


