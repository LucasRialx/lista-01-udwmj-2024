const prompt = require('prompt-sync')();

// Função para calcular o imposto devido.
function calcularImposto(rendaBruta, custo, taxaImposto) {
    const lucro = rendaBruta - custo;
    const impostoDevido = lucro * taxaImposto;
    return impostoDevido;
}

// Solicita as informações para o usuario.
console.log("Bem-vindo ao calculador de imposto para transações de criptomoedas!");

// As perguntas para o usuario.  
const rendaBruta = parseFloat(prompt('Qual foi o valor total da venda de criptomoedas? '));
const custo = parseFloat(prompt('Qual foi o custo total das criptomoedas compradas? '));

// Taxa de imposto, neste caso vou tratar apenas a aliquota de 15%.
const taxaImposto = 0.15;

// Calculando o imposto que será pago pela movimentação.
const impostoDevido = calcularImposto(rendaBruta, custo, taxaImposto);

console.log(`O imposto devido sobre o lucro é: R$ ${impostoDevido.toFixed(2)}`);
