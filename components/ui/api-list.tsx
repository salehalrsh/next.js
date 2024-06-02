"use client";

import { useParams } from "next/navigation";

import { useOrigin } from "@/hooks/use-origin";
import { ApiAlert } from "@/components/ui/api-alert";

interface ApiListProps {
    entityName: string;
    entityIdName: string;
}

export const ApiList: React.FC<ApiListProps> = ({
    entityName,
    entityIdName,
}) => {
    const params = useParams();
    const origin = useOrigin();

    const baseUrl = `${origin}/api/${params.storeId}`;
    
    return (
        <>
        <ApiAlert 
        title="GET"
        variant="public"
        dsecription={`${baseUrl}/${entityName}`}
        />
        <ApiAlert 
        title="GET"
        variant="public"
        dsecription={`${baseUrl}/${entityName}/{${entityIdName}}`}
        />
        <ApiAlert 
        title="POST"
        variant="admin"
        dsecription={`${baseUrl}/${entityName}`}
        />
         <ApiAlert 
        title="PATCH"
        variant="admin"
        dsecription={`${baseUrl}/${entityName}/{${entityIdName}}`}
        />
        <ApiAlert 
        title="DELETE"
        variant="admin"
        dsecription={`${baseUrl}/${entityName}/{${entityIdName}}`}
        />
        </>
    )
}