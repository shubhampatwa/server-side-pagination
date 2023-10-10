export default interface InstallmentTable {
    id: number;
    paidAmount: number;
    parentId: number;
    receiver: string;
    sender: string;
    totalAmount: number;
}
