export default interface ParentTableData {
    next: { page: number, limit: number };
    previous: { page: number, limit: number };
    results: {
        id: number;
        receiver: string;
        sender: string;
        totalAmount: number;
        totalAmountPaid: number;
    }[];
}
