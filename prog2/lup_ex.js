const MxGenerator = require('./mx_generator')
const LupDecomposer = require('./lup')

const mxSize = 22

let mxGenerator = new MxGenerator(10)
let A = mxGenerator.generateMx(mxSize)

console.log("A matrix:")
console.log(A)

let lupDecomposer = new LupDecomposer()

const { L, U, P } = lupDecomposer.decompose(A)


console.log("L matrix:")
console.log(L)
console.log("U matrix:")
console.log(U)
console.log("P matrix:")
console.log(P)
