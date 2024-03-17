class MxComparator {

    compare(mx1, mx2) {
      for (let i=0; i < mx1.length; i++) {
        for (let j=0; j < mx1[0].length; j++) {
          if (mx1[i][j] !== mx2[i][j])
            return false;
        }
      }
      return true;    
    }
}
  
module.exports = MxComparator