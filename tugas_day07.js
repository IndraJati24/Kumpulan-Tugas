// Tugas #1

function hurufVokal(input) {
  let output = [];
  for (let i = 0; i < input.length; i++) {
    if (
      (output.indexOf(input[i]) == -1 && (input[i] == "a") ||
      input[i] == "i" ||
      input[i] == "u" ||
      input[i] == "o" ||
      input[i] == "e")
    ) {
      output.push(input[i]);
    }
  }
  return output;
}
console.log(hurufVokal("purwadhika"));
console.log(hurufVokal("javascript").length);
console.log(hurufVokal("hello").length);

// tugas #2

function hurufConsonant(input1) {
  let vocal = [];
  let consonant = [];
  for (let i = 0; i < input1.length; i++) {
    if (
      (vocal.indexOf(input1[i]) == -1 && input1[i] == "a") ||
      input1[i] == "i" ||
      input1[i] == "u" ||
      input1[i] == "o" ||
      input1[i] == "e"
    ) {
      vocal.push(input1[i]);
    } else {
      consonant.push(input1[i]);
    }
  }
  return consonant;
}
console.log(hurufConsonant("reacjs"));
console.log(hurufConsonant("hello"));

// Tugas 3#
function isUpperCase(str) {
  return str == str.toUpperCase() && str != str.toLowerCase();
}
console.log(isUpperCase("I`"));

function alternatingCase(input3) {
  let splInput3 = input3.split("");
  let hasil = []
  for (let i = 0; i < splInput3.length; i++) {
    if (isUpperCase(splInput3[i])) {
      hasil.push(splInput3[i].toLowerCase());
    } else {
      hasil.push(splInput3[i].toUpperCase());
    }
  }
  return hasil;
}
console.log(alternatingCase("InDRa"));

// Tugas #4
function duplicate(input4) {
  let splInput4 = input4.replace(" ", "");
  let dups = [];
  let compare = [];
  for (let i = 0; i < splInput4.length; i++) {
    if (!compare.includes(splInput4[i])) {
      compare.push(splInput4[i]);
    } else {
      dups.push(splInput4[i]);
    }
  }
  return dups;
}
console.log('duplicate string : ',duplicate("i love javascript").length);
