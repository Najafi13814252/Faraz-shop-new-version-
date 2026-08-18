import { prisma } from "@/lib/prisma"

export async function GET() {
    try {
        const products = await prisma.product.findMany()

        return Response.json(products, {status: 201})
    } catch {
        return Response.json("Internal Server Error", { status: 500 })
    }
}