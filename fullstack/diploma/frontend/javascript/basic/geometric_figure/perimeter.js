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
        calculatePerimeter(figure, values);
    };
    container.appendChild(button);
}

function calculatePerimeter(figure, values) {
    let perimeter = 0;

    switch (figure) {
        case 'circle':
            if (values.length === 1) perimeter = 2 * Math.PI * values[0];
            break;
        case 'square':
            if (values.length === 2) perimeter = (values[0] + values[1])*2;
            break;
        case 'triangle':
            if (values.length === 3) perimeter = values[0] + values[1] + values[2] ;
            break;
        default:
            console.warn('Unknown figure');
            return;
    }

    console.log(`Area of ${figure}: ${perimeter.toFixed(2)}`);
    showArea(perimeter.toFixed(2), tool);
}

function showArea(perimeter, container){
    const p = document.createElement('p');
    p.innerHTML = `The perimeter is: ${perimeter} m`;
    container.appendChild(p);
}