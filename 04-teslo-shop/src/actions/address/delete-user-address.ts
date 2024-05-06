'use server';

import { prisma } from "@/lib/prisma";

export const deleteUserAddress = async (userId: string) => {
    try {
        const deletedAddress = await prisma.userAddress.delete({
            where: { userId: userId }
        });

        return {
            ok: true
        }

    } catch (error) {
        console.log(error);
        return {
            ok: false,
            message: 'No se puedo eliminar la dirección'
        }
    }
};