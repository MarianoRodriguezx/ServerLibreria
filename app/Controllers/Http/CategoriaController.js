'use strict'

const Categoria = require("../../Models/Categoria")
const rules = require('../../Validators/StoreCategoria')
const { validate } = use('Validator')

class CategoriaController {
    async index({response}){
        try{
            const categoria = await Categoria.all()

            response.status(200).json({mensaje: "Consulta Exitosa", data: categoria})
        }
        catch(error){
            response.status(500).json({mensaje: "Consulta Erronea"})
        }
    }

    async store({response, request}){

        try{
            //const validacion = await validate(request.all(), rules)

            //if(validation.fails()){
            //    response.status(400).json({mensaje:"error en datos"})
            //}

            //else{
           await Categoria.create(request.all())
            //    response.status(200).json({mensaje:"se inserto correctamente", data: validacion})
            //}
        }
        catch(error){

        }
    }
}

module.exports = CategoriaController
