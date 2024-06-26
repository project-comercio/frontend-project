import type { getInterface } from '@/types/index'
import { currentUser } from '@clerk/nextjs'

export const GET = async () => {
  try {
    const userInfo = await currentUser()

    return new Response(JSON.stringify(userInfo), { status: 200 })
  } catch (ApiRequestError) {
    console.error(ApiRequestError)
    return new Response(
      `ERRO! Não foi possível encontrar os produtos correspodentes: ${ApiRequestError}`,
      { status: 500 }
    )
  }
}
