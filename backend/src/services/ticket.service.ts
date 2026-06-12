import { TicketDTO } from "../dtos/ticketDTO"
import { prisma }  from '../lib/prisma'

export const createTicket = async(data: TicketDTO)=>{
    const { title, description, sector, priority, status } = data
    return await prisma.ticket.create({
        data: { title, description, sector, priority, status }
    })
}
export const showTickets = async()=>{
    return await prisma.ticket.findMany()
}
// export const showTicketById = async(id: number)=>{
//     return await prisma.ticket.firstOrDefault()
// }
// export const updateTicket = async(id, data: TicketDTO)=>{
// }
// export const deleteTicket = async(id)=>{
// }
// export const startTicket = async(id)=>{
// }
// export const finishTicket = async(id)=>{
// }