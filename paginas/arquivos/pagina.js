/*
  JavaScript da página Arquivos
  Equipe: Downloads
  Somente a equipe Downloads edita este arquivo.
  Use JavaScript só onde ele tem função real (veja REGRAS.md, seção 12).

  Este arquivo gera a grade de cards a partir de uma lista (array).
  Para adicionar, trocar ou remover um arquivo, basta editar o array
  "listaArquivos" abaixo: título, ícone e link de cada documento.
*/

/* ========== 1. DADOS ========== */

// Cada item tem três informações:
//   titulo -> texto que aparece no card
//   icone  -> ícone mostrado no topo do card
//   link   -> caminho do PDF dentro desta pasta (relativo a index.html)
// Os PDFs estão na subpasta arquivos-da-escola/.
const listaArquivos = [
  { titulo: "Calendário Acadêmico", icone: "📅", link: "arquivos-da-escola/calendario-academico.pdf" },
  { titulo: "Catálogo de Arquivos", icone: "📁", link: "arquivos-da-escola/catalogo-de-arquivos.pdf" },
  { titulo: "Comunicado de Evento", icone: "📢", link: "arquivos-da-escola/comunicado-de-evento.pdf" },
  { titulo: "Formulário de Sugestões", icone: "📝", link: "arquivos-da-escola/formulario-de-sugestoes.pdf" },
  { titulo: "Guia da Biblioteca", icone: "📚", link: "arquivos-da-escola/guia-biblioteca.pdf" },
  { titulo: "Guia de Segurança Digital", icone: "🛡️", link: "arquivos-da-escola/guia-de-seguranca-digital.pdf" },
  { titulo: "Horário das Aulas", icone: "🕐", link: "arquivos-da-escola/horario-das-aulas.pdf" },
  { titulo: "Lista de Materiais", icone: "🎒", link: "arquivos-da-escola/lista-de-materiais.pdf" },
  { titulo: "Projeto de Leitura", icone: "📖", link: "arquivos-da-escola/projeto-de-leitura.pdf" },
  { titulo: "Relatório de Projeto", icone: "📊", link: "arquivos-da-escola/relatorio-de-projeto.pdf" }
];

/* ========== 2. MONTAGEM DOS CARDS ========== */

// Monta um card a partir de uma informação da lista
function montarCard(item) {
  const card = document.createElement("article");
  card.className = "arquivos-card";

  // Ícone do topo (não precisa ser lido em voz alta, por isso aria-hidden)
  const icone = document.createElement("div");
  icone.className = "arquivos-icone";
  icone.setAttribute("aria-hidden", "true");
  icone.textContent = item.icone;

  // Título do card
  const titulo = document.createElement("h2");
  titulo.className = "arquivos-card-titulo";
  titulo.textContent = item.titulo;

  // Botão que baixa o PDF (o atributo download manda o navegador salvar o arquivo)
  const link = document.createElement("a");
  link.className = "botao arquivos-botao";
  link.href = item.link;
  link.setAttribute("download", "");
  link.textContent = "Baixar ↓";

  card.appendChild(icone);
  card.appendChild(titulo);
  card.appendChild(link);
  return card;
}

// Preenche a grade com um card para cada item da lista
function montarGrade() {
  const grade = document.getElementById("arquivos-grid");
  if (!grade) {
    return; // a página não tem a grade, então não faz nada
  }

  for (let i = 0; i < listaArquivos.length; i++) {
    grade.appendChild(montarCard(listaArquivos[i]));
  }
}

/* ========== 3. EXECUÇÃO ========== */

// O script é carregado no fim do <body>, então a grade já existe
montarGrade();
