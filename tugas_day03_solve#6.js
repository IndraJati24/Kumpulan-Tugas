let date = new Date(2017, 10, 17)
let tahun = date.getFullYear()
let tanggal = date.getDate()
let bulan = date.getMonth()

console.log(`Hari ini tanggal ${tanggal} - ${bulan} - ${tahun}`)
console.log(`Besok tanggal ${tanggal+1} - ${bulan} - ${tahun}`)
console.log(`Kemarin tanggal ${tanggal-1} - ${bulan} - ${tahun}`)
