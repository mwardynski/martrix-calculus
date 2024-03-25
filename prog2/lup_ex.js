const matrix22x22 = require('./data/matrix22x22.json')
const MxIO = require('./mx_io')
const LupDecomposer = require('./lup')

const A = matrix22x22

let mxIo = new MxIO()

console.log("A matrix:")
mxIo.printMx(A, 2)

let lupDecomposer = new LupDecomposer()
const { L, U, P } = lupDecomposer.decompose(A)

console.log("L matrix:")
mxIo.printMx(L, 2)
console.log("U matrix:")
mxIo.printMx(U, 2)
console.log("P matrix:")
mxIo.printMx(P, 0)
