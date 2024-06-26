import { format } from "date-fns";

import prismadb from "@/lib/prismadb";

import { CategoryClient } from "./components/client";
import { CategoryColumn } from "./components/columns";

const CategoriesPage = async ({
    params
}: {
    params: { storeId: string }
}) => {
    const categories = await prismadb.category.findMany({
        where: {
            storeId: params.storeId
        },
        include: {
            billboard: true,
        },
        orderBy: {
            createAt: 'desc'
        }
    });
    const formattedCategories: CategoryColumn[] = categories.map((item) => ({
       id: item.id,
       name: item.name,
       billboardLabel: item.billboard.label,
       createdAt: format(item.createAt, "MMMM do, yyyy")
    }));

    return (  
        <div className="flex-col">
            <div className="flex-1 p-8 pt-6 space-y-4">
                <CategoryClient data={formattedCategories} />
            </div>
        </div>
    );
}
 
export default CategoriesPage;