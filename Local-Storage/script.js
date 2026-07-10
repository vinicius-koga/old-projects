const checkboxes = document.querySelectorAll(".container-checklist input[type='checkbox']");
const input = document.querySelector('input');
const clearBtn = document.querySelector('#clearBtn');
const saveNote = document.querySelector('#saveNote');

document.addEventListener("DOMContentLoaded", function () {
    // SAVE CHECKBOX STATE
    checkboxes.forEach((checkbox, index) => {
        checkbox.addEventListener('change', () => {
            localStorage.setItem('checkbox_' + index, checkbox.checked);
            triggerAnimation(1);
        })
    })
    // LOAD CHECKBOX STATE
    checkboxes.forEach((checkbox, index) => {
        const saved = localStorage.getItem("checkbox_" + index);
        if (saved === "true") {
            checkbox.checked = true;
        }
    });

    // SAVE INPUT STATE
    input.addEventListener('mousedown', (e) => {
        input.placeholder = "press Enter to save";
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                localStorage.setItem(`exam_`, input.value);
                triggerAnimation(1);
                input.placeholder = "type here";
                input.blur();
            }
        })
    })
    // LOAD INPUT STATE
    const saved_value = localStorage.getItem('exam_')
    if (saved_value) {
        input.value = saved_value
    }
});

clearBtn.addEventListener("mousedown", () => {
    localStorage.clear();
    triggerAnimation(0)
    checkboxes.forEach((checkbox) => {
        checkbox.checked = false;
    });
    input.value = '';
    input.placeholder = "type here";
});
document.addEventListener('mousedown', (e) => {
    if (e.target !== input) {
        input.placeholder = "type here";
    }
})

function triggerAnimation(num) {
    const message = document.createElement("div");
    message.className = "animation";
    if (num === 1) {
        message.id = "saveNote"
        message.textContent = "Saved";
    } else if (num === 0) {
        message.id = "clearNote"
        message.textContent = "LocalStorage cleared";
    }


    document.body.appendChild(message);

    // Remove o elemento quando a animação terminar
    message.addEventListener("animationend", () => {
        message.remove();
    });
}