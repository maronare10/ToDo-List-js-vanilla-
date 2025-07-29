const formulario = document.getElementById('formulario')
const input = document.getElementById('input')
const listaTarea = document.getElementById('lista-tareas')
const template = document.getElementById('template').content
const fragment = document.createDocumentFragment()
let tareas = {
  1753828069536: {
    id: 1753828069536,
    texto: 'Tarea #1',
    estado: false
  },
  1753828247641: {
    id: 1753828247641,
    texto: 'Tarea #2',
    estado: false
  }  
}

//console.log(Date.now())

formulario.addEventListener('submit', e=> {
  e.preventDefault()
  //Distintas formas de acceder al value del input
  //console.log(e.target[0].value);
  //console.log(e.target.querySelector('input').value);
  //console.log(input.value);
  
  setTarea(e)
})

const setTarea = e => {
  if (input.value.trim() === '') {
    console.log('esta vacío');
    return    
  }
  console.log('diste click');

  formulario.reset()
  
}