class MxGenerator {
  constructor(numRange) {
    this.numRange = numRange;
  }
  generateMx(k) {
    let mxSize = 2 ** k
    let mx = [];
    for (var i = 0 ; i < mxSize; i++) {
      mx[i] = [];
      for (var j = 0; j < mxSize; j++) {
        mx[i][j] = (Math.random() * 2 * this.numRange - this.numRange)
      }
    }
    return mx
  }    
}

module.exports = MxGenerator