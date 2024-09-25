let filteringEnabled = false;
let evenSize = 1;

document.getElementById('toggleButton').addEventListener('click', () => {
    filteringEnabled = !filteringEnabled;
    document.getElementById('toggleButton').innerText = filteringEnabled ? 'Desactivar Filtrado' : 'Activar Filtrado';
    displayNumbers();
});

document.getElementById('numberInput').addEventListener('input', () => {
    displayNumbers();
});

const displayNumbers = () => {
    const output = document.getElementById('output');
    const numberString = document.getElementById('numberInput').value; // Obtener el valor del input
    output.innerHTML = ''; // Limpiar el output
    evenSize = 1; // Reiniciar el tamaño progresivo para los pares

    // Convertir la cadena en un arreglo de caracteres
    Array.from(numberString).forEach((num) => {
        const numElement = document.createElement('span');
        numElement.innerText = num;

        if (filteringEnabled) {
            // Verificar si el número es par o impar
            if (num % 2 === 0) {
                numElement.style.fontSize = `${evenSize * 20}px`; // Tamaño progresivo para pares
                evenSize++;
            } else {
                numElement.style.fontSize = '20px'; // Tamaño fijo para impares
            }
        } else {
            numElement.style.fontSize = '20px'; // Tamaño fijo si el filtrado no está activado
        }

        output.appendChild(numElement);
        output.appendChild(document.createTextNode(' ')); // Espacio entre números
    });
};

// Inicializar la visualización de números si hay valor por defecto
displayNumbers();
