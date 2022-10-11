function Validate(input) {

    let error= {}
    let regExpSoloLetters = /[^a-zA-Z\s]/g;
    const repetidos = (array)=> new Set(array).size!==array.length // Si hay repetidos me devuelve true
    
  
    if(!input.nombre.trim()){
      error.nombre = 'Se requiere un nombre'
    }else if(regExpSoloLetters.test(input.nombre)){
      error.nombre = 'Ingresar solo letras'  
    }
    if(!input.dificulty){
      error.dificulty = 'Se requiere una dificultad'
    }
    if(!input.duration || input.duration>24 && input.duration > 1){
      error.duration = 'Se requiere una duración(24hs)'
    }
  
    if(!input.temporada){
      error.temporada = 'Se requiere una temporada'
    }
    if(!input.countries[0]){
        error.countries = 'Se requiere seleccionar un país'
    }
    if(repetidos(input.countries)){
      error.countries = 'No se permiten paises duplicados'
    }
    return error
  }
  
  export default Validate;