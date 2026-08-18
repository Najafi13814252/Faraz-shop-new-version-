'use server'

import { prisma } from "@/lib/prisma"

export const productAction = async () => {
    const products = await prisma.product.findMany()

    const watchProducts = await prisma.product.findMany({
        where: {
            catrgory: {
                name: 'watch'
            }
        }
    })
    return {
        products,
        watchProducts
    }
}

export const productByIdAction = async (productId: string) => {
    const product = await prisma.product.findUnique({
        where: {
            id: productId
        }
    })
    return {
        product
    }
}