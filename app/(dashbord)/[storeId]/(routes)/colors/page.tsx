import { format } from "date-fns";

import prismadb from "@/lib/prismadb";

import { ColorsClient } from "./components/client";
import { ColorColumn } from "./components/columns";

const ColorPage = async ({
    params
}: {
    params: { storeId: string }
}) => {
    const colors = await prismadb.color.findMany({
        where: {
            storeId: params.storeId
        },
        orderBy: {
            createAt: 'desc'
        }
    });
    const formattedColors: ColorColumn[] = colors.map((item) => ({
       id: item.id,
       name: item.name,
       value: item.value,
       createdAt: format(item.createAt, "MMMM do, yyyy")
    }));

    return (  
        <div className="flex-col">
            <div className="flex-1 p-8 pt-6 space-y-4">
                <ColorsClient data={formattedColors}/>
            </div>
        </div>
    );
}
 
export default ColorPage;