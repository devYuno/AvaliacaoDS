import { kStringMaxLength } from "buffer";
import { NextFunction, Request, Response} from "express";
import { stringify } from "querystring";

enum Sector {
    "TI",
    "RH",
    "PRODUCAO",
    "LOGISTICA"
}

enum Priority {
    "BAIXA",
    "MEDIA",
    "ALTA"
}

enum Status {
    "ABERTO",
    "EM_ANDAMENTO",
    "FINALIZADO"
}

export const validateCreate = (req: Request, res: Response, next: NextFunction)=>{
    const { title, description, sector, priority } = req.body
    if (!title || !description || !sector || !priority ) {
        return res.status(400).send({ message: "Todas as informações devem ser preenchidas!" })
    }

    if (title.length < 10) return res.status(400).send({ message: "Titulo deve contar no mínimo 10 caracteres." })
    if (!(sector in Sector)) return res.status(400).send({ message: "Setor inválido." })
    if (!(priority in Priority)) return res.status(400).send({ message: "Prioridade inválida." })

    next()
}
export const validateUpdate = (req: Request, res: Response, next: NextFunction)=>{
    const { id } = req.params
    if ( !id ) {
        return res.status(400).send({ message: "Deve conter um Id" })
    }

    const { title, description, sector, priority } = req.body
    if ( !title || !description || !sector || !priority ) {
        return res.status(400).send({ message: "Todas as informações devem ser preenchidas!" })
    }

    if (title.length < 10) return res.status(400).send({ message: "Titulo deve contar no mínimo 10 caracteres." })
    if (!(sector in Sector)) return res.status(400).send({ message: "Setor inválido." })
    if (!(priority in Priority)) return res.status(400).send({ message: "Prioridade inválida." })

    next()
}
export const validateDelete = (req: Request, res: Response, next: NextFunction)=>{
    const { id } = req.params
    if ( !id ) {
        return res.status(400).send({ message: "Deve conter um Id" })
    }

    next()
}