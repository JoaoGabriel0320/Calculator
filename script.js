<<<<<<< HEAD
function insertToDisplay(data){
    document.querySelector('#display').value += data
 }
 
 function clean(){
     document.querySelector('#display').value = ''
 }
 
 function back(){
     const display = document.querySelector('#display')
     display.value = display.value.slice(0, -1)
 }
 
 function result(){
     const display = document.querySelector('#display')
     try {
         display.value = eval(display.value)
     } catch {
         display.value =  'Error'
 
     }
 }
=======
function insertToDisplay(data) {
    const display = document.querySelector('#display');
    const currentValue = display.value;
    const lastChar = currentValue.slice(-1);

    // Verificar se 'data' é um operador e impedir repetição de operadores consecutivos
    if (['+', '-', '*', '/'].includes(data) && ['+', '-', '*', '/'].includes(lastChar)) {
        return; // Não adiciona o operador se o último caractere já for um operador
    }

    display.value += data;
}

function clean() {
    document.querySelector('#display').value = '';
}

function back() {
    const display = document.querySelector('#display');
    display.value = display.value.slice(0, -1); // Corrigido para remover 1 caractere
}

function result() {
    const display = document.querySelector('#display');
    try {
        display.value = eval(display.value); 
    } catch {
        display.value = 'Error';
    }
}
>>>>>>> cbf2ef0 (Mudança nos sinais)
