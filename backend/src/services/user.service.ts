import { registerUserDto, updateUserDto } from "../dtos/userDTO"
import { prisma }  from '../lib/prisma'

export const registerUser = async (data: registerUserDto) => {
    const { name, email, password } = data
    return await prisma.user.create({
        data: { name, email, password }
    })
}

export const showUsers = async () => {
   return await prisma.user.findMany()
}

export const updateUser = async (data_id: number, data: updateUserDto) => {
    return await prisma.user.update({
        where: { id: data_id },
        data: data
    })
}

export const deleteUser = async (data_id: number) => {
    return await prisma.user.delete({
        where: { id: data_id }
    })
}