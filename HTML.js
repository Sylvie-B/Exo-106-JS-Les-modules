export {createDiv, createInput, createLabel};

function createDiv(divTarget, divTxt) {
    let newDiv = document.createElement('div');
    newDiv.innerHTML = divTxt;
    divTarget.appendChild(newDiv);
}

function createInput(inTarget, inType, inValue) {
    let newInput = document.createElement('input');
    newInput.type = inType;
    newInput.value = inValue;
    inTarget.appendChild(newInput);
}

function createLabel(labTarget, labFor, labTxt) {
    let newLabel = document.createElement('label');
    newLabel.htmlFor = labFor;
    newLabel.innerHTML = labTxt;
    labTarget.appendChild(newLabel);
}

