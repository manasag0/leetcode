let input = 3;

let matrix = [];

for(let i = 0 ; i<input;i++){
    matrix[i]=[];
    for(let j = 0 ;j<input;j++){
                matrix[i][j] = i+j
    }
}

console.log(matrix)