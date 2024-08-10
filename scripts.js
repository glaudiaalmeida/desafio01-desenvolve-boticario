
document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('pesquisar');

  input.addEventListener('focus', () => {
    input.placeholder = '';
  });

  input.addEventListener('blur', () => {
    input.placeholder = 'Qual a sua busca para hoje?';
  });
});
