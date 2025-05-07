const api = {
  async requisicaoApi() {
    try {
      const response = await fetch('http://localhost:3000/Front-end');
      return await response.json();
    } catch (error) {
      alert('Erro ao buscar informações da API');
      throw error;
    }
  }
};

const abaPrincipal = document.querySelector('.container-principal');

function exibirProjetos(projeto) {
  abaPrincipal.innerHTML = "";
  projeto.forEach(projetos => {
    abaPrincipal.innerHTML += 
    `
    <section class="container-principal">
    <div class="hovver-conteudo">
        <div class="conteudo-projetos">
          <div class="container-titulo">
            <h1 class="nome-projeto">${projetos.nome}</h1>
            <div class="borda"></div>
          </div>
          <img class="Projeto-imagem" src="${projetos.imagem}">
              <div class="texto-scroll">
              <p class="paragrafo-projeto">${projetos.sobre}</p>
              </div>
          <div class="div-link">
            <a class="links" href="${projetos.github}" target="_blank">GitHub</a>
            <a class="links" href="${projetos.link}" target="_blank">Site</a>
          </div>
        </div>
      </div>
    </section>
    `;
  });
}

// Chamada da API e exibição dos dados
api.requisicaoApi().then(exibirProjetos);
