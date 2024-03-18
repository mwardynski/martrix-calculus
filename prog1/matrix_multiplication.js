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

} else if (process.argv[2] === 'tradTest') {
    let k = 10
    let mxGenerator = new MxGenerator(10)
    let A = mxGenerator.generateMx(k)     
    let B = mxGenerator.generateMx(k)
    let mxMultiplierV2 = new MxMultiplierV2(k)
    mxMultiplierV2.tradMultiply(A, B, k)
    printResultsForLevels(mxMultiplierV2)
} else {
    let kRange = readKRange(process.argv)

    let mxGenerator = new MxGenerator(10)
    for (let k = kRange[0]; k <= kRange[1]; k++) {
        let A = mxGenerator.generateMx(k)     
        let B = mxGenerator.generateMx(k)
        for (let lSwitch = 2; lSwitch < k; lSwitch++) {
            console.log(`l/k: ${lSwitch}/${k}`)

            let mxMultiplierV2 = new MxMultiplierV2(k)
            mxMultiplierV2.recMultiply(A, B, lSwitch)
            printResultsForLevels(mxMultiplierV2)
        }
    }
}

function printResultsForLevels(multiplier) {
    for(let l=0; l<=multiplier.addNoArray.length; l++) {
        console.log(`${l}\t${multiplier.addNoArray[l]}\t${multiplier.mulNoArray[l]}\t${multiplier.levelTimeArray[l]}`)
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