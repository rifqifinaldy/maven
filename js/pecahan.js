// Function Ketika Button Bilangan di Klik
const getBilangan = () => {
  // Check Apabila Element dengan id List Pecahan Tersedia/Tidak
  const previous = document.getElementById("list-pecahan");

  //   Hapus jika sebelumnya sudah mengeluarkan hasil
  if (previous) {
    previous.remove();
  }

  // Ambil Value dari input
  let bilangan = document.getElementById("bilangan").value;
  //   Check Apabila ada angka 0 pada Input
  if (bilangan.indexOf("0") > -1) {
    alert("Mohon untuk tidak menyisipkan angka 0");
  } else {
    //   Eksekusi function pecahBilangan
    pecahBilangan(bilangan);
  }
};

// Function Untuk Memecah Bilangan
const pecahBilangan = (num, hasil = [], factor = 1) => {
  if (num) {
    const val = (num % 10) * factor;
    hasil.unshift(val);

    return pecahBilangan(Math.floor(num / 10), hasil, factor * 10);
  }
  renderPecahan(hasil);
  return hasil;
};

// Function untuk merender Hasil Ke Dalam HTML
const renderPecahan = (hasil) => {
  ul = document.createElement("ul");
  ul.setAttribute("id", "list-pecahan");

  document.getElementById("list-pecahan-wrapper").appendChild(ul);
  hasil.forEach((item) => {
    let li = document.createElement("li");
    ul.appendChild(li);
    li.innerHTML += item;
  });
};
