class LuDecomposer {

    decompose(A, b) {
        const n = A.length;
        const L = [];
        const U = A;

        for (let i = 0; i < n; i++) {
            L.push(new Array(n).fill(0));
        }

        for (let i = 0; i < n; i++) {
            L[i][i] = 1
        }

        for (let row = 1; row < n; row++) {
            for (let i = 0; i < row; i++) {
                let multiplier = U[row][i] / U[i][i]
                L[row][i] = multiplier
                for (let j = 0; j < n; j++) {
                    U[row][j] = U[row][j] - multiplier * U[i][j]
                }
                b[row] = b[row] - multiplier * b[i]
            }
        }

        return { L, U };
    }
}

module.exports = LuDecomposer