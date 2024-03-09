const fs = require('fs');

class MxIO {

    loadMx(fileName) {
        return JSON.parse(fs.readFileSync('./io/'+fileName))
    }

    storeMx(mx, fileName) {
        fs.writeFileSync('./io/'+fileName, JSON.stringify(mx))
    }
}
 
module.exports = MxIO