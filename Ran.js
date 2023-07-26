const displayElement = document.getElementById("display");
const randomButton = document.getElementById("randomButton");

let values = []; // 空的陣列用來存放值
const randomValues = ["大吉", "中吉", "小吉", "兇", "平"]; // 隨機值的陣列

randomButton.addEventListener("click", startRandom);

function startRandom() {
  values = []; // 清空陣列
  const timer = setInterval(() => {
    const randomIndex = Math.floor(Math.random() * randomValues.length); // 隨機選擇索引值
    const randomValue = randomValues[randomIndex]; // 根據索引值獲取隨機值
    values.push(randomValue); // 將隨機值加入陣列
    displayElement.textContent = randomValue; // 顯示隨機值
    displayElement.style.fontSize = "100px"; // 設定字體大小為40px

    if (values.length >= 10) {
      clearInterval(timer); // 停止計時器
    }
  }, 500);
}
