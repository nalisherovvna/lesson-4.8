//    const array = ["Jasur", "Zubayr", "Madina", "Husniya"]
   
   
//    for(let i = 0; i < array.length; i++){
//         console.log(array[i]);
//     } 


let array = [1,2,3,4,5,6,7,8,9,10];

for(let i = 0; i < array.length; i++) {
    let check = array [i] % 2;
    if (check === 0) {
        console.log((array[i]));
    }else{
        console.log("Bu toq son" + array[i]);
    }
}