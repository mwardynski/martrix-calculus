const MxGenerator = require("./mx_generator")
const MxIO = require("./mx_io")

if (process.argv.length < 3) {
    console.error('neither k nor k-range specified')
    process.exit(1)
} 

if (process.argv.length === 'test') {

} else {
    let kRange = readKRange(process.argv)

    let mxGenerator = new MxGenerator(10)
    for (let k = kRange[0]; k <= kRange[1]; k++) {
        let mx = mxGenerator.generateMx(k)
        console.log(mx)
        let mxIO = new MxIO()
        mxIO.storeMx(mx, 'input_mx2_8x8.json')
        mxFromFile = mxIO.loadMx('input_mx2_8x8.json')
        console.log(mxFromFile)
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