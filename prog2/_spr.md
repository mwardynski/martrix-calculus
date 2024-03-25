**Imię i nazwisko: Anastasiya Yahorava, Marcin Wardyński**  
**Grupa: Piątek, 15:00**


## Sprawozdanie do programu eliminacji Gaussa i LU faktoryzaja

### Rozmiar macierzy:
Suma dnia i miesiąca dla każdego z nas:
- Anastasiya: 5
- Marcin: 27

Ponieważ rozmiar macierzy 5 wydał się nam bardzo mały, przygotowaliśmy sprawozdanie dla różnicy liczb wyliczonej dla każdego z nas, czyli: 27 - 5 = 22

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

