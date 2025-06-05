const counterDisplay = document.getElementById("counterDisplay");
const incrementButton = document.getElementById("incrementButton");

let count = 0; // カウンターの初期値

incrementButton.addEventListener("click", () => {
  count++; // カウントを1増やす
  counterDisplay.textContent = count; // 表示を更新する
});
