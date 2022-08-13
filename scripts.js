let bottomDisplay = '',
    topDisplay    = '',
    operator      = '',
    onlyOp = true;

function operate(a, b, operator){

    if(a == NaN || b == NaN) return 'ERROR';
    let c = a.replace(operator, '');
    switch(operator){
        case '/':
            if(b == 0) return "ERROR";
            return divide(+c, +b);
        case '*':
            return multiply(+c, +b);
        case '+':
            return add(+c,+b);
        case '-':
            return subtract(+c,+b);
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
    return a%b == 0 ? a/b : (a/b).toFixed(2);
}

function multiply(a, b){
    return (a*b)%1 == 0 ? a * b : a * b.toFixed(2);
}

function subtract(a, b){
    return a-b;
}

function add(a, b){
    return a + b;
}

function isOp(i){
    return (i == '+' || i == '-' || i == '/' || i == "*");
}

function getClickHelper(e){
    let input = e.target.id,
        result;

    if(isOp(input) && onlyOp){
        topDisplay += (bottomDisplay + input),
        operator = input,
        bottomDisplay = '';
        onlyOp = false;
        //addTopDisplay(topDisplay);
    }
    else if(input == 'equals'){
        result = operate(topDisplay, bottomDisplay, operator);
        topDisplay = '';
        bottomDisplay = result;
        onlyOp = true;
    }
    else if(input == 'clear'){
        topDisplay = '';
        bottomDisplay = '';
        onlyOp = true;
    }
    else if(input == 'decimal'){
        bottomDisplay += '.';
    }
    else if(!onlyOp && isOp(input)){
        result = operate(topDisplay,bottomDisplay, operator);
        topDisplay = result + input;
        operator = input;
        bottomDisplay = '';
    }
    else if(bottomDisplay == 'ERROR'){
        topDisplay = '';
        bottomDisplay = '';
        onlyOp = true;
        bottomDisplay += input;
    }
    else  bottomDisplay += input;
    
    addTopDisplay();
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