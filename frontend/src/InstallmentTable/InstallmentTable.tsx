import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import InstallmentTable from "../Interface/InstallmentTable";
import InstallmentTableHead from "./InstallmentTableHead";
import InstallmentTableBody from "./InstallmentTableBody";
const URL = import.meta.env.VITE_TEST_URL;

const InstallmentTable = () => {
    const id = parseInt(useParams().id as string);
    const [table, setTable] = useState<InstallmentTable[]>([]);
    const title = [
        "ID",
        "Sender",
        "Receiver",
        "Total Amount",
        "Paid Amount",
    ]

    // Get table data
    const getTable = async (id: number | undefined) => {
        const res = await fetch(`${URL}/parent/${id}/child`)
        return res.json();
    }

    useEffect(() => {
        getTable(id).then(setTable);
    }, [id])

    return (
        <>
            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <InstallmentTableHead title={title} />
                    </thead>̨
                    <tbody>
                        <InstallmentTableBody table={table} />
                    </tbody>
                </table>
            </div>

        </>
    )
}

export default InstallmentTable;
