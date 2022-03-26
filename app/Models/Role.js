'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Role extends Model {
    static get primaryKey(){
        return 'id'
    }

    static get name(){
        return 'name'
    }

    static get status(){
        return 'status'
    }

    static get createdAtColumn(){
        return 'created_at'
    }

    static get updatedAtColumn () {
        return 'updated_at'
    }

    usuarios(){
        return this.hasMany('App/Models/User')
    }
}

module.exports = Role
