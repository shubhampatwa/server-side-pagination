import { useEffect, useState } from "react"
import ParentTable from "./ParentTable/ParentTable"
import ParentTableData from "./Interface/ParentTableData";
const URL = import.meta.env.VITE_TEST_URL;

// console.log(import.meta.env.VITE_TEST_PORT)

const App = () => {

  const [page, setPage] = useState(1);
  const [order, setOrder] = useState(true);
  const [tableData, setTableData] = useState<ParentTableData>();
  const tableTitles = ['ID', 'Sender', 'Receiver', 'Total Amount', 'Total Amount Paid'];

  // Get Parent Table Elements
  const getParentTable = async (page: number, limit: number, order: boolean) => {
    const res = await fetch(`${URL}/parent?page=${page}&limit=${limit}&order=${order ? 'asc' : 'desc'}&sort=${'id'}`);
    return res.json();
  }

  // Update Parent Table according to its Assending/Desending order or Page Number
  useEffect(
    () => {
      getParentTable(page, 2, order).then(setTableData)
    }, [order, page]
  )

  return (
    <>
      <div >
        <ParentTable tableData={tableData} setPage={setPage} setOrder={setOrder} tableTitles={tableTitles} page={page} />
      </div>
    </>
  )
}

export default App;
