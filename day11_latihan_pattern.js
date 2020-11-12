let n = 7
let pattern = ""
let intial = 1
for(let i = 1; i <= n; i++){
    out = intial
    for(let j = 1; j <= (2 * i - 1) && i < 5;j++) {
        if(j == 1 || j == 2 * i - 1){
            pattern += "* "

        }else if(i==3 && j==4 || i==4 && j>=5){
            out-= 2
            pattern +=out +" " 
            out++
        } else {
            pattern +=out + " "
            out++
        }      
    }
    for(let k = 1; k <= 2 * (n-i) + 1 && i >= 5; k++) {
        if(k == 1 || k == 2 * (n-i)+1) {

            pattern +="* "
        }else if(i==5 && k==4){
            out-=2
            pattern+=out+ " "
        } else {
            pattern +=out + " "
            out++
        }          
    }
    pattern += "\n"
}
console.log(pattern)


