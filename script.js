function AnimaTeclado() {
    function typeWrite(elemento){
        const textoArray = elemento.innerHTML.split('');
        elemento.innerHTML = ' ';
        textoArray.forEach(function(letra, i){   
          
        setTimeout(function(){
            elemento.innerHTML += letra;
        }, 60 * i)
    
      });
    }
    const titulo = document.querySelector('.titulo-efeito');
    typeWrite(titulo);
}
AnimaTeclado();

