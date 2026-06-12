import { Request, Response } from "express";
import { registerUserDto, updateUserDto } from "../dtos/userDTO";
import { deleteUser, registerUser, showUsers, updateUser } from "../services/user.service";

export default class UserController {
    static async create(req: Request, res: Response){
        const data: registerUserDto = req.body
        try{
            const user = await registerUser(data)
            return res.status(200).send({ response: "Usuário registrado com sucesso!", user: user })
        }
        catch(e){
            return res.status(500).send({ response: "Houve algum erro no servidor!" })
        }
    }

    static async show(req: Request, res: Response){
        try{
            const users = await showUsers()
            return res.status(200).send({ users: users })
        }
        catch(e){
            return res.status(500).send({ response: "Houve algum erro no servidor!" })
        }
    }

    static async update(req: Request, res: Response){
        const { id } = req.params
        const data_id = parseInt(id.toString()) 
        const data: updateUserDto = req.body
        try{
            const user = await updateUser(data_id, data)
            return res.status(200).send({ response: "Usuário alterado com sucesso!", user: user })
        }
        catch(e){
            return res.status(500).send({ response: "Houve algum erro no servidor!" })
        }
    }

    static async delete(req: Request, res: Response){
        const { id } = req.params
        const data_id = parseInt(id.toString())
        try{
            const deletedUser = await deleteUser(data_id)
            return res.status(200).send({ response: "Usuário deletado com sucesso!", user: deletedUser })
        }
        catch(e){
            return res.status(500).send({ response: "Houve algum erro no servidor!" })
        }
    }
}
