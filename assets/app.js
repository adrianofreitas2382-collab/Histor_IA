const app = document.getElementById("app");

function route(){
  const hash = location.hash || "#/";
  const path = hash.replace("#/","");

  if (path === "" ) return home();
  if (path === "stories") return stories();
  if (path === "tutorial") return tutorial();
  if (path === "controls") return controls();
  if (path === "terms") return terms();

  home();
}

window.addEventListener("hashchange", route);
window.addEventListener("load", route);

function home(){
  app.innerHTML = `
    <div class="card">
      <h2 class="title">Criar História</h2>
      <p class="muted">Use o menu acima para navegar.</p>
    </div>
  `;
}

function stories(){
  app.innerHTML = `
    <div class="card">
      <h2 class="title">Minhas Histórias</h2>
      <p class="muted">Lista local (localStorage).</p>
    </div>
  `;
}

function tutorial(){
  app.innerHTML = `
    <div class="card">
      <h2 class="title">Tutorial</h2>
      <p class="muted">Fluxo de leitura interativa em capítulos.</p>
    </div>
  `;
}

function controls(){
  app.innerHTML = `
    <div class="card">
      <h2 class="title">Controles</h2>
      <p class="muted">Ajustes de narração e modelo Gemini.</p>
    </div>
  `;
}

function terms(){
  app.innerHTML = `
    <div class="card">
      <h2 class="title">Termos</h2>
      <p class="muted">Licença de Uso (Gemini).</p>
    </div>
  `;
}
