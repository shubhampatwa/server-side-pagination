import { Dispatch, SetStateAction } from "react";
import ParentTableData from "./ParentTableData";
export default interface ParentTableProps {
    tableData: ParentTableData | undefined;
    setPage: Dispatch<SetStateAction<number>>;
    setOrder: Dispatch<SetStateAction<boolean>>;
    tableTitles: string[];
    page: number;
}
