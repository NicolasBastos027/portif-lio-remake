const imagens = document.querySelectorAll('.imagem_projetos')

window.addEventListener('scroll', checkImagens)

function checkImagens() {
    const triguerBtn = window.innerHeight / 5 * 4
    imagens.forEach((imagem_projetos) => {
        imagemTop = imagem_projetos.getBoundingClientRect().top
        if (imagemTop < triguerBtn) {
            imagem_projetos.classList.add('show')
        }else {
            imagem_projetos.classList.remove('show')
        }
    })
}
checkImagens()