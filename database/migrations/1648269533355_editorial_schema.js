'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EditorialSchema extends Schema {
  up () {
    this.create('editorials', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('editorials')
  }
}

module.exports = EditorialSchema
