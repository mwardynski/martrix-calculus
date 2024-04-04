const Gaussian = require('./gaussianElimination')

const matrixPivoting = require('./data/matrix22x22.json')

let bPivoting = require('./data/vector.json');

let gaussianPivoting = new Gaussian(matrixPivoting, bPivoting);

let gaussianPivotingSolution = gaussianPivoting.gaussianEliminationWithPivoting()

console.log(gaussianPivotingSolution)