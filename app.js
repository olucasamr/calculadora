
function imprimir (value) {
    const operationValue = document.querySelector('#PrintNumber').innerHTML;

    if(operationValue[operationValue.length - 1] === 'x' || operationValue[operationValue.length - 1] === '+' ||
        operationValue[operationValue.length - 1] === '-' || operationValue[operationValue.length - 1] === '÷' || operationValue === '')
    {
        if(value === '+' || value === '-' || value === 'x' || value === '÷'){
            alert('Não é possível adicionar uma operação, se quiser trocar apague e adicione uma nova ou adicione um número antes.')
        }
        else{
            document.querySelector('#PrintNumber').innerHTML += value;
        }
    } //O if acima faz uma verificação para não deixar imprimir mais de um simbolo de operação

    else{
        document.querySelector('#PrintNumber').innerHTML += value;
    }
}

function clean () {
    const operationValue = document.querySelector('#PrintNumber').innerHTML; //Pega o valor de PrintNumber (Visor da calculadora)
    let operationNewValue = operationValue.split(''); //Transforma o valor de PrintNumber em um array
    operationNewValue.pop(); //Exclui o último elemento do array
    document.querySelector('#PrintNumber').innerHTML = operationNewValue.join(''); //Imprime o resultado novo na tela
}

function results () {

    const operationValue = document.querySelector('#PrintNumber'); //Pega o valor de PrintNumber (Visor da calculadora)
    const newOperation = operationValue.innerHTML.replaceAll('x', '*').replaceAll('÷', '/'); // Transforma todas as ocorrências de x e ÷ em * e / respectivamente
    const resultado = eval(newOperation); //O eval entende a operação que está sendo feita, mesmo sendo uma string, e retorna o resultado 
    operationValue.innerHTML = resultado; //Imprime o resultado final na tela
}

//O código abaixo adiciona um evento de keydown (tecla pressionada) para cada caso da calculadora
document.addEventListener('keydown', function(event) { 
    if (event.key === 'Backspace') {
        clean();
    }
    if (event.key === '1') {
        imprimir(1)
    }
    if (event.key === '2') {
        imprimir(2)
    }
    if (event.key === '3') {
        imprimir(3)
    }
    if (event.key === '4') {
        imprimir(4)
    }
    if (event.key === '5') {
        imprimir(5)
    }
    if (event.key === '6') {
        imprimir(6)
    }
    if (event.key === '7') {
        imprimir(7)
    }
    if (event.key === '8') {
        imprimir(8)
    }
    if (event.key === '9') {
        imprimir(9)
    }
    if (event.key === '0') {
        imprimir(0)
    }
    if (event.key === '+') {
        imprimir('+')
    }
    if (event.key === '-') {
        imprimir('-')
    }
    if (event.key === '/') {
        imprimir('÷')
    }
    if (event.key === '*') {
        imprimir('x')
    }
    if (event.key === 'Enter') {
        results()
    }
})


