let isRolling = false;

function rollDice() {
    if (isRolling) return;

    isRolling = true;
    resultElement.classList.remove('show');
    
    rolledIndex = Math.floor(Math.random() * 6);
    setFacesForResult(rolledIndex);

    // Rotación aleatoria + posición final
    const randomX = 720 + (Math.random() * 360); // añade giros para animar
    const randomY = 720 + (Math.random() * 360);
    const finalRotation = rotations[rolledIndex];

    // Extraer ángulos finales según la cara seleccionada
    const match = finalRotation.match(/rotateX\((-?\d+)deg\)\srotateY\((-?\d+)deg\)/);
    const finalX = parseInt(match[1]);
    const finalY = parseInt(match[2]);

    // Aplicar rotación combinada
    const totalX = randomX + finalX;
    const totalY = randomY + finalY;

    dice.style.transform = `rotateX(${totalX}deg) rotateY(${totalY}deg)`;

    // Mostrar resultado después de la animación
    setTimeout(() => {
        resultElement.textContent = `¡Toca hacer: ${faces[rolledIndex]}!`;
        resultElement.classList.add('show');
        isRolling = false;
    }, 1800);
}
