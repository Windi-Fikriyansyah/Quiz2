/** buat segitiga  */

for (let i = 4; i > 0; i--) {
    let row = '';
    for (let j = 1; j <= i; j++) {
        row += j + ' ';
    }
    console.log(row);
}
// output 
// 1 2 3 4 
// 1 2 3 
// 1 2 
// 1 

for (let i = 5; i > 0; i--) {
    let row = '';
    for (let j = i; j > 0; j--) {
        row += j + ' ';
    }
    console.log(row);
}

// output
// 5 4 3 2 1  
// 4 3 2 1  
// 3 2 1
// 2 1  
// 1