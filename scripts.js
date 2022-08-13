let bottomDisplay = '',
    topDisplay    = '',
    and1, and2, operator;

function operate(a, b, operator){
    switch(operator){
        case '/':
            return divide(a, b);
        case '*':
            return multiply(a, b);
        case '+':
            return add(a,b);
        case '-':
            return subtract(a,b);
    }

}

function addTopDisplay(display){
    const topScreen  = document.querySelector('.topDisplay');
    topScreen.textContent = topDisplay;
}

function addBottomScreen(){
    
    const bottomScreen  = document.querySelector('.bottomDisplay');

    if(bottomScreen.textContent) bottomScreen.textContent = '';
    bottomScreen.textContent = bottomDisplay;
}

function divide(a, b){
    return (a/b).toFixed(2);
}

function multiply(a, b){
    return a * b;
}

function subtract(a, b){
    return a-b;
}

function add(a, b){
    return a + b;
}

function getClickHelper(e){
    let input = e.target.id;
    
    if(input == '/' || input == '*' || input =='+' || input == '-'){
        topDisplay += (bottomDisplay + input),
        and1     = +bottomDisplay,
        operator = input,
        bottomDisplay = '';
        console.log(operator);
        addTopDisplay(topDisplay);
    }
    else if(input == 'equals'){
        console.log(input);
    }
    else  bottomDisplay += input;
        
    addBottomScreen(input);
}

function getClick(){
    const buttons = Array.from(document.querySelectorAll('.btn'));

    buttons.forEach(btn =>
        btn.addEventListener ('click',e =>
            getClickHelper(e)
        ));
}   

getClick();