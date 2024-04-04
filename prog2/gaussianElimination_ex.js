const Gaussian = require('./gaussianElimination')

const matrixGaussian = require('./data/matrix22x22.json')

let bGaussian = require('./data/vector.json')

let gaussianOrigin = new Gaussian(matrixGaussian, bGaussian);

let gaussianSolutionOrigin = gaussianOrigin.gaussianElimination()

console.log(gaussianSolutionOrigin)







