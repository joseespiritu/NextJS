'use server';

import { auth } from "@/auth.config";
import type { Address, Size } from "@/interfaces";
import { prisma } from "@/lib/prisma";

interface ProductToOrder {
    productId: string;
    quantity: number;
    size: Size;
}

export const placeOrder = async ( productsIds: ProductToOrder[], address: Address ) => {

    const session = await auth();
    const userId = session?.user.id;

    // Verificar session de usuario
    if (!userId) {
        return {
            ok: false,
            message: 'No hay session de usuario'
        }
    }

    // Obtener la informacion de los productos
    // Nota: podemos llevar 2+ productos con el mismo ID
    const products = await prisma.product.findMany({
        where: {
            id: {
                in: productsIds.map(p => p.productId)
            }
        }
    });

    // Calcular los montos // Encabezado
    const itemsInOrder = productsIds.reduce( (count, p) => count + p.quantity, 0);

    // Totales de tax, subtotal, y total
    const { subTotal, tax, total } = productsIds.reduce( (totals, item) => {

        const productQuantity = item.quantity;
        const product = products.find(product => product.id === item.productId);

        if (!product) throw new Error(`${item.productId} no existe - 500`);

        const subTotal = product.price * productQuantity;

        totals.subTotal += subTotal;
        totals.tax += subTotal * 0.15;
        totals.total += subTotal * 1.15;

        return totals;
    }, {subTotal: 0, tax: 0, total: 0});


    // Crear la transaccion de base datos
    const prismaTx = await prisma.$transaction(async (tx) => {

        // 1. Actualizar el stock de los productos

        // 2. Crear la orden - Encabezado - Detalles

        // 3. Crear la dirección de la orden

        // return {
        //     order: 123,
        //     updatedProducts: [],
        //     orderAddress: {}
        // }
    });

}
