const MxGenerator = require('./mx_generator')
const LuDecomposer = require('./lu')

const mxSize = 22

let mxGenerator = new MxGenerator(10)
let A = mxGenerator.generateMx(mxSize)
let b = mxGenerator.generateV(mxSize)

//A = [[1, 2, 6],[1, 10, 4],[5, 1, 9]]

let luDecomposer = new LuDecomposer()

const { L, U } = luDecomposer.decompose(A, b)

console.log("L matrix:");
console.log(L);
console.log("U matrix:");
console.log(U);
