document.getElementById("startBtn").onclick = () => {
  const end = document.getElementById("endTime").value;

  if (!end) {
    alert("終了時刻を入力してください");
    return;
  }

  // timer.html に終了時刻を渡す
  location.href = `timer.html?end=${end}`;
};
