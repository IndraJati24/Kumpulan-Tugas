let massa = 67
let tinggi = 1.78
let IMT = massa / (tinggi**2)

if(IMT < 18.5) {
    console.log("Berat badan kurang")
} else if(IMT <=24.9) {
    console.log(`Massa ${massa} kg & Tinggi ${tinggi} m
    IMT = ${IMT}, Berat badan ideal`)
} else if(IMT <=29.9) {
    console.log("BB berlebih")
} else if(IMT <=39.9) {
      console.log("BB sangat berlebih")
} else {
      console.log("OBESITAS")
}

switch (true) {
    case (IMT <18.5) :
        console.log(`Massa ${massa} kg & Tinggi ${tinggi} m
        IMT = ${IMT}, Berat Badan kurang`)
        break
    case (IMT <=24.9) :
        console.log(`Massa ${massa} kg & Tinggi ${tinggi} m
        IMT = ${IMT}, Berat Badan ideal`)
        break
    case (IMT <=29.9) :
        console.log(`Massa ${massa} kg & Tinggi ${tinggi} m
        IMT = ${IMT}, Berat Badan berlebih`)
        break
    case (IMT <=39.9) :
        console.log(`Massa ${massa} kg & Tinggi ${tinggi} m
        IMT = ${IMT}, Berat Badan sangat berlebih`)
        break
    default :
        console.log(`Massa ${massa} kg & Tinggi ${tinggi} m
        IMT = ${IMT}, Obesitas`)
        break
    
}

