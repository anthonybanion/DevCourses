function selectUnit(unit){
    console.log(unit);
    const conversion = document.getElementById("conversion-conteiner");
    conversion.innerHTML = "";
    const h2 = document.createElement("h2");
    h2.textContent = `Enter temperature in ${unit}`;
    conversion.appendChild(h2);
    
    // Create input
    const input = document.createElement("input");
    input.type = "number";               
    input.id = "inputValue";             
    input.placeholder = `Enter temperature`;
    input.className = "input__temp";     
    conversion.appendChild(input);

    //Create select
    const select = document.createElement("select");
    select.name = "outputUnit";
    select.id = "outputUnit"; 
    //
    const defaultOption = document.createElement("option");
    defaultOption.textContent = "Output unit";
    defaultOption.disabled = true;
    defaultOption.selected = true;
    select.appendChild(defaultOption);
    // Option   
    const units = ["celsius", "fahrenheit", "kelvin"];
    units.forEach(unit => {
    const option = document.createElement("option");
    option.value = unit;
    option.textContent = unit.charAt(0).toUpperCase() + unit.slice(1);
    select.appendChild(option);
    });
    conversion.appendChild(select);


    // Create button
    const button = document.createElement("button");
    button.type = "button";
    button.id = "sendButton";
    button.className = "input__button";
    button.textContent = "Send";
    button.onclick = () => {
        const outputUnit = document.getElementById("outputUnit").value;
        calculateTemperature(unit, outputUnit);
    };

    conversion.appendChild(button);
}

function calculateTemperature(unit, outputUnit) {
    console.log(outputUnit)
  const value = parseFloat(document.getElementById("inputValue").value);
  if (isNaN(value)) {
    alert("Please enter a valid number.");
    return;
  }

  let result;

  if (unit === outputUnit) {
    result = value; // misma unidad, no se convierte
  } else {
    // Convertir primero a Celsius si es necesario
    let tempInCelsius;
    switch (unit) {
      case "celsius":
        tempInCelsius = value;
        break;
      case "fahrenheit":
        tempInCelsius = (value - 32) * 5 / 9;
        break;
      case "kelvin":
        tempInCelsius = value - 273.15;
        break;
    }

    // Convertir de Celsius a unidad de salida
    switch (outputUnit) {
      case "celsius":
        result = tempInCelsius;
        break;
      case "fahrenheit":
        result = (tempInCelsius * 9 / 5) + 32;
        break;
      case "kelvin":
        result = tempInCelsius + 273.15;
        break;
    }
  }

  // Mostrar el resultado
  const output = document.createElement("p");
  output.textContent = `Converted temperature: ${result.toFixed(2)} ${outputUnit}`;
  document.getElementById("conversion-conteiner").appendChild(output);
}
