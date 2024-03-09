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