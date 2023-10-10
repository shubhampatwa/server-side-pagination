import { useNavigate } from "react-router-dom";
import ParentTableProps from "../Interface/ParentTableProps";
import ParentTableHeading from "./ParentTableHeading";
import ParentTableContent from "./ParentTableContent";
import ParentTableFooter from "./ParentTableFooter";

const ParentTable = ({ tableData, setPage, setOrder, tableTitles, page }: ParentTableProps) => {

    const navigate = useNavigate();


    // Important Functions
    const changeOrderHandler = () => {
        setOrder((order) => !order)
    }
    const nextHandler = () => {
        setPage(page => page + 1);
    }
    const previousHandler = () => {
        setPage(page => page - 1);
    }
    const showInstallmentHandler = (id: number) => {
        console.log(id);
        navigate(`/parent/${id}/child`)
    }

    return (
        <>
            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    {/* This Shows all the Lables of Coloums */}
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <ParentTableHeading tableTitles={tableTitles} changeOrderHandler={changeOrderHandler} />
                    </thead>
                    <tbody>
                        {/* This is Responsible for Rendering Parent table content */}
                        <ParentTableContent tableData={tableData} showInstallmentHandler={showInstallmentHandler} />
                        {/* Next And Previous Button */}
                        <ParentTableFooter page={page} tableData={tableData} previousHandler={previousHandler} nextHandler={nextHandler} />
                    </tbody>
                </table>
            </div >
        </>
    )
}

export default ParentTable;
