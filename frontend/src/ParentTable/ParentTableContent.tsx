import ParentTableContent from "../Interface/ParentTableContent"
const ParentTableContent = ({ tableData, showInstallmentHandler }: ParentTableContent) => {
    return (
        <>
            {tableData?.results?.map(
                (row) => {
                    return <tr key={row.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
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
                        <td className="px-6 py-4 cursor-pointer" onClick={() => showInstallmentHandler(row.id)}>
                            {row.totalAmountPaid}
                        </td>
                    </tr>
                }
            )}
        </>
    )
}

export default ParentTableContent;
