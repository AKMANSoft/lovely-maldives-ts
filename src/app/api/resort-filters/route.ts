import { NextResponse } from 'next/server'
import { connectToDatabase } from '@/helpers/server-helpers'
import { getIdParam } from '@/utils/getIdParam'
import prisma from '../../../../prisma'

export async function GET() {
  try {
    await connectToDatabase()

    const result = await prisma.resortFilters.findMany()
    if (!result)
      return NextResponse.json(
        { message: 'No resort filters data found.' },
        { status: 404 }
      )

    return NextResponse.json(
      { message: 'Success', data: result },
      { status: 201 }
    )
  } catch (error) {
    console.log('Error', error)
    return NextResponse.json({ message: 'Error', data: error }, { status: 500 })
  } finally {
    await prisma.$disconnect()
  }
}

export async function POST(req: Request) {
  const bodyData = await req.json()
  console.log('about maldives', bodyData)
  if (!bodyData?.type || !bodyData?.filter)
    return NextResponse.json(
      { message: 'Please send all fields ( type and filter ).' },
      { status: 422 }
    )
  try {
    await connectToDatabase()

    const isExist = await prisma.resortFilters.findFirst({
      where: {
        type: bodyData.type,
        filter: bodyData.filter,
      },
    })

    if (isExist)
      return NextResponse.json(
        { message: 'This Filter already exists.' },
        { status: 409 }
      )

    const result = await prisma.resortFilters.create({
      data: bodyData,
    })

    return NextResponse.json(
      { message: 'Success', data: result },
      { status: 201 }
    )
  } catch (error) {
    console.log('Error', error)
    return NextResponse.json({ message: 'Error', data: error }, { status: 500 })
  } finally {
    await prisma.$disconnect()
  }
}

export async function PUT(req: Request) {
  const bodyData = await req.json()
  console.log('about maldives', bodyData)
  if (!bodyData.id || !bodyData.type || !bodyData.filter)
    return NextResponse.json(
      { message: 'Please send filter id to update.' },
      { status: 422 }
    )
  try {
    await connectToDatabase()

    const isExist = await prisma.resortFilters.findFirst({
      where: {
        id: bodyData.id,
      },
    })

    if (!isExist)
      return NextResponse.json(
        {
          message: 'Filter not found, please send correct filter id to update.',
        },
        { status: 404 }
      )

    const result = await prisma.resortFilters.update({
      where: {
        id: bodyData.id,
      },
      data: { type: bodyData.type, filter: bodyData.filter },
    })

    return NextResponse.json(
      { message: 'Success', data: result },
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
  const id = getIdParam(req.url)
  console.log('id is ', id)
  if (!id)
    return NextResponse.json(
      { message: 'Please send filter id to delete.' },
      { status: 422 }
    )
  try {
    await connectToDatabase()

    const result = await prisma.resortFilters.delete({
      where: {
        id,
      },
    })

    console.log('result ', result)

    if (!result)
      return NextResponse.json(
        {
          message:
            'Filter deletion failed, please send correct filter id to delete.',
        },
        { status: 404 }
      )

    return NextResponse.json(
      { message: 'Success', data: result },
      { status: 201 }
    )
  } catch (error) {
    console.log('Error', error)
    return NextResponse.json({ message: 'Error', data: error }, { status: 500 })
  } finally {
    await prisma.$disconnect()
  }
}
