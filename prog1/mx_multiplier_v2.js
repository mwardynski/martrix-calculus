class MxMultiplierV2 {
  addNoArray
  mulNoArray
  levelTimeArray

  constructor(k) {
    this.addNoArray = new Array(k+1)
    this.mulNoArray = new Array(k+1)
    this.levelTimeArray = new Array(k+1)
  }
  
  tradMultiply(A, B, l) {
    let AB = []
    for (let i in A) {
      AB[i] = [];
      for (let j in B[0]) {
        let sum = 0
        for (let k in A[0]) {
          let r = this.multiplyWithStats(A[i][k], B[k][j], l)
          sum = this.addWithStats(sum, r, l)
        }
        AB[i][j] = sum
      }
    }
    return AB;
  }

  recMultiply(A, B, lSwitch) {
    let l = Math.log2(A.length)
    let AB = this.multiplyMxs(A, B, l, lSwitch)
    return AB

  }

  multiplyMxs(A, B, l, lSwitch) {
    const startTime = Date.now()
    let result
    if (l===lSwitch) {
      result = this.tradMultiply(A, B, l)
    } else {
      let qsA = this.splitToQuarters(A)
      let qsB = this.splitToQuarters(B)

      let resultQs = [[], []]
      resultQs[0][0] = this.addMxs(this.multiplyMxs(qsA[0][0], qsB[0][0], l-1, lSwitch),
                                  this.multiplyMxs(qsA[0][1], qsB[1][0], l-1, lSwitch), l,)
      resultQs[0][1] = this.addMxs(this.multiplyMxs(qsA[0][0], qsB[0][1], l-1, lSwitch),
                                  this.multiplyMxs(qsA[0][1], qsB[1][1], l-1, lSwitch), l)
      resultQs[1][0] = this.addMxs(this.multiplyMxs(qsA[1][0], qsB[0][0], l-1, lSwitch),
                                  this.multiplyMxs(qsA[1][1], qsB[1][0], l-1, lSwitch), l)
      resultQs[1][1] = this.addMxs(this.multiplyMxs(qsA[1][0], qsB[0][1], l-1, lSwitch),
                                  this.multiplyMxs(qsA[1][1], qsB[1][1], l-1, lSwitch), l)
      
      result = this.flattenQuarters(resultQs)
      
    }
    const endTime = Date.now()
    this.addTimeStats(endTime-startTime, l)
    return result
  }

  splitToQuarters(A) {
    let length = A.length
    let mid = length/2
    let quarters = [[],[]]
    quarters[0][0] = this.extractQuarter(A, 0, 0, length/2)
    quarters[1][0] = this.extractQuarter(A, mid, 0, length/2)
    quarters[0][1] = this.extractQuarter(A, 0, mid, length/2)
    quarters[1][1] = this.extractQuarter(A, mid, mid, length/2)
    return quarters
  }

  extractQuarter(A, sx, sy, length) {
    let ex = sx + length - 1
    let ey = sy + length - 1
    return A.slice(sx, ex + 1).map(i => i.slice(sy, ey + 1))
  }

  flattenQuarters(quarters) {
    let quarterSize = quarters[0][0].length
    let result = this.createNewSquareMx(quarterSize*2)

    for(let o=0; o<quarters.length; o++) {
      for(let p=0; p<quarters[o].length; p++) {
        for(let r=0; r<quarters[o][p].length; r++) {
          for(let s=0; s<quarters[o][p][r].length; s++) {
            result[o*quarterSize+r][p*quarterSize+s] = quarters[o][p][r][s]
          }
        }

      }
    }
    return result
  }

  addMxs(A, B, l) {
    let result = this.createNewSquareMx(A.length)
    for (let i in A) {
      for (let j in A[0]) {
        result[i][j] = this.addWithStats(A[i][j], B[i][j], l)
      }
    }
    return result
  }

  createNewSquareMx(size) {
    let mx = new Array(size)
    for(let i=0; i<size; i++) {
      mx[i] = new Array(size)
    }
    return mx
  }

  addWithStats(a, b, l) {
      this.addNoArray[l] ? this.addNoArray[l]++ : this.addNoArray[l]=1;
      return a + b;
    }
  
  multiplyWithStats(a, b, l) {
    this.mulNoArray[l] ? this.mulNoArray[l]++ : this.mulNoArray[l]=1;
    return a * b;
  }

  addTimeStats(time, l) {
    this.levelTimeArray[l] = this.levelTimeArray[l]+time || time;
  }
}
  
module.exports = MxMultiplierV2