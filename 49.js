function group_transactions_by_category(transactions) {
    const result = {};

    for (const transaction of transactions) {
        const category = transaction.category;

        if (!result.hasOwnProperty(category)) {
            result[category] = {
                transactions: [],
                subtotal: 0
            };
        }

        result[category].transactions.push(transaction);
        result[category].subtotal += transaction.amount;
    }

    return result;
}

const transactions = [
    { id: 1, amount: 50, date: '2025-06-01', category: 'food' },
    { id: 2, amount: 20, date: '2025-06-02', category: 'transport' },
    { id: 3, amount: 100, date: '2025-06-02', category: 'food' },
    { id: 4, amount: 80, date: '2025-06-03', category: 'entertainment' },
    { id: 5, amount: 15, date: '2025-06-03', category: 'transport' }
];

const grouped = group_transactions_by_category(transactions);

console.log(grouped);
