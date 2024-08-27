// Função para calcular o imposto devido
function calcularImposto() {
    // Obter valores dos campos de entrada
    const rendaBruta = parseFloat(document.getElementById('rendaBruta').value);
    const custo = parseFloat(document.getElementById('custo').value);

    // Verificar se os valores inseridos são válidos
    if (isNaN(rendaBruta) || isNaN(custo)) {
        alert('Por favor, insira valores válidos.');
        return;
    }

    // Calcular lucro
    const lucro = rendaBruta - custo;

    // Definir taxa de imposto (15%)
    const taxaImposto = 0.15;

    // Calcular o imposto devido com base no lucro
    const impostoDevido = lucro > 0 ? lucro * taxaImposto : 0;

    // Selecionar o elemento de resultado
    const resultadoDiv = document.getElementById('resultado');

    // Exibir o resultado
    if (lucro > 0) {
        resultadoDiv.textContent = `O imposto devido sobre o lucro é: R$ ${impostoDevido.toFixed(2)}`;
    } else {
        resultadoDiv.textContent = 'Você teve um prejuízo. Não há imposto a pagar.';
    }
}
