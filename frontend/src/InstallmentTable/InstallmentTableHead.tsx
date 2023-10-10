const InstallmentTableHead = ({ title }: { title: string[] }) => {
    return (
        <tr>
            {title.map(
                (row) => <th scope="col" className="px-6 py-3" key={row}>
                    {row}
                </th>
            )}
        </tr>
    )
}

export default InstallmentTableHead;
