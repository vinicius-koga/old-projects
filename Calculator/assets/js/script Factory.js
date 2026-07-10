// STYLES
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
function createCalculator() {
    return {
        input: document.querySelector('input[type="text"]'),
        
        init(){
            this.btnClick();
        },

        btnClick() {
            document.addEventListener('click', function(e) {
                const elTarget = e.target;
                if(elTarget.classList.contains('numbBtn')) this.btnToInput(elTarget.innerText);
                if(elTarget.classList.contains('clearBtn')) this.clearInput();
                if(elTarget.classList.contains('eraseBtn')) this.erase();
                if(elTarget.classList.contains('resultBtn')) this.showResult();
            }.bind(this));
        },
        btnToInput(text) {
            this.input.value += text;
        },
        clearInput() {
            this.input.value = '';
        },
        erase() {
            this.input.value = this.input.value.slice(0, -1)
        },
        showResult() {
            let calc = this.input.value;
            if(calc !== ''){
                try {
                    calc = eval(calc);
                    this.input.value = calc;
                } catch(err) {
                    alert('Conta inválida!')
                }
            }
        }
    }
}

const calculator = createCalculator();
calculator.init();
