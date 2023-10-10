import ParentTableData from "./ParentTableData";
export default interface ParentTableFooter {
    page: number;
    tableData: ParentTableData | undefined,
    previousHandler: () => void,
    nextHandler: () => void
}
