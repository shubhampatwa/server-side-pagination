const sort = require('../service/sort');

function getInstallment(id, childData, parentData) {
    const { sender, receiver, totalAmount } = parentData.find(
        (data) => data.id === id
    );
    const childTable = childData
        .filter((data) => data.parentId === id)
        .map(data => ({...data, sender, receiver, totalAmount}));
    const sortedTable = sort(childTable, 'id', 'asc')
    return sortedTable;
}

module.exports = getInstallment;