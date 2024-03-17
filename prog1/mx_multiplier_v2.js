class MxMultiplierV2 {
    addNoArray;
    mulNoArray;

    constructor(k) {
        this.addNoArray = new Array(k+1)
        this.mulNoArray = new Array(k+1)
    }
    tradMultiply(A, B, AB, l, row_start, row_end, col_start, col_end) {
        for (let i=row_start; i<=row_end; i++) {
          for (let j=col_start; j<=col_end; j++) {
            let sum = 0;
            for (let k=col_start; k<=col_end; k++) {
              let r = this.multiplyWithStats(A[i][k], B[k][j], l);
              sum = this.addWithStats(sum, r, l);
            }
            AB[i][j] = sum;
          }
        }
    }

    addWithStats(a, b, l) {
        this.addNoArray[l] ? this.addNoArray[l]++ : this.addNoArray[l]=1;
        return a + b;
      }
    
      multiplyWithStats(a, b, l) {
        this.mulNoArray[l] ? this.mulNoArray[l]++ : this.mulNoArray[l]=1;
        return a * b;
      }
}
  
module.exports = MxMultiplierV2