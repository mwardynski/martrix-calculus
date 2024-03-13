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
        let sum2 = 0;
        for (let k in A[0]) {
          let r = this.multiplyWithStats(A[i][k], B[k][j]);
          sum = this.addWithStats(sum, r);
        }
        AB[i][j] = sum;
      }
    }
    return AB;
  }

  recMultiply(A, B) {
    let divided_A = this.recQuadDecomp(A);
    let divided_B = this.recQuadDecomp(B);
    let result = this.recMultMatrixes(divided_A, divided_B);
    return this.recQuadComp(result);
  }

  recQuadDecomp(
    matr,
    last_used_rows = 0,
    last_ins_index = 0,
    processed_row = 0,
    res_row = []) {
    if (last_used_rows >= matr.length - 1) {
      return res_row;
    }
    if (!res_row[processed_row]) {
      res_row[processed_row] = [];
    }
    res_row[processed_row].push([
      matr[last_used_rows][last_ins_index],
      matr[last_used_rows][last_ins_index + 1],
      matr[last_used_rows + 1][last_ins_index],
      matr[last_used_rows + 1][last_ins_index + 1],
    ]);

    if (last_ins_index < matr[0].length - 2) {
      return this.recQuadDecomp(
        matr,
        last_used_rows,
        last_ins_index + 2,
        processed_row,
        res_row
      );
    }
    return this.recQuadDecomp(
      matr,
      last_used_rows + 2,
      0,
      processed_row + 1,
      res_row
    );
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
        let multipleMatr = this.multNumbers(mat_A, mat_B);
        
        sum = this.sumMatrixes(sum, multipleMatr);
      }
      res[last_row].push(sum);
    }
    return this.recMultMatrixes(sub_A, sub_B, last_row + 1, res);
  }

  multNumbers(matrix_one, matrix_two) {
    let calculateMatEl = (sub_A_el, sub_B_el) => {
      let first_el_mult = this.multiplyWithStats(
        Number(sub_A_el[0]),
        Number(sub_B_el[0])
      );
      let sec_el_mult = this.multiplyWithStats(
        Number(sub_A_el[1]),
        Number(sub_B_el[1])
      );
      return this.addWithStats(first_el_mult, sec_el_mult);
    };
    let a = calculateMatEl(
      [matrix_one[0], matrix_one[1]],
      [matrix_two[0], matrix_two[2]]
    );
    let b = calculateMatEl(
      [matrix_one[0], matrix_one[1]],
      [matrix_two[1], matrix_two[3]]
    );
    let c = calculateMatEl(
      [matrix_one[2], matrix_one[3]],
      [matrix_two[0], matrix_two[2]]
    );
    let d = calculateMatEl(
      [matrix_one[2], matrix_one[3]],
      [matrix_two[1], matrix_two[3]]
    );
    return [
      [a, b],
      [c, d],
    ]
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
