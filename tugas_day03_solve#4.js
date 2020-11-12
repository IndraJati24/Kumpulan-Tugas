hari = 485
tahun = Math.floor(hari / 360)
console.log(Math.floor(tahun) + " Tahun")
// update hari
hari1 = hari - tahun * 360
bulan = Math.floor(hari1 / 30)
console.log(Math.floor(bulan) + " Bulan")
// update hari
hari2 = hari1 - bulan * 30
minggu = Math.floor(hari2 / 7)
console.log(Math.floor(minggu) + " Minggu")
// update hari
hari3 = hari2 - minggu * 7
console.log(Math.floor(hari3) + " Hari")
