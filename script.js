
const text = document.querySelector(".text");
const loveImage = document.querySelector("#loveImage");
const noBtn = document.querySelector("#noBtn");
const yesBtn = document.querySelector("#yesBtn");

// YES button event
yesBtn.addEventListener("click", () => {
  text.innerHTML = "I love you too! ❤️";

  loveImage.src = "./image/yesbro.png";

  noBtn.style.display = "none";
  yesBtn.style.display = "none";
});

// NO button runs away
function moveNoButton() {
  const maxX = window.innerWidth - noBtn.offsetWidth;
  const maxY = window.innerHeight - noBtn.offsetHeight;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  noBtn.style.position = "fixed";
  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
}

// Desktop mouse
noBtn.addEventListener("mouseover", moveNoButton);

// Mobile touch
noBtn.addEventListener("touchstart", (event) => {
  event.preventDefault();
  moveNoButton();
});
