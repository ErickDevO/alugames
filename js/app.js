function alterarStatus(gameId) {

    // Obtém o elemento do jogo pelo ID
    const gameItem = document.getElementById(`game-${gameId}`);
    const button = gameItem.querySelector('.dashboard__item__button');
    const imgDiv = gameItem.querySelector('.dashboard__item__img');

    // Verifica se o jogo está alugado ou disponível 
    if (button.classList.contains('dashboard__item__button--return')) {
        // Se estiver alugado, torna-o disponível
        button.textContent = 'Alugar';
        button.classList.remove('dashboard__item__button--return');
        imgDiv.classList.remove('dashboard__item__img--rented');
    } else {
        // Se estiver disponível, torna-o alugado
        button.textContent = 'Devolver';
        button.classList.add('dashboard__item__button--return');
        imgDiv.classList.add('dashboard__item__img--rented');
    }
}