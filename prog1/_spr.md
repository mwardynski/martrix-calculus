**Imię i nazwisko: Anastazja Jegorowa, Marcin Wardyński**  
**Grupa: Piątek, 15:00**

## Sprawozdanie do programu mnożenia macierzy

### Wariant programu:
Dla macierzy o rozmiarze mniejszym lub równym 2^l × 2^l algorytm tradycyjny.  
Dla macierzy o rozmiarze większym od 2^l × 2^l algorytm rekurencyjny Binéta.

Rozmiar macierzy użytej w zadaniu: 10x10

#### 1. Pseudokod

```
    tradMultiply(A, B) {
        AB = createMatrix(A.length, A[0].length)
        for (i in A) {
            for (j in B[0]) {
                sum = 0
                for (k in A[0]) {
                    sum += A[i][k]*B[k][j]
                }
                AB[i][j] = sum
            }
        }
        return AB;
    }

    binetMultiply(A, B, l, l_switch) {
        if(l == l_switch) {
            return tradMultiply(A, B)
        }
        else {
            qsA = splitToQuarters(A)
            qsB = splitToQuarters(B)

            resultQs = createMatrix(2, 2)
            resultQs[0][0] = addMatrices(binetMultiply(qsA[0][0], qsB[0][0], l-1, l_switch),
                                         binetMultiply(qsA[0][1], qsB[1][0], l-1, l_switch))
            resultQs[0][1] = addMatrices(binetMultiply(qsA[0][0], qsB[0][1], l-1, l_switch),
                                         binetMultiply(qsA[0][1], qsB[1][1], l-1, l_switch))
            resultQs[1][0] = addMatrices(binetMultiply(qsA[1][0], qsB[0][0], l-1, l_switch),
                                         binetMultiply(qsA[1][1], qsB[1][0], l-1, l_switch))
            resultQs[1][1] = addMatrices(binetMultiply(qsA[1][0], qsB[0][1], l-1, l_switch),
                                         binetMultiply(qsA[1][1], qsB[1][1], l-1, l_switch))


            
            return flattenQuarters(resultQs)
        }
    }
```
Krótki opis użytych funkcji pomocniczych:  
*createMatrix* - tworzy macierz o rozmiarze zadanym w parametrach.
*splitToQuarters* - dzieli podaną macierz na ćwiartki, przykładowo z jednej macierzy 4x4 powstaną cztery macierze 2x2.
*addMatrices* - dodaje dwie macierze do siebie.
*flattenQuarters* - operacja odwrotna do *splitToQuarters*, która traktuje podane cztery macierze jako ćwiartki i spłaszcza je do jednej macierzy, w ten sposób przykładowo z czterech ćwiartek 2x2 otrzymujemy macierz 4x4.



#### 2. Wykres czasu przetwarzania w stosuknu do poziomu rekursji dla różnych "l"

![w:700](img/time-small.png)


#### 2. Wykres ilości operacji zmiennoprzecinkowych w stosuknu do poziomu rekursji dla różnych "l"

![w:700](img/flops-small.png)