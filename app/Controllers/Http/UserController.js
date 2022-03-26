'use strict'

//const auth = require("@adonisjs/auth")
const User = use("App/Models/User")

class UserController {
    async Login({request, auth, response}){

        try{
            const email = request.input('email')
            const password = request.input('password')

            const token = await auth.attempt(email, password)

            response.status(200).json({
                mensaje: "Logueo Exitoso",
                data: token
            })
        }
        catch(error){
            response.status(401).json({mensaje: "Error en inicio"})
        }
    }

    async Registrar({request}){

        try{
            //console.log(request.all())
            //const user = new User()
            //user.username=request.input('username')
            //user.email=request.input('email')
            //user.password=request.input('password')

            //user.save()

            //return user

            const input = request.all();

            await User.create(input)

            return input

        }

        catch(error){
            console.log(error)
        }
        
    }

    async Logout({}){

    }

}

module.exports = UserController
