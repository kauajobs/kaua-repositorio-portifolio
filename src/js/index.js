
 const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos')
 const porjetosInativos = document.querySelectorAll('.projeto:not(.ativo)')

 botaoMostrarProjetos.addEventListener('click', () => {
    porjetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add("ativo");

    });
    botaoMostrarProjetos.classList.add("remover");

 });
 
  