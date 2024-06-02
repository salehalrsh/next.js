import { format } from "date-fns";

import prismadb from "@/lib/prismadb";

import { SizesClient } from "./components/client";
import { SizeColumn } from "./components/columns";

const SizesPage = async ({
    params
}: {
    params: { storeId: string }
}) => {
    const sizes = await prismadb.size.findMany({
        where: {
            storeId: params.storeId
        },
        orderBy: {
            createAt: 'desc'
        }
    });
    const formattedSizes: SizeColumn[] = sizes.map((item) => ({
       id: item.id,
       name: item.name,
       value: item.value,
       createdAt: format(item.createAt, "MMMM do, yyyy")
    }));

    return (  
        <div className="flex-col">
            <div className="flex-1 p-8 pt-6 space-y-4">
                <SizesClient data={formattedSizes}/>
            </div>
        </div>
    );
}
 
export default SizesPage;