interface FinancialHealthPresentation {
    totalExpenses: number,
    totalIncome: number,
    revenue: number,
    marginPercentage: number,
    timechart: {
        daysFromToday: number[],
        revenueAtDate: number[]
    }
}