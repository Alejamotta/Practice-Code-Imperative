// vanilla JavaScript


//Recuperar el boton
const button = document.querySelector('button')

//al hacer click, se ejecuta una funcion 
button.addEventListener('click', function () {

    // recuperar el id de un atributo en HTML
    const id = button.getAttribute('data-id')

    //llamar  a un servicio para actualizar si megusta 
    //toogleLike(id)

    if (button.classList.contains('Liked')) {
        button.classList.remove('Liked')
        button.innerText = 'Me gusta'
    } else {
        button.classList.add('Liked')
        button.innerText = 'Quitar Me gusta'
    }
})

