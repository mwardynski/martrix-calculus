**Imię i nazwisko: Anastasiya Yahorava, Marcin Wardyński**  
**Grupa: Piątek, 15:00**


## Sprawozdanie do programu eliminacji Gaussa i LU faktoryzaja

### Dane wejściowe:
Suma dnia i miesiąca dla każdego z nas:
- Anastasiya: 5
- Marcin: 27

Ponieważ rozmiar macierzy 5 wydał się nam bardzo mały, przygotowaliśmy sprawozdanie dla różnicy liczb wyliczonej dla każdego z nas, czyli: 27 - 5 = 22

#### Użyta w zadaniach macierz a:
<pre class="hljs"><code><div style="font-size: 0.4em;">
-3.59,  -2.30,  -4.12,  -4.61,  -3.59,  -4.74,  -2.65,  -4.96,  1.94,   -4.57,  -0.70,  1.05,   3.29,   1.28,   0.46,   -3.86,  -0.17,  -2.89,  1.89,   -2.08,  3.11,   2.57,
0.81,   4.40,   -4.49,  -0.29,  -0.51,  3.52,   2.97,   2.56,   -0.29,  -0.40,  -3.80,  3.64,   3.49,   -4.53,  -3.00,  4.89,   4.89,   -4.35,  2.32,   2.08,   -0.75,  1.22,
-4.90,  -2.86,  2.31,   4.27,   -3.48,  -3.94,  0.05,   2.22,   2.09,   3.45,   -0.98,  -2.21,  3.94,   -3.94,  4.21,   2.03,   1.85,   3.86,   -3.88,  2.23,   1.19,   3.13,
0.87,   -1.77,  -1.47,  -3.37,  -1.08,  3.43,   2.70,   4.98,   1.34,   4.81,   1.82,   1.52,   4.02,   -1.03,  -2.85,  -2.79,  -4.52,  -4.98,  -4.83,  1.52,   -2.75,  1.56,
3.36,   -4.35,  -2.82,  -3.52,  -0.06,  4.89,   -1.72,  4.74,   1.78,   2.07,   -1.47,  2.14,   -0.59,  2.92,   -4.04,  -4.30,  -4.10,  -4.31,  -0.63,  1.53,   2.65,   3.79,
-1.09,  4.13,   2.72,   -1.41,  -4.56,  4.79,   2.61,   -2.50,  1.28,   -0.95,  -2.29,  2.97,   -1.05,  -4.09,  0.39,   0.91,   3.17,   -2.97,  -1.31,  4.47,   -0.24,  -1.55,
-0.80,  3.25,   -1.37,  -3.34,  1.31,   0.03,   0.37,   -0.13,  3.36,   4.08,   -2.06,  2.33,   1.82,   -3.39,  -1.46,  2.81,   -2.57,  4.30,   -2.31,  -1.46,  -4.43,  3.59,
-2.01,  2.48,   -4.34,  1.43,   -2.09,  1.75,   0.31,   0.63,   2.02,   -1.86,  -2.89,  -3.41,  3.58,   2.02,   -0.96,  1.12,   -1.11,  -2.82,  2.84,   -4.41,  -3.01,  3.43,
1.66,   1.83,   -1.08,  1.64,   2.07,   2.42,   2.02,   4.79,   -2.82,  -1.56,  1.80,   4.56,   -0.76,  3.29,   -4.00,  1.80,   0.47,   -4.04,  4.98,   1.20,   -0.03,  0.66,
4.06,   -2.16,  2.16,   -0.43,  -3.32,  0.78,   4.76,   -3.65,  2.07,   -4.54,  1.65,   3.86,   2.81,   1.44,   -4.38,  2.01,   -3.97,  0.49,   -0.46,  -1.21,  -0.43,  -3.21,
-1.94,  1.68,   0.93,   -4.61,  4.41,   -2.26,  3.67,   4.70,   0.52,   -1.06,  1.27,   2.87,   -4.85,  0.93,   -3.18,  1.58,   -4.75,  1.02,   3.31,   -2.42,  0.65,   -0.08,
3.72,   -0.36,  -2.63,  -1.69,  3.14,   -3.55,  4.27,   -3.58,  4.54,   -0.58,  -1.45,  1.81,   -3.79,  -2.96,  3.55,   3.17,   -2.02,  -4.65,  -1.31,  -0.44,  -0.29,  1.56,
4.90,   -2.40,  4.02,   1.60,   -0.55,  0.79,   1.12,   -0.47,  0.34,   1.20,   3.48,   1.10,   -0.77,  -0.32,  4.85,   2.22,   2.18,   3.61,   3.29,   5.00,   -4.93,  -2.45,
-3.78,  4.45,   3.02,   2.68,   2.66,   -0.06,  4.42,   1.18,   0.32,   0.97,   -2.15,  -1.88,  -3.35,  2.17,   -4.35,  -4.17,  -3.82,  -1.60,  -2.51,  3.97,   -4.28,  -1.94,
-1.46,  3.34,   4.96,   -4.95,  -2.73,  0.91,   2.14,   2.97,   -0.04,  1.02,   -0.58,  -3.36,  -1.45,  -4.58,  -2.80,  -0.85,  -4.68,  1.84,   4.47,   -0.10,  1.62,   2.05,
-2.62,  3.06,   -4.65,  2.12,   -4.44,  1.45,   -1.76,  4.21,   -3.59,  -0.19,  4.72,   -1.35,  1.04,   1.99,   1.76,   -1.17,  2.46,   -2.30,  1.83,   1.26,   -4.78,  -4.28,
3.47,   -1.34,  0.79,   3.59,   -1.02,  4.71,   3.74,   4.93,   -1.62,  3.37,   2.70,   -4.82,  1.63,   -3.34,  -4.55,  2.26,   2.65,   1.98,   3.31,   -1.60,  -2.39,  4.06,
2.55,   2.92,   0.85,   -3.90,  -4.98,  -3.71,  4.14,   -1.96,  -3.48,  -1.08,  3.01,   -0.80,  0.68,   -1.06,  -3.74,  2.20,   3.75,   -0.96,  -3.77,  -2.04,  -3.57,  -2.23,
1.91,   4.62,   3.95,   -2.51,  3.46,   3.49,   -1.94,  3.60,   -4.15,  -1.93,  2.25,   -4.75,  0.85,   3.87,   -1.73,  -2.09,  2.81,   1.79,   3.67,   -2.14,  2.85,   -1.51,
-3.76,  1.61,   2.08,   -0.47,  -4.76,  4.06,   3.73,   2.68,   0.28,   1.84,   0.29,   4.40,   1.86,   4.85,   -2.54,  1.43,   3.88,   -3.92,  -0.60,  3.57,   -1.72,  1.86,
-1.03,  -3.10,  -2.73,  1.02,   -0.18,  -4.55,  3.21,   3.03,   -1.23,  4.16,   4.31,   0.87,   1.18,   -0.57,  -2.29,  -1.76,  -2.91,  4.49,   -0.58,  3.91,   2.88,   -2.70,
-0.02,  -3.56,  -0.29,  0.28,   -2.24,  1.10,   1.53,   3.35,   -4.35,  1.30,   1.81,   0.29,   -2.08,  -4.17,  -0.99,  -0.29,  1.72,   -3.64,  -2.14,  -3.60,  -1.40,  4.28,
</div></code></pre>

#### Wektor b:
<pre class="hljs"><code><div style="font-size: 0.4em;">
1.03,   3.58,   -3.11,  3.99,   -3.31,  -2.07,  0.32,   3.94,   1.13,   2.36,   2.59,   2.42,   -1.34,  -2.81,  3.45,   0.90,   2.42,   2.77,   4.27,   3.47,   1.00,   4.80,
</div></code></pre>

<div style="page-break-after: always;"></div>

#### Repozytorium kodu dla każdego z zadań:
https://github.com/mwardynski/martrix-calculus/tree/prog2/prog2

### 1. Eliminacja Gaussa

#### 1.1. Pseudokod programu
```
GaussianElimination(){

for (i = 0; i<matrix.length;i++){
    scale = 1 /matrix[i][i];
    for (j = i; j < matrix.length; j++){
        matrix[i][j] = matrix[i][j] * scale;
            }
    vector[i] = vector[i]*scale;
    if |matrix[i][i]-1| < Epsilon{
        matrix[i][i] = 1;
            }
    gaussianEliminationStep(i)
    }
result = solveEquation()
return result
}
```
Funkcje pomocnicze:
gaussianEliminationStep - służy do modyfikacji kolumn
solveEquation - postępowanie odwrotne Gaussa

#### 1.2. Kod programu
https://github.com/mwardynski/martrix-calculus/blob/prog2/prog2/gaussianElimination.js
#### 1.3. Wyniki i ich analiza




### 2. Eliminacja Gaussa z pivotingiem

#### 2.1. Pseudokod programu
```
gaussianEliminationWithPivoting(){

for (colIndex = 0; colIndex < matrix.length; colIndex++){
    maxRowIndex = findMaxAbsColIndex(colIndex);
    if |matrix[maxRowIndex][colIndex]| !==0{
        swapRows(colIndex,maxColIndex)
        gaussianEliminationStep(colIndex);
    }
    else{
    return null;
    }
}
result = solveEquation();
return result
}
```
Funkcje pomocnicze:
findMaxAbsColIndex - poszukiwanie elementu maksymalnego co do wartości bezwzględnej
swapRows - zamiana wierszy miejscami
gaussianEliminationStep - służy do modyfikacji kolumn, ponieważ po zamianie wartości kolumn wykonuje się krok eliminacji Gaussa
solveEquation - postępowanie odwrotne Gaussa

#### 2.2. Kod programu
https://github.com/mwardynski/martrix-calculus/blob/prog2/prog2/gaussianElimination.js
#### 2.3. Wyniki i ich analiza


### 3. LU faktoryzacja

#### 3.1. Pseudokod programu
```
lu_decompose(A, b) {
    n = A.length
    L = construct_L(n)
    U = copy_mx(A)

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

    return L, U;
}
```

Funkcja wykorzystuje dwie funkcje pomocnicze, `copy_mx` żeby skopiować macierz i `construct_L`, która to tworzy macierz L o rozmiarze identycznym do danej macierzy A, a następnie uzupełnia wszystkie jej pola zerami, a po przekątnej wstawia jedynki.

#### 3.2. Kod programu
https://github.com/mwardynski/martrix-calculus/blob/prog2/prog2/lu.js


#### 3.3. Wyniki i ich analiza

### 4. LU faktoryzacja z pivotingiem

#### 4.1. Pseudokod programu
```
lup_decompose(A) {
    n = A.length
    U = copy_mx(A)
    L = create_empty_mx(n)
    P = create_empty_mx(n)
    fill_diagonal(P)

    for (k = 0; k < n - 1; k++) {
        max_idx = find_row_idx_with_max_val(U, k)
        if (max_idx !== k) {
            swap_rows(U, k, max_idx)
            swap_rows(P, k, max_idx)
            swap_rows(L, k, max_idx)
        }

        for (i = k + 1; i < n; i++) {
            factor = U[i][k] / U[k][k];
            L[i][k] = factor;
            for (j = k; j < n; j++) {
                U[i][j] -= factor * U[k][j];
            }
        }
    }
    fill_diagonal(L)

    return L, U, P;
}
```
Powyższy kod wykorzystuje trochę więcej funkcji pomocniczych, niż zwykła LU faktoryzacja. Oto one wraz z krótkim opisem:
- `copy_mx` - jak i w LU faktoryzacji, funkcja ta kopiuje zadaną macierz
- `create_empty_mx` - funkcja tworzy macierz kwadratową o zadanej wielkości i uzupełnia ją zerami
- `fill_diagonal` - funkcja uzupełnia przekątną macierzy jedynkami
- `find_row_idx_with_max_val` - zwraca numer wiersza z elementem o największej wartości bezwzględnej z macierzy *U* i kolumny *k* odliczając od wiersza *k*
-  `swap_rows` - w zadanej macierzy zamienia miejscami wiersze o podanych numerach



#### 4.2. Kod programu
https://github.com/mwardynski/martrix-calculus/blob/prog2/prog2/lup.js


#### 3.3. Wyniki i ich analiza

