# Calculadora React

Este projeto é uma calculadora interativa desenvolvida em React que permite executar operações matemáticas básicas, como adição, subtração, multiplicação e divisão. Com uma interface simples e responsiva, o usuário pode inserir números, selecionar operações e visualizar os resultados em tempo real.

## Funcionalidades

- **Operações Básicas:**  
  Realize cálculos de adição, subtração, multiplicação e divisão.
- **Entrada de Dados:**  
  Insira números e construa expressões matemáticas utilizando os botões da calculadora.
- **Resultado Imediato:**  
  Ao concluir uma operação, o resultado é exibido instantaneamente.
- **Limpar Memória:**  
  Utilize o botão "AC" para resetar a calculadora e limpar todas as entradas.

## Como Funciona

1. **Entrada dos Números:**  
   O usuário utiliza os botões numéricos para compor o primeiro valor.
2. **Seleção da Operação:**  
   Ao escolher uma operação (por exemplo, "+", "-", "*", "/"), o primeiro valor é armazenado e o display é preparado para a entrada do segundo valor.
3. **Realização do Cálculo:**  
   Após inserir o segundo valor, ao clicar em "=" ou selecionar uma nova operação, o cálculo é realizado e o resultado é exibido.
4. **Continuação dos Cálculos:**  
   O resultado pode ser utilizado em novas operações, permitindo cálculos encadeados.

## Exemplo de Uso

1. O usuário digita o número 72:
   - Clica nos botões "7" e "2", formando o número 72.
2. Seleciona a operação de subtração ("-"):
   - O primeiro valor (72) é armazenado e o display é limpo para o próximo número.
3. Digita o número 2:
   - Ao pressionar o botão "2", o segundo valor é registrado.
4. Pressiona o botão de igualdade ("="):
   - A calculadora exibe o resultado 70, que é o resultado da operação 72 - 2.

## Tecnologias Utilizadas

- **React:** Para a construção da interface interativa.
- **JavaScript (ES6+):** Para implementar a lógica da aplicação.
- **CSS:** Para o design e a estilização da interface.

Clone ou baixe o código-fonte:

```bash
git clone https://github.com/seu-usuario/calculadora-react.git

## Acesse a pasta do projeto:

bash
cd calculadora-react
Instale as dependências:

bash
npm install
Inicie a aplicação:

bash
npm start
A calculadora será aberta no navegador padrão, normalmente em http://localhost:3000.

## Observações
Segurança e Manutenção:
A lógica da calculadora foi implementada sem o uso da função eval, utilizando uma função auxiliar para realizar os cálculos de forma segura.
Expansibilidade:
Este projeto serve como base para aprofundar conhecimentos em React e pode ser expandido com novas funcionalidades, como cálculos mais complexos e operações encadeadas.
Compatibilidade:
Desenvolvido para funcionar em navegadores modernos, garantindo uma experiência fluida e responsiva.
