import ParentTableHeading from "../Interface/ParentTableHeading"

const ParentTableHeading = ({ tableTitles, changeOrderHandler }: ParentTableHeading) => {
    return (<>
        <tr>
            {tableTitles.map(
                (title) => {
                    return <th key={title} scope="col" className={`px-6 py-3  ${title === "ID" ? "cursor-pointer" : " "}`} onClick={title === "ID" ? changeOrderHandler : () => { }}>
                        {title}
                    </th>
                }
            )}
        </tr>
    </>)
}

export default ParentTableHeading;
