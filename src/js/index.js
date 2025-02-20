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

document.querySelectorAll(".sessoes").forEach(sessao => {
    sessao.addEventListener("click", function() {
        // Remove a classe 'ativo' de todos os itens
        document.querySelectorAll(".sessoes").forEach(item => {
            item.classList.remove("ativo");
        });

        // Adiciona a classe 'ativo' apenas ao item clicado
        this.classList.add("ativo");
    });
});


document.querySelectorAll("nav ul li").forEach(li => {
    li.addEventListener("click", function() {
        const scrollPosition = parseInt(this.getAttribute("data-scroll"));
        window.scrollTo({ top: scrollPosition, behavior: "smooth" });
    });
});

document.querySelectorAll(".intervalo").forEach(intervalo => {
    intervalo.addEventListener("click", function(event) {
        event.preventDefault(); // Evita o comportamento padrão do link
        
        const scrollPosition = parseInt(this.getAttribute("data-scroll"));
        
        window.scrollTo({ top: scrollPosition, behavior: "smooth" });
    });
});

