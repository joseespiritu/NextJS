'use server';

import { prisma } from "@/lib/prisma";
// import { sleep } from "@/utils";

export const getStockBySlug = async(slug: string): Promise<number> => {
    try {
        // await sleep(2);
        const stock = await prisma.product.findFirst({
            where: {
                slug: slug
            },
            select: {
                inStock: true
            }
        });

        if ( !stock ) return 0;

        return stock.inStock;

    } catch (error) {
        console.log(error);
        return 0;
    }
};