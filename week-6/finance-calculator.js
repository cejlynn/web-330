
export class FinanceCalculator { // export financecalculator class 
    static MONTHS_IN_YEAR = 12;

    static calculateFutureValue(monthlyPayment, rate, years) {
        let months = years * this.MONTHS_IN_YEAR; // Assign param
        let interestRate = 1 + rate / 100;
        let presentValue = monthlyPayment * months;
        let futureValue = presentValue * (Math.pow(interestRate, months));
        return futureValue.toFixed(2);
    }

    static convertToCurrency(field) { // USD converter
        let currencyFormatter = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        });

        return currencyFormatter.format(field); // Return currency to USD
    }
}