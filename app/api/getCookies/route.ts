import type { getInterface } from "@/types/index";
import { currentUser } from "@clerk/nextjs";

export const GET = async ({ params }: getInterface) => {
  try {
    const userInfo = await currentUser();

    return new Response(JSON.stringify(userInfo), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response(
      `ERRO! Não foi possível encontrar os produtos correspodentes: ${error}`,
      { status: 500 }
    );
  }
};
