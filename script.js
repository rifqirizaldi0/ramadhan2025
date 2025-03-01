document.addEventListener("DOMContentLoaded", function () {
  // Countdown Timer
  function updateCountdown() {
    const targetDate = new Date("March 1, 2025 00:00:00").getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      document.getElementById("countdown").innerHTML =
        "Ramadhan telah tiba😹🗿! 🌙";
      clearInterval(countdownInterval);
      return;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById(
      "countdown"
    ).innerHTML = `${days} Hari ${hours} Jam ${minutes} Menit ${seconds} Detik`;
  }

  const countdownInterval = setInterval(updateCountdown, 1000);
  updateCountdown();

  // Musik Control
  const audio = document.getElementById("background-music");
  const musicButton = document.getElementById("music-button");
  const repeatButton = document.getElementById("repeat-button");

  musicButton.addEventListener("click", function () {
    if (audio.paused) {
      audio.play();
      musicButton.innerHTML = '<i data-feather="pause"></i>';
    } else {
      audio.pause();
      musicButton.innerHTML = '<i data-feather="play"></i>';
    }
    feather.replace();
  });

  repeatButton.addEventListener("click", function () {
    audio.currentTime = 0;
    audio.play();
    musicButton.innerHTML = '<i data-feather="pause"></i>';
    feather.replace();
  });

  // // Jadwal Imsakiyah
  // const jadwal = [
  //   [
  //     "1 Maret",
  //     "04:22",
  //     "04:32",
  //     "05:45",
  //     "06:12",
  //     "11:59",
  //     "15:00",
  //     "18:06",
  //     "19:15",
  //   ],
  //   [
  //     "2 Maret",
  //     "04:22",
  //     "04:32",
  //     "05:45",
  //     "06:12",
  //     "11:59",
  //     "15:00",
  //     "18:05",
  //     "19:15",
  //   ],
  //   // Tambahkan hingga 30 Maret
  // ];

  // const tableBody = document.getElementById("imsakiyah-table");
  // jadwal.forEach((row, index) => {
  //   const tr = document.createElement("tr");
  //   tr.innerHTML =
  //     `<td>${index + 1}</td>` + row.map((data) => `<td>${data}</td>`).join("");
  //   tableBody.appendChild(tr);
  // });

  feather.replace();
});
