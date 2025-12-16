const params = new URLSearchParams(window.location.search);
const end = params.get("end");
const timerEl = document.getElementById("timer");

if (!end) {
  timerEl.textContent = "時刻未指定";
} else {
  const [h, m] = end.split(":").map(Number);

  function update() {
    const now = new Date();
    let endTime = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      h,
      m,
      0
    );

    // すでに過ぎていたら翌日にする
    if (endTime < now) {
      endTime.setDate(endTime.getDate() + 1);
    }

    const diff = endTime - now;

    if (diff <= 0) {
      timerEl.textContent = "終了！";
      return;
    }

    const hh = Math.floor(diff / 3600000);
    const mm = Math.floor((diff % 3600000) / 60000);
    const ss = Math.floor((diff % 60000) / 1000);

    timerEl.textContent =
      `${String(hh).padStart(2, "0")}:` +
      `${String(mm).padStart(2, "0")}:` +
      `${String(ss).padStart(2, "0")}`;
  }

  setInterval(update, 1000);
  update();
}
