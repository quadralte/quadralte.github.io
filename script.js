

let count = 0;
const coin = document.getElementById("coin");
const coinCount = document.getElementById("coinCount");

coin.addEventListener("click", () => {
  count++;
  coinCount.textContent = count;
});