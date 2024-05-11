import { v2 as cloudinary } from 'cloudinary'
import { NextResponse } from 'next/server'

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUDNARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
})

export async function POST(request: Request) {
  const { path } = await request.json()

  if (!path) {
    return NextResponse.json(
      { message: 'ERRO! Falta a o caminho da imagem' },
      { status: 400 }
    )
  }

  try {
    const options = {
      use_filename: true,
      unique_filename: false,
      overwrite: true,
      transformation: [{ width: 512, height: 512, crop: 'scale' }]
    }

    const result = await cloudinary.uploader.upload(path, options)

    return NextResponse.json(result, { status: 200 })
  } catch (ApiRequestError) {
    console.error(ApiRequestError)
    return NextResponse.json(
      { message: 'ERRO! Não foi possível fazer o upload da imagem' },
      { status: 500 }
    )
  }
}
