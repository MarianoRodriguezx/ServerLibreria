'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Categoria extends Model {

    static get table () {
        return 'user'
    }

    static get primaryKey(){
        return 'id'
    }

    static get createdAtColumn(){
        return 'created_at'
    }

    static get updatedAtColumn () {
        return 'updated_at'
    }

    libros(){
        return this.hasMany('App/Models/Libro')
    }
}

module.exports = Categoria
