import type { getInterface } from "@/types/index";
import { currentUser } from "@clerk/nextjs";
import { NextRequest } from "next/server";

export const GET = async ({ params }: {params: Request | NextRequest}) => {
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
