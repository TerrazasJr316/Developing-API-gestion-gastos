const TransactionModel = require("../models/Transaction.model");

exports.getByFilters = async (userId, filters) => {
    let query = { user: userId };

    if (filters.type) {
        query.type = filters.type;
    }

    if (filters.date) { 
        
        const startDate = new Date(`${filters.date}T00:00:00`);
        const endDate = new Date(`${filters.date}T23:59:59.999`);

        //consulta a MongoDB buscará todas las transacciones en utlimas 24 horas.
        query.date = { $gte: startDate, $lte: endDate };
        }
    return await TransactionModel.find(query)
        .populate('category')
        .sort({ date: -1 });
};

exports.create = async (data, userId) => {
    const transaction = new TransactionModel({
        ...data,
        user: userId
    });
    const savedTransaction = await transaction.save();
    return savedTransaction.populate('category');
};

exports.getAll = async (userId) => {
    return await TransactionModel.find({ user: userId })
        .populate('category')
        .sort({ date: -1 });
};

exports.getRecent = async (userId) => {
    return await TransactionModel.find({ user: userId })
        .populate('category')
        .sort({ date: -1 })
        .limit(6);
};
