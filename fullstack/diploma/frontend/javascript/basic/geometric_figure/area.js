const tool = document.getElementById('tool-conteiner');

function selectFigure(figure) {
    console.log(`Selected figure: ${figure}`);
    cleanScreen();
    addSubtitle('Enter the dimensions', tool);

    const inputsByFigure = {
        circle: ['Enter the radius'],
        square: ['Enter height', 'Enter base'],
        triangle: ['Enter height', 'Enter base']
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
        calculateArea(figure, values);
    };
    container.appendChild(button);
}

function calculateArea(figure, values) {
    let area = 0;

    switch (figure) {
        case 'circle':
            if (values.length === 1) area = Math.PI * Math.pow(values[0], 2);
            break;
        case 'square':
            if (values.length === 2) area = values[0] * values[1];
            break;
        case 'triangle':
            if (values.length === 2) area = (values[0] * values[1]) / 2;
            break;
        default:
            console.warn('Unknown figure');
            return;
    }

    console.log(`Area of ${figure}: ${area.toFixed(2)}`);
    showArea(area.toFixed(2), tool);
}

function showArea(area, container){
    const p = document.createElement('p');
    p.innerHTML = `The area is: ${area} m<sup>2</sup>`;
    container.appendChild(p);
}