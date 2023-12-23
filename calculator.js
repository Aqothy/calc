document.addEventListener("DOMContentLoaded", () => {
    let currentNum = "";
    let previousNum = "";
    let operand = null;

    const num = document.querySelectorAll("[data-num]");
    const opera = document.querySelectorAll("[data-opera]");
    const result = document.querySelector("[data-result]");
    const current = document.querySelector("[data-current]");
    const prev = document.querySelector("[data-prev]");
    const clear = document.querySelector("[data-del]");
    const single = document.querySelector("[data-single]");

    num.forEach((btn) => btn.addEventListener("click", number));
    opera.forEach((btn) => btn.addEventListener("click", chooseOperation));
    result.addEventListener("click", compute);
    clear.addEventListener("click", AC);
    single.addEventListener("click", deleteSingle);

    // add function, take in 2 num as para, return sum
    function add(a, b) {
        return a + b;
    }

    //subtract function, take in 2 num as para, return diff
    function subtract(a, b) {
        return a - b;
    }

    //multiply function, take in 2 num as para, return product
    function multiply(a, b) {
        return a * b;
    }

    //divide function, take in 2 num as para, return quotient
    function divide(a, b) {
        return a / b;
    }

    //function to choose operation
    function chooseOperation(e) {
        operand = e.target.textContent;
        currentNum = current.textContent;
        current.textContent = "";
        prev.textContent = `${currentNum} ${operand}`;
    }

    //function for computing result
    function compute() {
        if (operand === null) return;
        previousNum = current.textContent;
        if (operand === "/" && previousNum === "0") {
            AC();
            alert("You can't divide a number by 0!");
            return;
        }
        current.textContent = round(
            operation(operand, currentNum, previousNum)
        );
        prev.textContent = `${currentNum} ${operand} ${previousNum}`;
        operand = null;
    }

    //function for updating current number
    function number(e) {
        if (e.target.textContent === "." && current.textContent.includes("."))
            return;
        else if (e.target.textContent === "." && current.textContent === "") {
            current.textContent += "0" + e.target.textContent;
            return;
        }

        current.textContent += e.target.textContent;
    }

    //function to delete
    function deleteSingle() {
        current.textContent = current.textContent.slice(0, -1);
    }

    //function to clear everything
    function AC() {
        currentNum = "";
        current.textContent = "";
        prev.textContent = "";
        previousNum = "";
        operand = null;
    }

    //function to operate numbers and operand
    function operation(operation, a, b) {
        a = Number(a);
        b = Number(b);
        switch (operation) {
            case "+":
                return add(a, b);
            case "-":
                return subtract(a, b);
            case "x":
                return multiply(a, b);
            case "÷":
                return divide(a, b);
            default:
                return;
        }
    }
    //function for rounding
    function round(num) {
        return Math.round(num * 100) / 100;
    }
});
