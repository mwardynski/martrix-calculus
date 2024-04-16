**Imię i nazwisko: Anastasiya Yahorava, Marcin Wardyński**  
**Grupa: Piątek, 15:00**


## Sprawozdanie do programu normy, współczynnik uwarunkowania i SVD macierzy

### Dane wejściowe:
Do testowania zaimplentowanych funkcji użyliśmy macierzy M:  
[[5, 2, 3, 1, 1]  
[4, 5, 6, 1, 2]  
[7, 8, 9, 1, 3]  
[3, 1, 2, 1, 1]  
[3, 4, 2, 1, 8]]  

### Norma macierzowa ||M||<sub>∞</sub>

#### Algorytm
Oblicz sumy wartości bezwzględnych wierszy macierzy M i zwróć największą sumę.

#### Kod źródłowy
```py
def calculate_inf_norm(A, p='inf'):
    A_abs = np.abs(A)
    row_sums = np.sum(A_abs, axis=1)
    return np.max(row_sums)
```

#### Wynik działania
Dla przykładowej macierzy M, ||M||<sub>∞</sub> = 28 i jest to suma trzeciego wiersza.


### Norma macierzowa ||M||<sub>1</sub>

#### Algorytm
Oblicz sumy wartości bezwzględnych kolumn macierzy M i zwróć największą sumę.

#### Kod źródłowy
```py
def calculate_1_norm(A, p=1):
    A_abs = np.abs(A)
    col_sums = np.sum(A_abs, axis=0)
    return np.max(col_sums)
```

#### Wynik działania
Dla przykładowej macierzy M, ||M||<sub>1</sub> = 22 i jest to suma trzeciej kolumny.

### Norma macierzowa ||M||<sub>2</sub>

#### Algorytm
Oblicz wartości własne macierzy i zwróć wartość bezwzględną większej z nich.

#### Kod źródłowy
```py
def calculate_2_norm(A, p=2):
    eigenvalues, _ = np.linalg.eig(A)
    eigenvalues_abs = np.abs(eigenvalues)
    return np.max(eigenvalues_abs)
```

#### Wynik działania
Dla przykładowej macierzy M, ||M||<sub>2</sub> = 18.68742 i jest to największa wartość bezwzględna spośród wartości własnych macierzy: {18.68742, 6.36604, 2.88442, 0.03105+0.18440i, 0.03105-0.18440i}


### Norma macierzowa ||M||<sub>p</sub>

#### Algorytm
Korzystamy wprost z indukowanej formy macierzowej: ||A||<sub>p</sub> = max<sub>||x||<sub>p</sub>=1</sub>||Ax||<sub>p</sub>  
W pierwszej kolejności znajdujemy wektor x, którego norma ||x||<sub>p</sub>=1, i który daje maksymalny wynik dla: ||Ax||<sub>p</sub>.  
Gdy już znaleźliśmy taki wektor x, stosujemy się do wzoru: ||Ax||<sub>p</sub> i zwracamy wynik.

#### Kod źródłowy
```py
def vector_p_norm(x, p):
        return np.sum(np.abs(x)**p)**(1/p)

def calculate_p_norm(A, p):
    x_init = np.ones(5)
    
    result = minimize(lambda x, A, p: -vector_p_norm(A @ x, p), x_init, args=(A, p),
                    constraints={'type': 'eq', 'fun': lambda x: vector_p_norm(x, p) - 1})

    x_optimal = result.x
    p_norm = vector_p_norm(A @ x_optimal, p)

    return p_norm
```

#### Wynik działania
Dla przykładowej macierzy M, ||M||<sub>3</sub> = 20.32207


### Współczynnik uwarunkowania macierzy

#### Algorytm
Do obliczenia współczynnika uwarunkowania należy zastosować następujący wzór: cond<sub>p</sub>||A|| = ||A||<sub>p</sub> ||A<sup>-1</sup>||<sub>p</sub>  
Algorytm polega na wybraniu właściwej funkcji normy, obliczeniu macierzy odwrotnej i podstawieniu ich do powyższego wzoru.

#### Kod źródłowy
```py
def calculateConditionNumber(A, p):
    spec_norm_funs = {
        'inf': calculate_inf_norm,
        1: calculate_1_norm,
        2: calculate_2_norm,
    }

    norm_fun = spec_norm_funs.get(p, calculate_p_norm)
    A_inv = np.linalg.inv(A)

    A_norm = norm_fun(A, p)
    A_inv_norm = norm_fun(A_inv, p)

    return A_norm * A_inv_norm
```

#### Wynik działania
Przedstawiamy poniżej współczynniki uwarunkowania dla macierzy M i wszystkich rozpatrywanych do tej pory stopni normy:
- cond<sub>∞</sub>||M|| = ||M||<sub>∞</sub> ||M<sup>-1</sup>||<sub>∞</sub> = 751.33333
- cond<sub>1</sub>||M|| = ||M||<sub>1</sub> ||M<sup>-1</sup>||<sub>1</sub> = 528
- cond<sub>2</sub>||M|| = ||M||<sub>2</sub> ||M<sup>-1</sup>||<sub>2</sub> = 99.9305
- cond<sub>3</sub>||M|| = ||M||<sub>3</sub> ||M<sup>-1</sup>||<sub>3</sub> = 435.25437


### SVD

#### Macierz wejściowa:

    M = [[4 9 2]
        [3 5 7]
        [8 1 6]]

#### Wyniki:

    U =
    [[-0.5773502691896256, -0.7071067811865477, -0.40824829046386363], [-0.5773502691896257, 1.281975124255709e-16, 0.8164965809277264], [-0.5773502691896258, 0.7071067811865474, -0.40824829046386174]]

    S =
    [[15.000000000000004, 0, 0]
     [0, 6.9282032302755105, 0]
     [0, 0, 3.4641016151377557]]

    V =
    [[-0.57735027  0.40824829 -0.70710678]
    [-0.57735027 -0.81649658 -0.        ]
    [-0.57735027  0.40824829  0.70710678]]


Wyniki zostałe porównane z matlab

Użyta komenda: [U,S,V] = svd(M)

#### Wyniki matlab:

    U =

    -0.5774   -0.7071   -0.4082
    -0.5774    0.0000    0.8165
     -0.5774    0.7071   -0.4082

    S =

     15.0000         0         0
          0    6.9282         0
           0         0    3.4641

    V =

      -0.5774    0.4082   -0.7071
       -0.5774   -0.8165    0.0000
       -0.5774    0.4082    0.7071


Różnica wyników naszego programu i wyników matlab jest minimalna i wynika z powodu różnicy w dokładności operacji zmiennoprzecinkowych
Oryginalna wartość U[2][2] = 6.092348847630547e-15, czyli widzimy zastosowanie zaokrąglenia

#### Kod źródłowy:

```py
def result(matrix):
    T = transpose(matrix)
    AT = multiply(matrix, T)
    TA = multiply(T, matrix)
    main_matrix = AT if matrix_rank(TA) > matrix_rank(AT) else TA
    np.set_printoptions(suppress=True)
    eigenvalues, eigenvectors = np.linalg.eig(main_matrix)

    sorted_indices = sorted(range(len(eigenvalues)), key=lambda i: eigenvalues[i], reverse=True)
    eigenvalues = eigenvalues[sorted_indices]
    eigenvectors = eigenvectors[:, sorted_indices]

    root = roots(eigenvalues)

    E = diag(root)

    r = count_nonzero(eigenvalues)
    U = zeros_like(matrix)
    for i in range(r):
        u = dot(matrix, eigenvectors[:, i])
        norm_u = norm(u)
        if norm_u != 0:
            U[i] = [x / norm_u for x in u]

    U  = transpose(U)


    return U, E, eigenvectors
```
Macierz podstawowa, na podstawie której zostanią obliczone wartości własne i wektory jest wybierana na podstawie rang macierzy TA i AT. Matryca z największym rangiem zostanie wybrana

Do obliczenia wartości i wektory własne są obliczane za pomocą funkcji linalg.eig z biblioteki numpy

W celu utworzenia macierzy diagonalnej E zostały obliczone pierwiastki własności własnych






