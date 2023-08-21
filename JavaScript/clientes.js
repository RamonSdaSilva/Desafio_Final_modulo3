function exibirClientes() {
  const clientesContainer = document.getElementById('clientesContainer');
  const clientes = JSON.parse(localStorage.getItem('clientes')) || [];

  clientesContainer.innerHTML = '';

  clientes.forEach((cliente, index) => {
    const card = document.createElement('div');
    card.classList.add('card');

    const cardContent = document.createElement('div');
    cardContent.classList.add('card-content');

    const nomeElement = document.createElement('h3');
    nomeElement.textContent = `Nome: ${cliente.tutorNome}`;

    const dataElement = document.createElement('p');
    dataElement.textContent = `Data de Atendimento: ${cliente.dataAtendimento}`;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Remover';
    deleteButton.classList.add('remove-button');
    deleteButton.addEventListener('click', (event) => {
      event.stopPropagation();
      removerCliente(index);
    });

    cardContent.appendChild(nomeElement);
    cardContent.appendChild(dataElement);

    card.appendChild(cardContent);
    card.appendChild(deleteButton);

    card.addEventListener('click', () => exibirModal(cliente));

    clientesContainer.appendChild(card);
  });
}
  
  function exibirModal(cliente) {
    const modalContent = `
      <div>
        <p><strong>Nome do Tutor:</strong> ${cliente.tutorNome}</p>
        <p><strong>Telefone:</strong> ${cliente.telefone}</p>
        <p><strong>Endereço:</strong> ${cliente.endereco}</p>
        <p><strong>Data de Atendimento:</strong> ${cliente.dataAtendimento}</p>
        <ul>
          <li><strong>Nome do animal:</strong> ${cliente.animal.nome}</li>
          <li><strong>Idade do animal:</strong> ${cliente.animal.idade}</li>
          <li><strong>Porte do animal:</strong> ${cliente.animal.porte}</li>
        </ul>
      </div>
    `;
  
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = modalContent;
  
    modal.addEventListener('click', () => modal.remove());
  
    document.body.appendChild(modal);
  }
  
  function removerCliente(index) {
    const clientes = JSON.parse(localStorage.getItem('clientes')) || [];
    clientes.splice(index, 1);
    localStorage.setItem('clientes', JSON.stringify(clientes));
    exibirClientes();
  }
  
  exibirClientes();
  