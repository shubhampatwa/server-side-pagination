const sort = require('../service/sort');

function paginate(model) {
    return (req, res, next) => {
        const page = parseInt(req.query.page);
        const limit = parseInt(req.query.limit);
        const order = req.query.order
        const sortBy = req.query.sort
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;
        const results = {};

        // Base Case, Error Handeling
        if (!page || !limit) {
            res.status(400).send("Please Provide Proper Page Number and Limit")
            return;
        }

        // Sorting Accroding to Parent Id
        if (!sortBy) sortBy = 'id' // by default sort by id
        model = sort(model, sortBy, order);

        // Deciding Elements
        if (endIndex < model.length) {
            results.next = {
                page: page + 1,
                limit: limit
            };
        }

        if (startIndex > 0) {
            results.previous = {
                page: page - 1,
                limit: limit
            };
        }

        results.results = model.slice(startIndex, endIndex);
        res.paginatedResults = results;
        next();
    };
}

module.exports = paginate;