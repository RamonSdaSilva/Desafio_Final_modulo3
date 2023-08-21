function salvarCliente(tutorNome, telefone, endereco, dataAtendimento, animalNome, idade, porte) {
  const clientes = JSON.parse(localStorage.getItem('clientes')) || [];
  const novoCliente = {
    tutorNome,
    telefone,
    endereco,
    dataAtendimento,
    animal: { nome: animalNome, idade, porte }
  };
  clientes.push(novoCliente);
  localStorage.setItem('clientes', JSON.stringify(clientes));

  window.location.href = 'clientes.html';
}

function handleSubmit(event) {
  event.preventDefault();

  const tutorNome = document.getElementById('tutorNome').value;
  const telefone = document.getElementById('telefone').value;
  const endereco = document.getElementById('endereco').value;
  const dataAtendimento = document.getElementById('dataAtendimento').value;
  const animalNome = document.getElementById('animalNome').value;
  const idade = document.getElementById('idade').value;
  const porte = document.getElementById('porte').value;

  salvarCliente(tutorNome, telefone, endereco, dataAtendimento, animalNome, idade, porte);
}

document.getElementById('cadastroForm').addEventListener('submit', handleSubmit);