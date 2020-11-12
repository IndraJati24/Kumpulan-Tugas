let a = 0
let b = 1
let nextTerm = ""
for(let i = 1; i<=5; i++){
    console.log(a)
    nextTerm = a+b
    a=b
    b = parseInt(nextTerm)
}