const numbers = [8,2,2,1,9,55,100]

// numbers.forEach((num)=>{
//     console.log(num +' '+ String(num).charCodeAt(0));
// })

console.log(numbers.sort((a,b)=>{
    if(a<b){
        return -1
    } else if(a>b){
        return 1
    } else {
        return 0
    }
}));