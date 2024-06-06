import { NextResponse } from 'next/server'
import { connectToDatabase } from '@/helpers/server-helpers'
import { createWonders, deleteWonders, getWonders } from '@/services/wonders'
import prisma from '../../../../../prisma'

export async function GET() {
  try {
    await connectToDatabase()

    const result = await getWonders()
    if (!result)
      return NextResponse.json({ message: 'No data found' }, { status: 200 })

    return NextResponse.json(
      { message: 'Success', data: result },
      { status: 200 }
    )
  } catch (error) {
    console.log('Error', error)
    return NextResponse.json({ message: 'Error', data: error }, { status: 500 })
  } finally {
    await prisma.$disconnect()
  }
}

export async function POST(req: Request) {
  const { title, image, homeBgId } = await req.json()
  console.log('body data ', { title, image, homeBgId })
  if (!title || !image || !homeBgId)
    return NextResponse.json({
      message: 'Please send all field to save data.',
      status: 422,
    })

  try {
    await connectToDatabase()

    const result = await createWonders({ title, image, homeBgId })
    if (!result) return NextResponse.json({ message: 'Error' }, { status: 500 })

    return NextResponse.json(
      { message: 'Success', data: result, status: 201 },
      { status: 201 }
    )
  } catch (error) {
    console.log('Error', error)
    return NextResponse.json({ message: 'Error', data: error }, { status: 500 })
  } finally {
    await prisma.$disconnect()
  }
}

export async function DELETE(req: Request) {
  try {
    await connectToDatabase()
    const result = await deleteWonders()
    if (result === 'NOT_FOUND')
      return NextResponse.json({ message: 'No data found.' }, { status: 404 })

    return NextResponse.json({ message: 'Success' }, { status: 201 })
  } catch (error) {
    return NextResponse.json({ message: 'Error', data: error }, { status: 500 })
  } finally {
    await prisma.$disconnect()
  }
}
