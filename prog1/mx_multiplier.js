const { join } = require("path");

class MxMultiplier {
  addNo = 0;
  mulNo = 0;

  tradMultiply(A, B) {
    let AB = [];
    for (let i in A) {
      AB[i] = [];
      for (let j in B[0]) {
        let sum = 0;
        for (let k in A[0]) {
          let r = this.multiplyWithStats(A[i][k], B[k][j]);
          sum = this.addWithStats(sum, r);
        }
        AB[i][j] = sum;
      }
    }
    return AB;
  }

  recMultiply(A, B, res = []) {
    let sub_A = this.subMatrix(A);
    let sub_B = this.subMatrix(B);
    res = this.recMultMatrixes(sub_A, sub_B)
    return this.recQuadComp(res).flat(1);
  }

  recQuadComp(matr,last_ins_index = 0,processed_row = 0,res_row = []) {
    if (processed_row >= matr.length) {
        return res_row;
      }
      if(!res_row[processed_row]){
        res_row[processed_row] = []
      }
    let inn_cell = 0;
    for(let cell = 0; cell < matr[processed_row].length; cell++){
        if(!res_row[processed_row][inn_cell]){
            res_row[processed_row][inn_cell] = []
        }
        if(res_row[processed_row][inn_cell].length >= matr[processed_row].length*2){
            ++inn_cell
            res_row[processed_row][inn_cell] = []
        }
        res_row[processed_row][inn_cell].push(matr[processed_row][cell][last_ins_index])
        res_row[processed_row][inn_cell].push(matr[processed_row][cell][last_ins_index+1])
    }

    if (last_ins_index < matr[0][0].length - 2) {
        return this.recQuadComp(matr,last_ins_index + 2,processed_row,res_row);
      }
      return this.recQuadComp(matr,0,processed_row + 1,res_row);
  }

  recMultMatrixes(sub_A, sub_B, last_row = 0, res = []) {
    if (last_row >= sub_A.length) {
      return res;
    }
    if (!res[last_row]) {
      res[last_row] = [];
    }
    for (let col_ind = 0; col_ind < sub_A.length; col_ind++) {
      let sum = [0, 0, 0, 0];
      for (let col_inner = 0; col_inner < sub_A.length; col_inner++) {
        let mat_A = sub_A[last_row][col_inner];
        let mat_B = sub_B[col_inner][col_ind];
        let multipleMatr = this.tradMultiply(this.divideToHalf([mat_A]), this.divideToHalf([mat_B]));
        sum = this.sumMatrixes(sum, multipleMatr);
      }
      res[last_row].push(sum);
    }
    return this.recMultMatrixes(sub_A, sub_B, last_row + 1, res);
  }

  sumMatrixes(mat_A, mat_B) {
    let sum = [];
    mat_B = String(mat_B).split(",");
    for (let ind = 0; ind < mat_A.length; ind++) {
      let sumNum = +Number(mat_A[ind]) + +Number(mat_B[ind]);
      sum[ind] = sumNum;
    }
    return sum;
  }

  divideToHalf(row) {
    let res = [];
    for (let i = 0; i < row.length; i++) {
      const firstPart = row[i].slice(0, row[i].length / 2);
      const secondPart =  row[i].slice(row[i].length / 2);
      res.push(firstPart);
      res.push(secondPart);
    }
    return res;
  }

  mergeRows(row1, row2) {
    return row1.map((val, ind) => [...val, ...row2[ind]]);
  }

  subMatrix(
    matrix,
    result = []
  ) {
    if (matrix.length==0) {
      return result;
    }
    if(!Array.isArray(matrix[0][0])){
      const createDeepArray = (arr, ind) => {
        let copiedRow = arr[ind];
        arr[ind] = [];
        arr[ind].push(copiedRow)
      }
      createDeepArray(matrix, 0)
      createDeepArray(matrix,1)
    }
    let currentRowData = matrix[0];
    let nextRowData = matrix[1];
    if (currentRowData.every(s => s.length == 2)) {
      result[result.length] = this.mergeRows(currentRowData, nextRowData);
      return this.subMatrix(matrix.slice(2), result);
    }
    matrix[0] = this.divideToHalf(currentRowData);
    matrix[1] = this.divideToHalf(nextRowData);
    return this.subMatrix(matrix, result);
  }

  addWithStats(a, b) {
    this.addNo++;
    return a + b;
  }

  multiplyWithStats(a, b) {
    this.mulNo++;
    return a * b;
  }
}
module.exports = MxMultiplier;
