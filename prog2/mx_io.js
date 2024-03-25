const fs = require('fs');

class MxIO {

    loadMx(fileName) {
        return JSON.parse(fs.readFileSync(__dirname+'/io/'+fileName))
    }

    storeMx(mx, fileName) {
        fs.writeFileSync(__dirname+'/io/'+fileName, JSON.stringify(mx))
    }

    printMx(mx, prec) {
        for(let i = 0; i < mx.length; i++) {
            let row = ''
            for(let j = 0; j < mx.length; j++) {
                row += mx[i][j].toFixed(prec) + ',\t'
            }
            console.log(row)
        }
    }

    printV(v, prec) {
        let row = ''
        for(let i = 0; i < v.length; i++) {
            row += v[i].toFixed(prec) + ',\t'
        }
        console.log(row)
    }
}
 
module.exports = MxIO