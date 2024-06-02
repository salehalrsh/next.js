import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs"
import prismadb from "@/lib/prismadb";

export async function POST(
    req: Request
) {
    try{
        const { userId } = auth();
        const body = await req.json();

        const { name} = body;
        
        if (!userId){
            return new NextResponse("غير مسموح لك الوصول هنا", {status: 401});
        }
        if (!name){
            return new NextResponse("مطلوب كنابة الاسم", {status: 400})
        }
        const store = await prismadb.store.create({
            data: {
                name,
                userId
            }
        });
        return NextResponse.json(store);
    }catch(errro){
        console.log('[STORE_POST]', errro);
        return new NextResponse("Interal error", {status: 500});
    }
};