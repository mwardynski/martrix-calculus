const fs = require('fs');

class MxIO {

    loadMx(fileName) {
        return JSON.parse(fs.readFileSync(__dirname+'/io/'+fileName))
    }

    storeMx(mx, fileName) {
        fs.writeFileSync(__dirname+'/io/'+fileName, JSON.stringify(mx))
    }
}
 
module.exports = MxIO