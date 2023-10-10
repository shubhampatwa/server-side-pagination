import InstallmentTable from "../Interface/InstallmentTable";
const InstallmentTableBody = ({ table }: { table: InstallmentTable[] }) => {
    return (
        <>
            {table && table?.map(
                (row) => {
                    return <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={row.id}>
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {row.id}
                        </th>
                        <td className="px-6 py-4">
                            {row.sender}
                        </td>
                        <td className="px-6 py-4">
                            {row.receiver}
                        </td>
                        <td className="px-6 py-4">
                            {row.totalAmount}
                        </td>
                        <td className="px-6 py-4">
                            {row.paidAmount}
                        </td>
                    </tr>
                }
            )}
        </>
    )
}

export default InstallmentTableBody;
