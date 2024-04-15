interface TransactionPresentation{ //A list of transactions to be passed to ther client
    amount: number,
    type: string,
    status: string,
    description: string,
    created_at: string,
    merchant_name: string
}

interface CategorizedTransactionPresentation{
    category: string,
    amount: number,
    transactions: number
}