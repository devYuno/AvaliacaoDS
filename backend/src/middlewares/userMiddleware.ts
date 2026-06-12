import { NextFunction, Request, Response} from "express";

export const validateRegister = (req: Request, res: Response, next: NextFunction) => {
    const { name, email, password } = req.body
    if (!name || !email || !password ) {
        return res.status(400).send({ response: "Todas as informações devem ser preenchidas!" })
    }
    next()
}

export const validateUpdate = (req: Request, res: Response, next: NextFunction) => {
    
}

export const validateDelete = (req: Request, res: Response, next: NextFunction) => {
    
}


