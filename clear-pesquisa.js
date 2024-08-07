document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('pesquisar');
    const clearButton = document.getElementById('clear__input');
  
    input.addEventListener('focus', () => {
      clearButton.style.display = 'block';
    });
  
    input.addEventListener('blur', () => {
      if (input.value === '') {
        clearButton.style.display = 'none';
      }
    });
  
    clearButton.addEventListener('click', () => {
      input.value = '';
      clearButton.style.display = 'none';
      input.focus();
    });
  });