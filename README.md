# CRYPTO TX CALCULATOR

Este projeto é uma calculadora de imposto para transações de criptomoedas, agora disponível em uma interface web com HTML, CSS e JavaScript.

## Requisitos

- [Node.js](https://nodejs.org/) instalado no seu computador (para a versão original em Node.js).
- Um navegador web moderno (para a nova versão com HTML e JavaScript).

## Instalação

### Versão Node.js

1. **Clone o Repositório ou Baixe o Script**

   Clone o repositório ou baixe o arquivo `CryptoTxCalculator.js`.

2. **Instale o Pacote `prompt-sync`**

   No diretório onde o arquivo `CryptoTxCalculator.js` está localizado, execute o seguinte comando para instalar o pacote `prompt-sync`:

   ```
   npm install prompt-sync
   ```

### Versão Web
Clone o Repositório ou Baixe os Arquivos

Clone o repositório ou baixe os arquivos index.html, styles.css, e script.js.

Abra o Arquivo HTML no Navegador

Navegue até o diretório onde o arquivo index.html está localizado e abra-o em um navegador web.

### Como Usar
Versão Node.js
Execute o Script

No terminal, navegue até o diretório onde o arquivo CryptoTxCalculator.js está localizado e execute o script com o comando:

node CryptoTxCalculator.js
Digite as Informações Solicitadas

O script solicitará as seguintes informações:

O valor total da venda de criptomoedas.
O custo total das criptomoedas compradas.
Após fornecer essas informações, o script calculará e exibirá o imposto devido com base na taxa de imposto definida (atualmente configurada como 15%).

### Versão Web
Preencha o Formulário

No navegador, insira o valor de venda e o custo de compra das criptomoedas no formulário exibido na página.

Clique em "Calcular"

O imposto devido será calculado e exibido diretamente na página.

### Versão Node.js
```
Bem-vindo ao calculador de imposto para transações de criptomoedas!
Qual foi o valor total da venda de criptomoedas? 10000
Qual foi o custo total das criptomoedas compradas? 7000
O imposto devido sobre o lucro é: R$ 450.00
Observação: Em caso de prejuízo na operação, uma mensagem será exibida indicando que não há imposto a pagar.
```

### Configuração da Taxa de Imposto
A taxa de imposto é atualmente configurada como 15%. Para ajustar essa taxa:

Versão Node.js: Modifique o valor da variável taxaImposto no arquivo CryptoTxCalculator.js.

javascript
Copiar código
const taxaImposto = 0.15; // Ajuste o valor conforme necessário
Versão Web: O mesmo ajuste pode ser feito diretamente no código JavaScript embutido no index.html.

### Contribuições
Se você quiser contribuir para melhorar este projeto, sinta-se à vontade para abrir uma pull request ou relatar problemas.

### Autor
Lucas Rial

### Licença
Este projeto está licenciado sob a MIT LICENSE.
