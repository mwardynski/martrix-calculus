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

    recMult(A_arr, B_arr, C_res = [], AB_ind = 0) {
        let a_len = A_arr.length
        if (AB_ind >= a_len) {
            return C_res;
        }
        for (let B_inn_ind in B[0]) {
            let sum = 0
            if (!C_res[AB_ind]) C_res[AB_ind] = []
            for (let A_inn_ind in A[0]) {
                let r = this.multiplyWithStats(A[AB_ind][A_inn_ind], B[A_inn_ind][B_inn_ind])
                sum = this.addWithStats(sum, r)
            }
            C_res[AB_ind][B_inn_ind] = sum
        }
        return this.recMult(A_arr, B_arr, C_res, AB_ind + 1)
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