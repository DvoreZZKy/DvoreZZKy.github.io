const decreaceButton = document.querySelector("#decreace");
const increaceButton = document.querySelector("#increace");
const resetButton = document.querySelector("#reset");
const result = document.querySelector("#counter");

let value = 0; 

function render() {
    result.textContent = value;
}

decreaceButton.addEventListener("click", () => {
    if (value > 0)
        value--;
    render();
});

increaceButton.addEventListener("click", () => {
    value++;
    render();
});

resetButton.addEventListener("click", () => {
    value = 0;
    render();
})

render();