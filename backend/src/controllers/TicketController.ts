import { Request, Response } from "express";
import { TicketDTO } from "../dtos/ticketDTO";
import { createTicket, showTickets, showTicketById, updateTicket, deleteTicket, startTicket, finishTicket } from "../services/ticket.service";

export default class TicketController {

    static async create(req: Request,res: Response){     
        const data: TicketDTO = req.body
        try{
            const ticket = await createTicket(data)
            return res.status(200).send({ message: "Ticket criado", ticket: ticket })
        }
        catch(e){
            console.log("Erro interno: " + e)
            return res.status(500).send({ message: "Erro interno." })
        }      
    }
    static async show(req: Request, res: Response){
        try{
            const tickets = await showTickets()
            if(tickets.length == 0) return res.status(404).send({ message: "Não há nenhum ticket" })

            return res.status(200).send({ tickets: tickets })
        }
        catch(e){
            console.log("Erro interno: " + e)
            return res.status(500).send({ message: "Erro interno." })
        }
    }

    static async showById(req: Request, res: Response){
        const { id } = req.params
        const data_id = parseInt(id.toString())
        try{
            const ticket = await showTicketById(data_id)
            if(!ticket) return res.status(404).send({ message: "Ticket não encontrado" })

            return res.status(200).send({ ticket: ticket })
        }
        catch(e){
            console.log("Erro interno: " + e)
            return res.status(500).send({ message: "Erro interno." })
        }
    }

    static async update(req: Request, res: Response){
        const { id } = req.params
        const data_id = parseInt(id.toString()) 
        const data: TicketDTO = req.body
        try{
            const ticket = await showTicketById(data_id)
            if(!ticket) return res.status(404).send({ message: "Ticket não encontrado" })

            const ticketUpdate = await updateTicket(data_id, data)
            return res.status(200).send({ message: "Atualizado.", ticket: ticketUpdate })
        }
        catch(e){
            console.log("Erro interno: " + e)
            return res.status(500).send({ message: "Erro interno." })
        }
    }
    static async delete(req: Request, res: Response){
        const { id } = req.params
        const data_id = parseInt(id.toString())
        try{
            const ticket = await showTicketById(data_id)
            if(!ticket) return res.status(404).send({ message: "Ticket não encontrado" })
            
            const ticketDelete = await deleteTicket(data_id)
            return res.status(200).send({ message: "Ticket removido.", ticket: ticketDelete })
        }
        catch(e){
            console.log("Erro interno: " + e)
            return res.status(500).send({ message: "Erro interno." })
        }
    }
    static async start(req: Request, res: Response){
        const { id } = req.params
        const data_id = parseInt(id.toString())
        try{
            const ticket = await showTicketById(data_id)
            if(!ticket) return res.status(404).send({ message: "Ticket não encontrado" })

            if (ticket.status != "ABERTO") return res.status(400).send({ message: "O ticket deve estar em status ABERTO." })

            const ticketStart = await startTicket(data_id)
            return res.status(200).send({ message: "Ticket iniciado", ticket: ticketStart })
        }
        catch(e){
            console.log("Erro interno: " + e)
            return res.status(500).send({ message: "Erro interno." })
        }
    }
    static async finish(req: Request, res: Response){
        const { id } = req.params
        const data_id = parseInt(id.toString())
        try{
            const ticket = await showTicketById(data_id)
            if(!ticket) return res.status(404).send({ message: "Ticket não encontrado" })

            if (ticket.status != "EM_ANDAMENTO") return res.status(400).send({ message: "O ticket deve estar em status EM_ANDAMENTO." })

            const ticketFinished = await finishTicket(data_id)
            return res.status(200).send({ message: "Ticket finalizado", ticket: ticketFinished })
        }
        catch(e){
            console.log("Erro interno: " + e)
            return res.status(500).send({ message: "Erro interno." })
        }
    }
}