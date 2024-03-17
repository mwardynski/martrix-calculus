const MxGenerator = require('./mx_generator')
const MxIO = require('./mx_io')
const MxMultiplier = require('./mx_multiplier')
const MxMultiplierV2 = require('./mx_multiplier_v2')
const MxComparator = require('./mx_comparator')

if (process.argv.length < 3) {
    console.error('neither k nor k-range specified')
    process.exit(1)
} 

let mxIO = new MxIO()
let mxMultiplier = new MxMultiplier()
let mxComparator = new MxComparator();
if (process.argv[2] === 'test') {
    A = mxIO.loadMx('input_mx1_16x16.json')
    B = mxIO.loadMx('input_mx2_16x16.json')
    AB = mxMultiplier.tradMultiply(A, B)
    AB_rec = mxMultiplier.recMultiply(A,B)
    
    console.log("multiplication is correct: " + mxComparator.compare(AB, AB_rec))

    mxIO.storeMx(AB, 'result_16x16.json')
    mxIO.storeMx(AB_rec, 'result_rec16x16.json')


} else {
    let kRange = readKRange(process.argv)

    let mxGenerator = new MxGenerator(10)
    for (let k = kRange[0]; k <= kRange[1]; k++) {

        console.log(k)

        let A = mxGenerator.generateMx(k)     
        let B = mxGenerator.generateMx(k)
        
        let mxMultiplierV2 = new MxMultiplierV2(k)
        

        const startTrad = Date.now();
        let AB_trad = mxMultiplier.tradMultiply(A, B)
        const endTrad = Date.now();
        console.log(`Execution time - trad: ${endTrad - startTrad} ms`);

        const startRec = Date.now();     
        let AB_rec = mxMultiplierV2.recMultiply(A,B)
        const endRec = Date.now();
        console.log(`Execution time - rec: ${endRec - startRec} ms`);

        console.log("multiplication is correct: " + mxComparator.compare(AB_trad, AB_rec))
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