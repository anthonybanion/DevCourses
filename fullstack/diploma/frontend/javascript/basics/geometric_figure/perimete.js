const tool = document.getElementById('tool-conteiner');

function selectFigure(figure) {
    console.log(`Selected figure: ${figure}`);
    cleanScreen();
    addSubtitle('Enter the dimensions', tool);

    const inputsByFigure = {
        circle: ['Enter the radius'],
        square: ['Enter height', 'Enter base'],
        triangle: ['first side of the triangle', 'second side of the triangle','third side of the triangle']
    };

    const labels = inputsByFigure[figure] || [];
    labels.forEach(label => addInput(tool, label));
    
    addButton(tool, figure);
}

function cleanScreen() {
    tool.innerHTML = '';
}

function addSubtitle(text, container) {
    const h2 = document.createElement('h2');
    h2.textContent = text;
    container.appendChild(h2);
}

function addInput(container, placeholderText) {
    const input = document.createElement('input');
    input.type = 'number';
    input.placeholder = placeholderText;
    input.className = 'input__item';
    container.appendChild(input);
}

function addButton(container, figure) {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'input__button';
    button.textContent = 'Send';
    button.onclick = () => {
        const inputs = container.querySelectorAll('.input__item');
        const values = Array.from(inputs).map(input => parseFloat(input.value));
        calculatePerimete(figure, values);
    };
    container.appendChild(button);
}

function calculatePerimete(figure, values) {
    let perimete = 0;

    switch (figure) {
        case 'circle':
            if (values.length === 1) perimete = Math.PI * values[0];
            break;
        case 'square':
            if (values.length === 2) perimete = (values[0] + values[1])*2;
            break;
        case 'triangle':
            if (values.length === 3) perimete = values[0] + values[1] + values[2] ;
            break;
        default:
            console.warn('Unknown figure');
            return;
    }

    console.log(`Area of ${figure}: ${perimete.toFixed(2)}`);
    showArea(perimete.toFixed(2), tool);
}

function showArea(perimete, container){
    const p = document.createElement('p');
    p.innerHTML = `The perimete is: ${perimete} m`;
    container.appendChild(p);
}