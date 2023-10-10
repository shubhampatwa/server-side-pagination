// This Function adds Total Amount Paid in the parent table
function addTotalPaid(parent, child) {
    parent.map(
        pElem => {
            const totalAmountPaid = child.reduce(
                (accumulator, cElem) => {
                    if (cElem.parentId === pElem.id) accumulator += cElem.paidAmount;
                    return accumulator;
                }, 0
            )
            pElem.totalAmountPaid = totalAmountPaid;
            return pElem;
        }
    )
    return parent;
}

module.exports = addTotalPaid;