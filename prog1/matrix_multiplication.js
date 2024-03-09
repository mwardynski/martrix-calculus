
let kRange = []
if (process.argv.length < 3) {
    console.error('neither k nor k-range specified')
    process.exit(1)
} else {
    kRange = readKRange(process.argv)
}

for (let k = kRange[0]; k <= kRange[1]; k++) {
    mxSize = 2 ** k
    console.log("k="+k+", matrix size="+mxSize)
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