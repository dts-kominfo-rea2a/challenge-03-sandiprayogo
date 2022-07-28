// ! JANGAN DIMOFIDIKASI
const dataBelanjaan = [
  {
    id: "D-10001",
    nama: "Minyak Goreng Delima",
    harga: 25000,
    kuantitas: 2,
  },
  {
    id: "D-10020",
    nama: "Beras Mamos",
    harga: 48000,
    kuantitas: 1,
  },
  {
    id: "F-00010",
    nama: "Larutan Cap Kaki Empat",
    harga: 7500,
    kuantitas: 8,
  },
];

// boleh dimodifikasi bila ingin menggunakan deklarasi fungsi yang normal
function listBelanjaan(arrayObject) {
  let jumlahBarang = [];
  let namaItem;
  for (let list of arrayObject) {
    namaItem = `- ${list.nama} x ${list.kuantitas}`;
    jumlahBarang.push(namaItem);
  }
  return jumlahBarang;
}

// boleh dimodifikasi bila ingin menggunakan deklarasi fungsi yang normal
function totalBelanjaan(arrayObject) {
  let jumlahBarang = [];
  let totalharga;
  let sum = 0;
  let jumlah = null;
  for (let list of arrayObject) {
    jumlah = list.harga * list.kuantitas;
    jumlahBarang.push(jumlah);
  }

  for (let i = 0; i < jumlahBarang.length; i++) {
    sum = sum + jumlahBarang[i];
    totalharga = sum;
  }

  return totalharga;
}

totalBelanjaan(dataBelanjaan);
// ! JANGAN DIMODIFIKASI
const main = () => {
  console.log("Selamat datang customer");

  console.log("Belanjaan Anda adalah:");
  console.log(listBelanjaan?.(dataBelanjaan)?.join("\n"));
  console.log(
    "\nTotal Belanjaan Anda adalah Rp. " + totalBelanjaan?.(dataBelanjaan)
  );
};

main();

module.exports = {
  dataBelanjaan,
  listBelanjaan,
  totalBelanjaan,
};
