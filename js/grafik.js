const range = (nilai, min, max) => {
  return nilai >= min && nilai <= max;
};

// Var Interval Dibuat agar bisa start dan stop tanpa harus menulis ulang function
var interval;

// Ketika Button Start
const start = () => {
  let panjang = document.getElementById("grafik").value;
  generateGrafik(panjang);
  interval = setInterval(function () {
    generateGrafik(panjang);
  }, 3000);
  startStop.removeEventListener("click", start);
  startStop.addEventListener("click", stop);
  startStop.value = "stop";
};

// Ketika Button Stop
const stop = () => {
  startStop.removeEventListener("click", stop);
  startStop.addEventListener("click", start);
  startStop.value = "start";
  clearInterval(interval)
};

// Inisialisasi On Click Listener
const startStop = document.getElementById("grafik-button");
startStop.addEventListener("click", start);

// Function untuk mengenerate Grafik dan Data
const generateGrafik = (panjang) => {
  //   Hapus Chart jika telah ada agar saat update tidak menimpa
  const previous = document.getElementById("myChart");
  if (previous) {
    previous.remove();
  }

  // Inisialisasi Dynamic Variabel untuk kemudia digunakan pada chart
  let labels = [];
  let values = [];
  let color = [];

  for (let i = 0; i < panjang; i++) {
    // Buat Label Sesuai dengan Jumlah inputan user
    labels.push(i + 1).toString();
    // Generate Nomor secara acak di range 1 -100
    let random = Math.floor(Math.random() * 100);
    values.push(random);

    // Konfigurasi Warna Berdasarkan Nilai dari variabel Random
    if (range(random, 0, 25)) {
      color.push("rgba(0, 255, 0, 1)");
    } else if (range(random, 25, 50)) {
      color.push("rgba(255, 255, 0, 1)");
    } else if (range(random, 50, 75)) {
      color.push("rgba(255, 0, 0, 1)");
    } else if (range(random, 75, 100)) {
      color.push("rgba(0, 0, 255, 1)");
    }
  }

  // Konfigurasi Data yang akan dibuat
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Soal 2 Maven",
        backgroundColor: color,
        borderColor: "rgb(255, 99, 132)",
        data: values,
      },
    ],
  };

  // Konfigurasi Chart dan Typenya
  const config = {
    type: "bar",
    data: data,
  };

  // Render Ke HTML
  canvas = document.createElement("canvas");
  canvas.setAttribute("id", "myChart");

  document.getElementById("chart-wrapper").appendChild(canvas);
  new Chart(document.getElementById("myChart"), config);
};
