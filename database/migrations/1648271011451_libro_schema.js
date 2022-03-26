'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class LibroSchema extends Schema {
  up () {
    this.create('libros', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('libros')
  }
}

module.exports = LibroSchema
