### VALIDAR TARJETA DE CRÉDITO
+Crear la función llamada *isValidCard*
+Crear dos variables, la primera para que almacene lo que el usuario ingresa y la segunda para almacenar los números invertidos.
+Realizar por medio de un **for** una iteración en la variable anterior pero cuyo recorrido empiza desde el final.
+Lo anterior arroja la variable: backwardsNums.push(parseInt(inputValue[i])); que almacenará los números ingresados al revés y convertidos en número.
+Con otro **for** itero la nuevamente "backwardsNums" para encontrar los números que se encuentran en las posiciones pares para luego multiplicarlos por dos.
+Por medio de un **if** establezco una condición de que aquellos números mayores o iguales a 10 sumen sus cifras por medio de una formúla (n - 9).
+backwardsNums[j] = sumDigit; modifica el array cambiando los pares que eran mayores a 10.
+Luego a través de una suma modifica nuevamente el array incorporando los números impares.
+La variable *totalSumOfNums* por medio de un **for** sumará todos los elementos incluidos en el array.
+Utilizando **if** confirmo si es que el residuo de 10 es igual a 0, si cumple esa condición arrojará que la tarjeta es válida, sino arrojará que la tarjeta es inválida.