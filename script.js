document.addEventListener("DOMContentLoaded", function () {
  // 🎯 Countdown Ramadhan
  function updateCountdown() {
    const targetDate = new Date("March 1, 2025 00:00:00").getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      document.getElementById("countdown").innerHTML =
        "Ramadhan 1446 H telah tiba! 🌙";
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

  // 🎵 Kontrol Musik
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
  // 🔊 Suara Adzan
  const imsakSound = document.getElementById("imsak-sound");
  const subuhSound = document.getElementById("adzan-subuh");
  const adzanSound = document.getElementById("adzan");

  // Jadwal sholat lengkap dari 1-30 Maret 2025
  const jadwal = {
    "1 Maret": {
      imsak: "04:22",
      subuh: "04:32",
      dzuhur: "11:59",
      ashar: "15:00",
      maghrib: "18:06",
      isya: "19:15",
    },
    "2 Maret": {
      imsak: "04:22",
      subuh: "04:32",
      dzuhur: "11:59",
      ashar: "15:00",
      maghrib: "18:05",
      isya: "19:15",
    },
    "3 Maret": {
      imsak: "04:22",
      subuh: "04:32",
      dzuhur: "11:58",
      ashar: "15:00",
      maghrib: "18:05",
      isya: "19:14",
    },
    "4 Maret": {
      imsak: "04:22",
      subuh: "04:32",
      dzuhur: "11:58",
      ashar: "15:01",
      maghrib: "18:05",
      isya: "19:14",
    },
    "5 Maret": {
      imsak: "04:23",
      subuh: "04:33",
      dzuhur: "11:58",
      ashar: "15:01",
      maghrib: "18:04",
      isya: "19:13",
    },
    "6 Maret": {
      imsak: "04:23",
      subuh: "04:33",
      dzuhur: "11:58",
      ashar: "15:01",
      maghrib: "18:04",
      isya: "19:13",
    },
    "7 Maret": {
      imsak: "04:23",
      subuh: "04:33",
      dzuhur: "11:58",
      ashar: "15:02",
      maghrib: "18:03",
      isya: "19:12",
    },
    "8 Maret": {
      imsak: "04:23",
      subuh: "04:33",
      dzuhur: "11:57",
      ashar: "15:02",
      maghrib: "18:03",
      isya: "19:12",
    },
    "9 Maret": {
      imsak: "04:23",
      subuh: "04:33",
      dzuhur: "11:57",
      ashar: "15:02",
      maghrib: "18:02",
      isya: "19:11",
    },
    "10 Maret": {
      imsak: "04:23",
      subuh: "04:33",
      dzuhur: "11:57",
      ashar: "15:03",
      maghrib: "18:02",
      isya: "19:11",
    },
    "11 Maret": {
      imsak: "04:23",
      subuh: "04:33",
      dzuhur: "11:57",
      ashar: "15:03",
      maghrib: "18:01",
      isya: "19:10",
    },
    "12 Maret": {
      imsak: "04:23",
      subuh: "04:33",
      dzuhur: "11:56",
      ashar: "15:03",
      maghrib: "18:01",
      isya: "19:10",
    },
    "13 Maret": {
      imsak: "04:23",
      subuh: "04:33",
      dzuhur: "11:56",
      ashar: "15:04",
      maghrib: "18:00",
      isya: "19:09",
    },
    "14 Maret": {
      imsak: "04:23",
      subuh: "04:33",
      dzuhur: "11:56",
      ashar: "15:04",
      maghrib: "18:00",
      isya: "19:09",
    },
    "15 Maret": {
      imsak: "04:23",
      subuh: "04:33",
      dzuhur: "11:55",
      ashar: "15:04",
      maghrib: "17:59",
      isya: "19:08",
    },
    "16 Maret": {
      imsak: "04:23",
      subuh: "04:33",
      dzuhur: "11:55",
      ashar: "15:04",
      maghrib: "17:59",
      isya: "19:08",
    },
    "17 Maret": {
      imsak: "04:23",
      subuh: "04:33",
      dzuhur: "11:55",
      ashar: "15:05",
      maghrib: "17:58",
      isya: "19:07",
    },
    "18 Maret": {
      imsak: "04:22",
      subuh: "04:32",
      dzuhur: "11:55",
      ashar: "15:05",
      maghrib: "17:58",
      isya: "19:07",
    },
    "19 Maret": {
      imsak: "04:22",
      subuh: "04:32",
      dzuhur: "11:54",
      ashar: "15:05",
      maghrib: "17:57",
      isya: "19:06",
    },
    "20 Maret": {
      imsak: "04:22",
      subuh: "04:32",
      dzuhur: "11:54",
      ashar: "15:05",
      maghrib: "17:57",
      isya: "19:06",
    },
    "21 Maret": {
      imsak: "04:22",
      subuh: "04:32",
      dzuhur: "11:54",
      ashar: "15:06",
      maghrib: "17:57",
      isya: "19:06",
    },
    "22 Maret": {
      imsak: "04:22",
      subuh: "04:32",
      dzuhur: "11:54",
      ashar: "15:06",
      maghrib: "17:56",
      isya: "19:05",
    },
    "23 Maret": {
      imsak: "04:22",
      subuh: "04:32",
      dzuhur: "11:53",
      ashar: "15:05",
      maghrib: "17:55",
      isya: "19:04",
    },
    "24 Maret": {
      imsak: "04:22",
      subuh: "04:32",
      dzuhur: "11:53",
      ashar: "15:05",
      maghrib: "17:55",
      isya: "19:04",
    },
    "25 Maret": {
      imsak: "04:22",
      subuh: "04:32",
      dzuhur: "11:53",
      ashar: "15:06",
      maghrib: "17:54",
      isya: "19:03",
    },
    "26 Maret": {
      imsak: "04:22",
      subuh: "04:32",
      dzuhur: "11:52",
      ashar: "15:06",
      maghrib: "17:54",
      isya: "19:03",
    },
    "27 Maret": {
      imsak: "04:22",
      subuh: "04:32",
      dzuhur: "11:52",
      ashar: "15:06",
      maghrib: "17:53",
      isya: "19:02",
    },
    "28 Maret": {
      imsak: "04:22",
      subuh: "04:32",
      dzuhur: "11:52",
      ashar: "15:06",
      maghrib: "17:53",
      isya: "19:02",
    },
    "29 Maret": {
      imsak: "04:21",
      subuh: "04:31",
      dzuhur: "11:51",
      ashar: "15:06",
      maghrib: "17:52",
      isya: "19:01",
    },
    "30 Maret": {
      imsak: "04:21",
      subuh: "04:31",
      dzuhur: "11:51",
      ashar: "15:06",
      maghrib: "17:52",
      isya: "19:01",
    },
  };

  // ⏳ Hitungan Mundur Waktu Sholat
  function updateNextPrayerCountdown() {
    const now = new Date();
    const today = `${now.getDate()} Maret`;
    const prayerTimes = jadwal[today];

    if (!prayerTimes) return;

    const times = ["imsak", "subuh", "dzuhur", "ashar", "maghrib", "isya"];
    let nextPrayer = null;
    let nextPrayerTime = null;

    for (const prayer of times) {
      const [hour, minute] = prayerTimes[prayer].split(":").map(Number);
      const prayerDate = new Date();
      prayerDate.setHours(hour, minute, 0, 0);

      if (prayerDate > now) {
        nextPrayer = prayer;
        nextPrayerTime = prayerDate;
        break;
      }
    }

    if (nextPrayer && nextPrayerTime) {
      const countdownElement = document.getElementById("next-prayer-countdown");

      function updateCountdown() {
        const diff = nextPrayerTime - new Date();
        if (diff <= 0) {
          countdownElement.innerText = `Waktu ${nextPrayer} telah tiba!`;
          clearInterval(interval);
          return;
        }

        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        countdownElement.innerText = ` ${nextPrayer} dalam ${hours}j ${minutes}m ${seconds}d`;
      }

      updateCountdown();
      const interval = setInterval(updateCountdown, 1000);
    }
  }

  updateNextPrayerCountdown();

  // 🔔 Cek Waktu Sholat & Putar Adzan
  function checkPrayerTimes() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const today = `${now.getDate()} Maret`;

    if (!jadwal[today]) return;

    const waktuSholat = jadwal[today];

    function playSound(jam, menit, sound, message) {
      if (parseInt(jam) === hours && parseInt(menit) === minutes) {
        sound.play();
        alert(message);
      }
    }

    playSound(
      ...waktuSholat.imsak.split(":"),
      imsakSound,
      "Waktu Imsak! 🌙 Saatnya berhenti makan dan minum."
    );
    playSound(
      ...waktuSholat.subuh.split(":"),
      subuhSound,
      "Waktu Subuh! 🕌 Sholat Subuh sekarang."
    );
    playSound(
      ...waktuSholat.dzuhur.split(":"),
      adzanSound,
      "Waktu Dzuhur! 🕌 Sholat Dzuhur sekarang."
    );
    playSound(
      ...waktuSholat.ashar.split(":"),
      adzanSound,
      "Waktu Ashar! 🕌 Sholat Ashar sekarang."
    );
    playSound(
      ...waktuSholat.maghrib.split(":"),
      adzanSound,
      "Waktu Maghrib! 🕌 Saatnya berbuka puasa."
    );
    playSound(
      ...waktuSholat.isya.split(":"),
      adzanSound,
      "Waktu Isya! 🕌 Sholat Isya sekarang."
    );
  }

  setInterval(checkPrayerTimes, 30000);
});
