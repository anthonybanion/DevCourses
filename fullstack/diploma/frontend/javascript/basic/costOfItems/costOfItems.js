// Obtener los elementos del DOM
const itemInputs = [
  document.getElementById('item1'),
  document.getElementById('item2'),
  document.getElementById('item3'),
  document.getElementById('item4'),
  document.getElementById('item5'),
];

const quantityInputs = [
  document.getElementById('quantity1'),
  document.getElementById('quantity2'),
  document.getElementById('quantity3'),
  document.getElementById('quantity4'),
  document.getElementById('quantity5'),
];

const resultDiv = document.getElementById('result');

// Función para calcular el costo total
function calculateTotalCost() {
 // Previene recarga si se llama desde un formulario

  let totalCost = 0;

  for (let i = 0; i < itemInputs.length; i++) {
    const itemValue = parseFloat(itemInputs[i].value);
    const quantityValue = parseInt(quantityInputs[i].value, 10);

    // Validar datos
    if (
      isNaN(itemValue) || itemValue < 0 ||
      isNaN(quantityValue) || quantityValue < 0
    ) {
      resultDiv.textContent = `Por favor, ingresa valores válidos en el ítem ${i + 1}.`;
      return;
    }

    totalCost += itemValue * quantityValue;
  }

  resultDiv.textContent = `El costo total es: $${totalCost.toFixed(2)}`;
}
