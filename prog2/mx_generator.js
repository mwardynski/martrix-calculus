class MxGenerator {
  constructor(numRange) {
    this.numRange = numRange;
  }
  generateMx(mxSize) {
    let mx = [];
    for (let i = 0 ; i < mxSize; i++) {
      mx[i] = [];
      for (let j = 0; j < mxSize; j++) {
        mx[i][j] = Math.random() * 2 * this.numRange - this.numRange
      }
    }
    return mx
  }
  
  generateV(vSize) {
    let v = [];
    for (let i = 0 ; i < mxSize; i++) {
      mx[vSize] = Math.random() * 2 * this.numRange - this.numRange
    }
    return v
  }
}

module.exports = MxGenerator