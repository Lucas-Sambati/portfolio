document.addEventListener("DOMContentLoaded", function () {
    const text = "Desenvolvedor"; // Texto a ser digitado
    const wrapper = document.querySelector(".Typewriter__wrapper");
    let index = 0;
    let isDeleting = false;

    function typeWriter() {
        if (!isDeleting && index < text.length) {
            // Escrevendo letra por letra
            wrapper.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeWriter, 150); // Velocidade de escrita
        } else if (isDeleting && index > 0) {
            // Apagando letra por letra
            wrapper.innerHTML = text.substring(0, index - 1);
            index--;
            setTimeout(typeWriter, 100); // Velocidade de apagamento
        } else {
            // Alternar entre escrever e apagar
            isDeleting = !isDeleting;
            setTimeout(typeWriter, 2000); // Tempo de pausa entre escrita e apagamento
        }
    }

    typeWriter(); // Inicia o efeito
});