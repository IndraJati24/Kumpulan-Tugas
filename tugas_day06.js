// TUGAS #1
let input = "hello dunia";
let arrInput = input.split("");
let output = [];
console.log(arrInput);
for (let i = 0; i < input.length; i++) {
  if (
    arrInput[i] === "a" ||
    arrInput[i] === "i" ||
    arrInput[i] === "u" ||
    arrInput[i] === "e" ||
    arrInput[i] === "o"
  ) {
    output.push(arrInput[i]);
  }
}

console.log(output.join(""));

// TUGAS #2
let input1 = "javascript";
let arrInput1 = input1.split("");
let output1 = [];
console.log(arrInput1);
for (let i = 0; i < input1.length; i++) {
  if (
    arrInput1[i] === "a" ||
    arrInput1[i] === "i" ||
    arrInput1[i] === "u" ||
    arrInput1[i] === "e" ||
    arrInput1[i] === "o"
  ) {
    output1.push(arrInput[i]);
  }
}

console.log(output1.length);

// TUGAS#3
let input3 = "purwadhika"
let arrInput2 = input3.split("")
// console.log(arrInput2)
let convertCode = []
for(let i = 0 ; i < arrInput2.length; i++) {
    input3.charCodeAt(i)
    convertCode.push(input3.charCodeAt(i))
}
// console.log(convertCode)
convertCode.sort((a,b) => a -b)
// console.log(convertCode)
let convertAkhir =[]
for(let i = 0; i < convertCode.length; i++) {
    String.fromCharCode(convertCode[i])
    convertAkhir.push(String.fromCharCode(convertCode[i]))
}
console.log(convertAkhir)

// TUGAS #4
let input4 = "botak"
let arrInput4 = input4.split("")
// console.log(arrInput4)
let revInput4 = arrInput4.reverse()
// console.log(revInput4)
let joinInput4 = (revInput4.join("")) 
// console.log(joinInput4)
let output2 =""
for (let i = 0; i < 1; i++) {
    if(input4 === joinInput4){
        output2 += true
    }
    else {
        output2 += false
    }
}
console.log(output2)
