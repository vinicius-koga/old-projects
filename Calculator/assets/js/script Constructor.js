//STYLES
document.querySelectorAll('.col').forEach((item) => {
    item.addEventListener('mousedown', (e) => {
        e.target.style.border = '2px solid white';
    })
    item.addEventListener('mouseup', (e) => {
        e.target.style.border = '2px solid transparent';
    })
})
document.addEventListener('mouseup', () => {
    document.querySelectorAll('.col').forEach((item) => {
        item.style.border = '2px solid transparent';
    })
})

//FUNCTIONS
function Calculator() {
    const input = document.querySelector('input[type="text"]');

    this.init = () => {
        btnClick();
    }

    const btnClick = () => {
        document.addEventListener('click', e => {
            const elTarget = e.target;
            if(elTarget.classList.contains('numbBtn')) btnToInput(elTarget.innerText);
            if(elTarget.classList.contains('clearBtn')) clearInput();
            if(elTarget.classList.contains('eraseBtn')) erase();
            if(elTarget.classList.contains('resultBtn')) showResult();
        })
    }

    const btnToInput = text => {
        input.value += text;
    }

    const clearInput = () => {
        input.value = '';
    }

    const erase = () => {
        input.value = input.value.slice(0, -1)
    }

    const showResult = () => {
        let calc = input.value;
        if(calc !== ''){
            try {
                calc = eval(calc);
                input.value = calc;
            } catch(err) {
                alert('Conta inválida!');
                input.value = '';
            }
        }
    }
}

const calculadora = new Calculator();
calculadora.init();