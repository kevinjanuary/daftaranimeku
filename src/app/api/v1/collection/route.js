import prisma from "@/libs/prisma"
import { NextResponse } from "next/server"

export async function POST(Request) {
  const { mal_id, email } = await Request.json()

  const createCollection = await prisma.collection.create({
    data: {
      anime_mal_id: mal_id,
      user_email: email,
    },
  })

  if (!createCollection)
    return NextResponse.json({ status: 500, isCreated: false })

  return Response.json({ status: 200, isCreated: true })
}
