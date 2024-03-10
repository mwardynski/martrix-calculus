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

    RecursiveMultiply(A, B, rowA = A.length, colA = A[0].length, colB = B[0].length, i = 0, j = 0, k = 0, AB = []) {    
        if (i >= rowA) 
        return AB;
        if (!AB[i]) AB[i] = [];
        if (j < colB) {
            if (k < colA) {
                AB[i][j] = (AB[i][j] || 0) + A[i][k] * B[k][j];
                return this.RecursiveMultiply(A, B, rowA, colA, colB, i, j, k + 1, AB);
            }
            return this.RecursiveMultiply(A, B,  rowA, colA, colB, i, j + 1, 0, AB);
        }
        return this.RecursiveMultiply(A, B, rowA, colA, colB, i + 1, 0, 0, AB);
    }

    addWithStats(a, b) {
        this.addNo++
        return a+b
    }

    multiplyWithStats(a, b) {
        this.mulNo++
        return a*b
    }
}
 
module.exports = MxMultiplier