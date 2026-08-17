import { IconSvgObject } from "@/app/(root)/_components/SpecialSale";

export type Category =  {
    id: number;
    name: string;
    icon: IconSvgObject;
    category: string;
    categoryFilters: ({
        id: number;
        label: string;
        subFilter: {
            id: number;
            label: string;
        }[];
    } | {
        id: number;
        label: string;
        subFilter: {
            id: number;
            label: number;
        }[];
    })[];
}