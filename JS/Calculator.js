let num1 = '';
let num2 = '';
let operator = '';

WriteToScreen(0)



function num(val) {

    if (val == 'clear') {
        num1 = '';
        num2 = '';
        operator = '';
        WriteToScreen('')
        return
    }


    //bereken uitkomst
    if (val == '=' && operator && num1 && num2) {
        try {
            WriteToScreen(eval(num1 + operator + num2))
        } catch {
            WriteToScreen("Error")
            num1 = ''
            num2 = ''
            operator = ''
            return
        }

        num1 = (eval(num1 + operator + num2)).toString();
        num2 = ''
        operator = ''
        return
    }

    if (val == '=') {
        return
    }

    if ((num1 == '=' && val=="-") || (num1.slice(-1) == "." && val == ".") || (num2.slice(-1) == "." && val == ".")) {
        return
    }

    if(!num1 && !num2 && !operator){
        if (val == '+' || val == '/' || val == '*' || val == '^') 
        return;
    }

    if ((num1) && (!operator) && (val == '+' || val == '-' || val == '/' || val == '*' || val == '^')) {
        operator = val
        if (val == '^') {
            operator = '**'
            WriteToScreen('^')
            return
        }
        WriteToScreen(operator)
        return
    }

    if (!operator && !num2) {
        if (val == 'PI') {
            num1 += Math.PI
            WriteToScreen(num1)
            return
        }
        num1 += val
        WriteToScreen(num1)
    }

    if (num1 && operator) {
        if (val == 'PI') {
            num2 += Math.PI
            WriteToScreen(num2)
            return
        }
        num2 += val
        WriteToScreen(num2)
    }

function WriteToScreen(value) {
    document.getElementById('screen').value = value
}}