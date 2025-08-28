const botoes = document.querySelectorAll("button");
const campoInput = document.getElementById("campo");

let valor1;
let valor2;
let sinal;

function calculo(v1, v2, s){
    switch(s){
        case "+":
            return v1 + v2;
        case "-":
            return v1 - v2;
        case "*":
            return v1 * v2;
        case "/":
            return v1 / v2;
    };
};


const renderCalc = () => {
    valor1 = null;
    valor2 = null;
    sinal = null;
    campoInput.value = ''
}

campoInput.addEventListener("input", () => {
    campoInput.value = campoInput.value.replace(/[^0-9+\-*/]/g, "");
})

campoInput.addEventListener("keydown", (e) => {
    if(e.key === "Enter"){
        campoInput.value = (eval(campoInput.value))
    }
})

botoes.forEach((botao) => {
    botao.addEventListener("click", (e) => {
        let valorAtual = campoInput.value += e.target.value;

        if(botao.id === "botao-sinal"){
            sinal = e.target.value;
            valor1 = Number(valorAtual.slice(0, -1));
            campoInput.value = "";
        }

        if(botao.id === "botao-apagar"){
            campoInput.value = ""
        }

        if(botao.id === "igualdade"){
            valor2 = Number(valorAtual.slice(0, -1));
            campoInput.value = (calculo(valor1, valor2, sinal)); 
            valor1 = null
            valor2 = null
            sinal - null;
        }
    });
})
