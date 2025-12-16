function getEndTime() {
  const params = new URLSearchParams(window.location.search);
  const end = params.get("end"); // 例: 19:00
  if (!end) return null;

  const [h, m] = end.split(":").map(Number);
  const now = new Date();
  const endTime = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    h,
    m,
    0
  );
  return endTime;
}

const endTime = getEndTime();

function update() {
  if (!endTime) {
    document.getElementById("timer").textContent = "時刻未指定";
    return;
  }

  const now = new Date();
  const diff = endTime - now;

  if (diff <= 0) {
    document.getElementById("timer").textContent = "終了！";
    return;
  }

  const min = Math.floor(diff / 60000);
  const sec = Math.floor((diff % 60000) / 1000);

  document.getElementById("timer").textContent =
    `${String(min).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
}

setInterval(update, 1000);
update();
