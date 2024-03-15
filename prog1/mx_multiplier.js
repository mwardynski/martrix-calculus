const { join } = require("path")

class MxMultiplier {

    addNo = 0
    mulNo = 0

    tradMultiply(A, B) {
        let AB = []
        for (let i in A) {
            AB[i] = []
            for (let j in B[0]) {
                let sum = 0
                for (let k in A[0]) {
                    let r = this.multiplyWithStats(A[i][k], B[k][j])
                    sum = this.addWithStats(sum, r)
                }
                AB[i][j] = sum
            }
        }
        
        return AB
    }

    multNumbers(matrix_one, matrix_two){ 
        let calculateMatEl = (sub_A_el, sub_B_el) => { 
            let first_el_mult = this.multiplyWithStats( Number(sub_A_el[0]),  Number(sub_B_el[0])); 
            let sec_el_mult = this.multiplyWithStats( Number(sub_A_el[1]),  Number(sub_B_el[1])); 
            return this.addWithStats(first_el_mult, sec_el_mult); 
          }; 
          let a = calculateMatEl( 
            [matrix_one[0], matrix_one[1]], 
            [matrix_two[0], matrix_two[2]] 
          ); 
          let b = calculateMatEl( 
            [matrix_one[0], matrix_one[1]], 
            [matrix_two[1], matrix_two[3]] 
          ); 
          let c = calculateMatEl( 
            [matrix_one[2], matrix_one[3]], 
            [matrix_two[0], matrix_two[2]] 
          ); 
          let d = calculateMatEl( 
            [matrix_one[2], matrix_one[3]], 
            [matrix_two[1], matrix_two[3]] 
          ); 
          return [ 
            [a, b], 
            [c, d], 
          ]; 
      }

      sumMatrixes(mat_A, mat_B){ 
        let sum = [] 
        mat_B = String(mat_B).split(",") 
        for(let ind=0; ind<mat_A.length;ind++){ 
            let sumNum = +Number(mat_A[ind]) + +Number(mat_B[ind]) 
            sum[ind] = sumNum 
        } 
        return sum; 
    }

    recMult(A, B, counter=0, block_counter=0, sub_A = [],sub_B= [], res = [],result = [], copyMatr = []){
        let copyOfMatrix = A.map(row => row.slice());
        sub_A = this.subMatrix(A)
        sub_B = this.subMatrix(B)
        res = this.tradMultiply(sub_A, sub_B)
        return res
    } 


    
    subMatrix(matrix, length = matrix.length){
        let blockSize = 2;
        let copyOfMatrix = matrix.map(row => row.slice());
        let subMatrix = [];
        if(length === blockSize){            
            return matrix;
        }
            for (let i = 0; i < matrix.length; i+=2 ){
                for (let j = 0; j <= matrix[i].length; j++){   

                let subArray1 = matrix[i].splice(0, copyOfMatrix[i].length / 2);
                let subArray2 = matrix[i + 1].splice(0, copyOfMatrix[i].length / 2);
                if( length === 4){
                    subMatrix.push([...subArray1, ...subArray2])
                } else{
                    subMatrix.push(subArray1, subArray2)
                    
                }
                
                }
            }
            return this.subMatrix(matrix = subMatrix, length = length/2)
        
    }


    addWithStats(a, b) {
        this.addNo++
        return a + b
    }

    multiplyWithStats(a, b) {
        this.mulNo++
        return a * b
    }
}

module.exports = MxMultiplier