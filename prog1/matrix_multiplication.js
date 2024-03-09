const MxGenerator = require('./mx_generator')
const MxIO = require('./mx_io')
const MxMultiplier = require('./mx_multiplier')

if (process.argv.length < 3) {
    console.error('neither k nor k-range specified')
    process.exit(1)
} 

let mxIO = new MxIO()
let mxMultiplier = new MxMultiplier()
if (process.argv[2] === 'test') {
    A = mxIO.loadMx('input_mx1_8x8.json')
    B = mxIO.loadMx('input_mx2_8x8.json')
    AB = mxMultiplier.tradMultiply(A, B)
    mxIO.storeMx(AB, 'result_8x8.json')

} else {
    let kRange = readKRange(process.argv)

    let mxGenerator = new MxGenerator(10)
    for (let k = kRange[0]; k <= kRange[1]; k++) {
        let mx = mxGenerator.generateMx(k)
    }
}


function readKRange(args) {
    let kRange = []
    if (args.length == 4) {
        let kLow = parseInt(args[2])
        let kHigh = parseInt(args[3])
        kRange = [kLow, kHigh]
    } else {
        let k = parseInt(args[2])
        kRange = [k, k]
    }
    return kRange
}