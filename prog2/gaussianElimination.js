class GaussianElimination {
    constructor(matrix, vector) {
        this.matrix = matrix;
        this.vector = vector;
    }
            

    gaussianElimination() {
        const MxIO = require('./mx_io')
        let mxIO = new MxIO()
        const n = this.matrix.length;

        for (let i = 0; i < n; i++) {
            const scale = 1 / this.matrix[i][i];
            for (let j = i; j < n; j++) {
                this.matrix[i][j] *= scale;
            }
            this.vector[i] *= scale;
            
            if (Math.abs(this.matrix[i][i] - 1) < Number.EPSILON) {
                this.matrix[i][i] = 1;
            }
            this.gaussianEliminationStep(i);
            
        }
        console.log("Matrix after Gaussian elimination")
        mxIO.printMx(this.matrix,2)

        console.log("Vector after Gaussian elimination")
        mxIO.printV(this.vector,2)
        return this.solveEquation();
    }

   solveEquation() {
        const n = this.matrix.length;
        const solution = new Array(n).fill(0);
    
        for (let i = n - 1; i >= 0; i--) {
            solution[i] = this.vector[i];
    
            for (let j = i + 1; j < n; j++) {
                solution[i] -= this.matrix[i][j] * solution[j];
            }
    
            solution[i] /= this.matrix[i][i];
        }
    
        return solution;
    }

    findMaxAbsRowIndex(colIndex) {
        let maxAbsVal = Math.abs(this.matrix[colIndex][colIndex]);
        let maxIndex = colIndex;

        for (let i = colIndex + 1; i < this.matrix.length; i++) {
            const absVal = Math.abs(this.matrix[i][colIndex]);
            if (absVal > maxAbsVal) {
                maxAbsVal = absVal;
                maxIndex = i;
            }
        }
        return maxIndex;
    }

    gaussianEliminationStep(colIndex) {
        const n = this.matrix.length;
        
        for (let rowIndex = colIndex + 1; rowIndex < n; rowIndex++) {
            const factor = this.matrix[rowIndex][colIndex] / this.matrix[colIndex][colIndex];
            for (let j = colIndex; j < n; j++) {
                this.matrix[rowIndex][j] -= factor * this.matrix[colIndex][j];
            }
            this.vector[rowIndex] -= factor * this.vector[colIndex];
        }
    }

    gaussianEliminationWithPivoting() {
        const MxIO = require('./mx_io')
        let mxIO = new MxIO()
        const n = this.matrix.length;
        for (let colIndex = 0; colIndex < n; colIndex++) {
            let maxRowIndex = this.findMaxAbsRowIndex(colIndex);
            if (Math.abs(this.matrix[maxRowIndex][colIndex]) !== 0) {
                this.swapRows(colIndex, maxRowIndex)
                this.gaussianEliminationStep(colIndex);
            } else {
                return null;
            }
        }
        console.log("Matrix after Gaussian elimination with pivoting")
        mxIO.printMx(this.matrix,2)

        console.log("Vector after Gaussian elimination with pivoting")
        mxIO.printV(this.vector,2)
        return this.solveEquation();
    }

    swapRows(row1, row2) {
        [this.matrix[row1], this.matrix[row2]] = [this.matrix[row2], this.matrix[row1]];
        [this.vector[row1], this.vector[row2]] = [this.vector[row2], this.vector[row1]];
    }
}
module.exports = GaussianElimination
