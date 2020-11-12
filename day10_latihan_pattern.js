let n = 5;
let pattern = "";
for (let i = 1; i <= n; i++) {
  for (let j = i; j <= 2 * n - i; j++) {
    if (j > 5) {
      pattern += (2 * n) - j + " ";
    } else if (j <= 5) {
      pattern += j + " ";
    }
  }

  pattern += "\n";
}
console.log(pattern);


let pattern1 = ""
for(let i = 1; i <= n; i++) {
    for(let j = i; j <= n ; j++) {
        pattern1 += j
    }
    for(let k = i ; k > 1; k--){
        pattern1 += k - 1
    }
    pattern1 += "\n"
}
console.log(pattern1);