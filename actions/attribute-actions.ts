"use server"

import { prisma } from "@/lib/prisma"

export const attributeAction = async (productId: string) => {
    const productCategory = await prisma.product.findUnique({
        where: {
            id: productId,
        },
        select: {
            categoryId: true,
        },
    })

    const requiredProductAttribute = await prisma.productAttribute.findMany({
        where: {
            productId,
            attribute: {
                categories: {
                    some: {
                        categoryId: productCategory?.categoryId,
                        required: true
                    }
                }
            }
        },
        select: {
            id: true,
            value: true,
            attribute: {
                select: {
                    name: true,
                    slug: true
                }
            }
        }
    })

    return {
        requiredProductAttribute
    }
}