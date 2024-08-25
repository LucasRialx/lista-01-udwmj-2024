# CRYPTO TX CALCULATOR 

Este script em Node.js calcula o imposto devido com base em transações de compra e venda de criptomoedas.

## Requisitos

- [Node.js](https://nodejs.org/) instalado no seu computador.
- Pacote `prompt-sync` para entrada de dados do usuário.

## Instalação

1. **Clone o Repositório ou Baixe o Script**

   Clone o repositório ou baixe o arquivo `calculoIR.js`.

2. **Instale o Pacote `prompt-sync`**

   No diretório onde o arquivo `calculoIR.js` está localizado, execute o seguinte comando para instalar o pacote `prompt-sync`:

   npm install prompt-sync
   
##Como Usar

Execute o Script
No terminal, navegue até o diretório onde o arquivo calculoIR.js está localizado e execute o script com o comando:

node CryptoTxCalculator.js

Digite as Informações Solicitadas

O script solicitará as seguintes informações:

O valor total da venda de criptomoedas.
O custo total das criptomoedas compradas.
Após fornecer essas informações, o script calculará e exibirá o imposto devido com base na taxa de imposto definida (atualmente configurada como 15%).

##Exemplo de Saída

Bem-vindo ao calculador de imposto para transações de criptomoedas!
Qual foi o valor total da venda de criptomoedas? 10000
Qual foi o custo total das criptomoedas compradas? 7000
O imposto devido sobre o lucro é: R$ 450.00

##Configuração da Taxa de Imposto
A taxa de imposto é atualmente configurada como 15% no script. Para ajustar essa taxa, modifique o valor da variável taxaImposto no arquivo calculoIR.js.

const taxaImposto = 0.15; // Ajuste o valor conforme necessário

##Contribuições
Se você quiser contribuir para melhorar este script, sinta-se à vontade para abrir uma pull request ou relatar problemas.

##Autor
Lucas Rial
##Licença
Este projeto está licenciado sob a MIT License.
