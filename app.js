let amigos = [];

function adicionarAmigo(){
  let input = document.getElementById("amigo");
  let nome = input.value.trim();

  if(nome == '') {
    alert("Por favor, digite um nome válido");
    return;
  }

  amigos.push(nome);
  input.value = '';
  
  atualizarLista();
}

function atualizarLista() {
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = ""; // limpa a lista antes de atualizar

  for (let i = 0; i < amigos.length; i++) {
    let item = document.createElement("li"); // cria um <li>
    item.textContent = amigos[i]; // coloca o nome dentro
    lista.appendChild(item); // adiciona <li> na <ul>
  }
}

function sortearAmigo(){
  if (amigos.length === 0) {
    alert("A lista de amigos está vazia!");
    return;
  }

  let indiceSorteado = Math.floor(Math.random() * amigos.length);
  let amigoSorteado = amigos[indiceSorteado];

  let resultado = document.getElementById("resultado");
  resultado.innerHTML = "🎉 Amigo sorteado é: " + amigoSorteado + "🎉";
}
