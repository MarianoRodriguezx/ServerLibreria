'use strict'

class StoreCategoria {
  get rules () {
    return {
      nombre_cat: 'required|unique:categorias,nombre_cat',
      descripcion: 'required',
      estado: 'required'
    }
  }
}

module.exports = StoreCategoria
