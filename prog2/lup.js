class LupDecomposer {
    swapRows(mx, row1, row2) {
        const temp = mx[row1];
        mx[row1] = mx[row2];
        mx[row2] = temp;
    }

    findRowWithMaxValue(mx, col) {
        let maxIndex = col;
        let maxValue = Math.abs(mx[col][col]);
        for (let i = col + 1; i < mx.length; i++) {
            if (Math.abs(mx[i][col]) > maxValue) {
                maxValue = Math.abs(mx[i][col]);
                maxIndex = i;
            }
        }
        return maxIndex
    }

    decompose(A) {
        const n = A.length;
        const U = [];
        const L = Array.from(Array(n), (_, i) => Array.from(Array(n), (_, j) => 0));
        const P = Array.from(Array(n), (_, i) => Array.from(Array(n), (_, j) => i === j ? 1 : 0));
    
        // Copy A into U
        for (let i = 0; i < n; i++) {
            U.push([...A[i]]);
        }
    
        for (let k = 0; k < n - 1; k++) {
            let maxIndex = this.findRowWithMaxValue(U, k)
            if (maxIndex !== k) {
                this.swapRows(U, k, maxIndex)
                this.swapRows(P, k, maxIndex)
                this.swapRows(L, k, maxIndex)
            }
    
            for (let i = k + 1; i < n; i++) {
                const factor = U[i][k] / U[k][k];
                L[i][k] = factor;
                for (let j = k; j < n; j++) {
                    U[i][j] -= factor * U[k][j];
                }
            }
        }
        
        for (let i = 0; i < n; i++) {
            L[i][i] = 1
        }
    
        return { L, U, P };
    }
}

module.exports = LupDecomposer