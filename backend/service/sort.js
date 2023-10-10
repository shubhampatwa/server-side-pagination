function sort(arr, sortBy, order) {
    if (order === 'asc') {
        arr.sort((a, b) => {
            if (a[sortBy] > b[sortBy]) return 1;
            else if (a[sortBy] < b[sortBy]) return -1;
            else return 0;
        })
    }
    else if (order === 'desc') {
        arr.sort((a, b) => {
            if (a[sortBy] > b[sortBy]) return -1;
            else if (a[sortBy] < b[sortBy]) return 1;
            else return 0;
        })
    }
    return arr;
}

module.exports = sort;