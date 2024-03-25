const MxIO = require('./mx_io')
const LuDecomposer = require('./lu')

const matrix_A = require('./data/matrix22x22.json')
const vector_b = require('./data/vector.json')

const A = matrix_A
const b = vector_b

let mxIo = new MxIO()

console.log("A matrix:")
mxIo.printMx(A, 2)
console.log("b vector:")
mxIo.printV(b, 2)

//A = [[1, 2, 6],[1, 10, 4],[5, 1, 9]]

let luDecomposer = new LuDecomposer()

const { L, U } = luDecomposer.decompose(A, b)

console.log("L matrix:");
mxIo.printMx(L, 2)
console.log("U matrix:");
mxIo.printMx(U, 2)
