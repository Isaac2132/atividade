function fatorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    }
    return num * fatorial(num - 1);
}

function combinacao(n, k) {
    if (n < k) {
        return "n deve ser maior ou igual a k";
    }
    return fatorial(n) / (fatorial(k) * fatorial(n - k));
}

document.addEventListener("DOMContentLoaded", function() {
    const calcularBtn = document.getElementById("calcular");
    const nInput = document.getElementById("n");
    const kInput = document.getElementById("k");
    const output = document.getElementById("output");

    calcularBtn.addEventListener("click", function() {
        const n = parseInt(nInput.value);
        const k = parseInt(kInput.value);

        if (isNaN(n) || isNaN(k)) {
            output.textContent = "Por favor, insira valores numéricos para n e k.";
        } else {
            const resultado = combinacao(n, k);
            output.textContent = `A combinação de ${n} elementos tomados ${k} a ${resultado}.`;
        }
    });
});
