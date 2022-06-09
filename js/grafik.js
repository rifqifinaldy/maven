console.log("triggered");

const getGrafik = () => {
    // Ambil Value dari input
    let panjang = document.getElementById("grafik").value;
    //   Check Apabila ada angka 0 pada Input
    generateGrafik(panjang)
};

const generateGrafik = (panjang) => {
    console.log(panjang)
    let labels = [];
    let data = [];
    for(let i = 0; i < panjang; i++){
        labels.push(i + 1)
    }
    console.log(labels)
}

const labels = ["January", "February", "March", "April", "May", "June"];

const data = {
  labels: labels,
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      data: [0, 10, 5, 2, 20, 30, 45],
    },
  ],
};

const config = {
  type: "bar",
  data: data,
  options: {},
};

const myChart = new Chart(document.getElementById("myChart"), config);
