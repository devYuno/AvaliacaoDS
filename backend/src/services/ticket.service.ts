import { TicketDTO } from "../dtos/ticketDTO"
import { prisma }  from '../lib/prisma'

export const createTicket = async(data: TicketDTO)=>{
    const { title, description, sector, priority } = data
    const status = "ABERTO"
    return await prisma.ticket.create({
        data: { title, description, sector, priority, status }
    })
}

export const showTickets = async()=>{
    return await prisma.ticket.findMany()
}

export const showTicketById = async(id: number)=>{
    return await prisma.ticket.findUnique({
        where: { id: id }
    })
}

export const updateTicket = async(id: number, data: TicketDTO)=>{
    return await prisma.ticket.update({
        where: { id: id },
        data: data
    })
}

export const deleteTicket = async(id: number)=>{
    return await prisma.ticket.delete({
        where: { id: id }
    })
}

export const startTicket = async(id: number)=>{
    var newStatus = "EM_ANDAMENTO"
    return await prisma.ticket.update({
        where: { id: id, status: "ABERTO" },
        data: { status: newStatus }
    })
}

export const finishTicket = async(id: number)=>{
    var newStatus = "FINALIZADO"
    return await prisma.ticket.update({
        where: { id: id, status: "EM_ANDAMENTO" },
        data: { status: newStatus }
    })
}