**Imię i nazwisko: Anastasiya Yahorava, Marcin Wardyński**  
**Grupa: Piątek, 15:00**


## Sprawozdanie do programu eliminacji Gaussa i LU faktoryzaja

### Rozmiar macierzy:
Suma dnia i miesiąca dla każdego z nas:
- Anastasiya: 5
- Marcin: 27

Ponieważ rozmiar macierzy 5 wydał się nam bardzo małym przygotowaliśmy sprawozdanie dla różnicy liczb wyliczonej dla każdego z nas, czyli: 27 - 5 = 22

#### Repozytorium kodu dla każdego z zadań:
https://github.com/mwardynski/martrix-calculus/tree/prog2/prog2

### 1. Eliminacja Gaussa

#### 1.1. Pseudokod programu
```
pseudokod
```

#### 1.2. Kod programu


#### 1.3. Wyniki i ich analiza




### 2. Eliminacja Gaussa z pivotingiem

#### 2.1. Pseudokod programu
```
pseudokod
```

#### 2.2. Kod programu


#### 2.3. Wyniki i ich analiza


### 3. LU faktoryzacja

#### 3.1. Pseudokod programu
```
lu_decompose(A, b) {
    n = A.length
    L = construct_L(n)

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

Funkcja wykorzystuje jedną funkcję pomocniczą `construct_L`, która to tworzy macierz L o rozmiarze identycznym do danej macierzy A, a następnie uzupełnia wszystkie jej pola zerami, a przekątną wstawia jedynki.

#### 3.2. Kod programu
https://github.com/mwardynski/martrix-calculus/blob/prog2/prog2/lu.js


#### 3.3. Wyniki i ich analiza

