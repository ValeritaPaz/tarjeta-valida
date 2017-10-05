function isValidCard (inputValue) {	
	var inputValue = prompt("Ingrese el número de su tarjeta");
	var backwardsNums = [];  // ALmacena los números invertidos. 
	for (var i = inputValue.length - 1; i >= 0; i--) {   // Recorre la variable para entregar los números invertidos y como números
		backwardsNums.push(parseInt(inputValue[i])); 
	}
	for (var j = 1; j < backwardsNums.length; j += 2) { //Recorrer el array para encontrar las posiciones pares
	   pairNums = backwardsNums[j]*2;  // En esta variable se multiplican el numero de las posiciones pares por 2.
	   if(pairNums >= 10) { //Verfifica si el nnumero es mayor o igual a diez
		  sumDigit = pairNums - 9; //Suma los digitos si cumplen la condicion
		  backwardsNums[j] = sumDigit; // Modificará el valor par mayor o igual a 10, con la suma de sus dígitos.
	   }	
	   else {
		  backwardsNums[j] = pairNums; // Junta en un array los números con posiciones pares modificadas e impares.
	   }
	   var totalSumOfNums = 0;   //Esta nueva variable sumará todos los elementos dentro del array
	   for (var l = 0; l <backwardsNums.length; l++) {  // Por medio de este for, recorre el array para ir sumando sus elementos.
		   totalSumOfNums+=backwardsNums[l]; // Almacena el número ya sumado.
	   }
	

    }
	if (totalSumOfNums % 10 == 0) {  // Se verifica que el resto de 10 de la suma entregada sea igual a 0.
		return alert("Tarjeta de Crédito Válida");  // Entrega un mensaje al usuario si la tarjeta es válida.
	}
	else { 
		return alert ("Tarjeta de Crédito Inválida"); // Entrega un mensaje al usuario si la tarjeta es inválida.
	}	 
}
isValidCard();