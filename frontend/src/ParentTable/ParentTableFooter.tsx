import ParentTableFooter from "../Interface/ParentTableFooter";

const ParentTableFooter = (
    { page, tableData, previousHandler, nextHandler }: ParentTableFooter) => {
    return (
        <>
            <tr className="px-6 py-4 dark:bg-gray-900">
                <td className={`px-6 py-4 text-rose-300`}>
                    Page : {page}
                </td>
                <td></td>
                <td className={`px-6 py-4 ${tableData?.previous ? "text-white cursor-pointer" : " cursor-not-allowed"}`}>
                    <button disabled={!tableData?.previous} onClick={previousHandler}>
                        {"< Previous"}
                    </button>
                </td>
                <td className={`px-6 py-4 ${tableData?.next ? "text-white cursor-pointer" : " cursor-not-allowed"}`}>
                    <button disabled={!tableData?.next} onClick={nextHandler}>
                        {"Next >"}
                    </button>
                </td>
                <td></td>
            </tr>
        </>
    )
}

export default ParentTableFooter;
