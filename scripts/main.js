// DESCRIÇÃO: LÓGICA PRINCIPAL PARA O SIMULADOR DE DADOS E ROLETAS

// 1. SELEÇÃO DOS ELEMENTOS DOM
const rollButton = document.getElementById('roll-button');
const resultDisplay = document.getElementById('result-display');
const MIN_VALUE = 1; // valor minimo do dado
const MAX_VALUE = 6 // valor maximo do dado

// Função para gerar um número inteiro aleatório dentro de um intervalo [min, max]
// @param {number} min - O valor mínimo inclusivo
// @param {number} max - O valor máximo inclusivo.
// @returns {number} O número aleatório gerado.

function generateRandomNumber(min, max) {
    // Math.random() gera um float entre [0, 1)
    // Multiplicamos pela amplitude (max - min + 1)
    // Somamos o mínimo
    // Usamos Math.floor para obter um inteiro
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Função principal que inicia o processo de "rolagem"
function handleRoll() {
    // desabilita o botão para evitar múltiplos cliques durante a animação
    rollButton.disabled = true;
    rollButton.textContent = 'GIRANDO....';

    // adiciona a classe de animação
    resultDisplay.classList.add('rolling');

    // define o tempo que a animação CSS leva (deve ser o mesmo que a animação CSS)
    const animationDuration = 1500; // 3 ciclos de 0.5s = 1.5s (1500ms)

    // espera a animação terminar para mostrar o resultado
    setTimeout(() => {
        // remove a classe de animação
        resultDisplay.classList.remove('rolling');

        // gera o numero aleatorio
        const result = generateRandomNumber(MIN_VALUE, MAX_VALUE);

        // exibe o resultado no DOM
        resultDisplay.textContent = result;

        // atualiza a acessibilidade (ARIA)
        resultDisplay.setAttribute('aria-label', `Resultado do Lançamento: ${result}`);

        // reabilita o botão
        rollButton.disabled = false;
        rollButton.textContent = 'GIRAR / JOGAR DADO';
    }, animationDuration);
}

// 6. ADICIONA O EVENT LISTENER AO BOTÃO
rollButton.addEventListener('click', handleRoll);
console.log('Simulador de dados / roletas pronto! Clique em "GIRAR" para começar.');