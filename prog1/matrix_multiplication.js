const MxGenerator = require('./mx_generator')
const MxIO = require('./mx_io')
const MxMultiplier = require('./mx_multiplier')
const MxComparator = require('./mx_comparator')

if (process.argv.length < 3) {
    console.error('neither k nor k-range specified')
    process.exit(1)
} 

let mxIO = new MxIO()
let mxMultiplier = new MxMultiplier()
if (process.argv[2] === 'test') {
    A = mxIO.loadMx('input_mx1_16x16.json')
    B = mxIO.loadMx('input_mx2_16x16.json')
    AB = mxMultiplier.tradMultiply(A, B)
    AB_rec = mxMultiplier.recMultiply(A,B)
    mxComparator = new MxComparator();
    same = mxComparator.compare(AB, AB_rec)

    console.log("multiplication is correct: "+ same)

    mxIO.storeMx(AB, 'result_16x16.json')
    mxIO.storeMx(AB_rec, 'result_rec16x16.json')


} else {
    let kRange = readKRange(process.argv)

    let mxGenerator = new MxGenerator(10)
    for (let k = kRange[0]; k <= kRange[1]; k++) {
        console.log(k)
        let A = mxGenerator.generateMx(k)
        let B = mxGenerator.generateMx(k)

        mxMultiplier.recMultiply(A, B)
        
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