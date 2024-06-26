"use client";

import { Plus } from "lucide-react";
import { useRouter, useParams } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { ProductColumn, columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";
import { ApiList } from "@/components/ui/api-list";

interface ProductClientProps { 
    data: ProductColumn[]
}

export const ProductClient: React.FC<ProductClientProps> = ({
    data
}) => {
    const router = useRouter();
    const params = useParams();
    return (
        <>
        <div className="flex items-center justify-between">
            <Heading 
            title={`Product (${data.length})`}
            description="Manage products for your store"
            />
            <Button onClick={() => router.push(`/${params.storeId}/products/new`)}>
            <Plus className="w-4 h-4 mr-2" />
            Add new 
            </Button>
        </div>
        <Separator />
        <DataTable searchKey="name" columns={columns} data={data}/>
        <Heading title="API" description="API calls for Product" />
        <Separator />
        <ApiList entityName="products" entityIdName="productId" />
        </>
    )
}