'use strict'

const Rol = require("../../Models/Role")
const rules = require('../../Validators/StoreCategoria')
const { validate } = use('Validator')

class RoleController {
    async index({response}){
        try{
            const rol = await Rol.all()

            response.status(200).json({mensaje: "Consulta Exitosa", data: rol})
        }
        catch(error){
            response.status(500).json({mensaje: "Consulta Erronea"})
        }
    }

    async store({response, request}){
        try{

        
        const rol = await validate(request.all(), rules)

        if(validation.fails()){
            response.status(400).json({mensaje:"error en datos"})
        }

        else{
            Rol.create(validacion)
            response.status(200).json({mensaje:"se inserto correctamente", data: rol})
        }
    }
        catch(error){
            response.status(400).json({mensaje:"error en datos"})
        }
    }


    async show({params, response}){
        try{
            const rol = await Rol.findOrFail(params.id)

            return rol
        }
        catch(error){
            return "error"
        }
    }

    async update({params, response}){
        const rol = await validate(request.all(), rules)

        if(validation.fails()){
            response.status(400).json({mensaje:"error en datos"})
        }

        else{
            const roli = await Rol.findOrFail(params.id)
            roli.name=rol.name
            roli.status=rol.status

            roli.save()
            response.status(200).json({mensaje:"se inserto correctamente", data: rol})
        }
    }

    async delete({params, response}){
        try{
            const rol = await Rol.findOrFail(params.id)

            rol.delete()

        }
        catch(error){
            return "borrado"
        }
    }
}

module.exports = RoleController
