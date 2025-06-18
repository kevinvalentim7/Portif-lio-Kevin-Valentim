let claro = true;

document.querySelector('.botao1').addEventListener('click', function() {
  if (claro) {
    
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';

   
    const div = document.querySelector('.paginaInteira');
    div.style.backgroundColor = 'white';
    div.style.color = 'black';
  } else {
  
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';

   
    const div = document.querySelector('.paginaInteira');
    div.style.backgroundColor = 'black';
    div.style.color = 'white';
  }
  claro = !claro;
});