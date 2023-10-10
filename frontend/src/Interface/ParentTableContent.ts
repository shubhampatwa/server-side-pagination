import ParentTableData from "./ParentTableData";
export default interface ParentTableContent {
    tableData: ParentTableData | undefined;
    showInstallmentHandler: (id: number) => void;
}
