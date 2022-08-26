//Defining global variables

const page = document.querySelector('.page');
const houseCost = document.getElementById("total-property-cost");
const deposit = document.getElementById("deposit");
const remainingMortgage = document.getElementById("remaining-mortgage");
const interestRate = document.getElementById("interest-rate");
const mortgageTerm = document.getElementById("length-of-mortgage");
const monthlyMortgageCost = document.getElementById("monthly-mortgage-cost");
const totalInterestAccrued = document.getElementById("total-interest-accrued");
const totalInterestMonthly = document.getElementById("interest-per-month");
const amountPayableOverMortgageTerm = document.getElementById("amount-payable-over-mortgage-term");

window.addEventListener('keyup', () => {

    if (houseCost.value[0] === '£') {
        houseCost.value.pop();
        console.log(houseCost.value);
    }


    let rMortgage = (houseCost.value - deposit.value);
    remainingMortgage.innerHTML = '£' + rMortgage.toLocaleString();
9
    let monthlyInterest = ((houseCost.value - deposit.value) * (interestRate.value / 100)) / 12;
    totalInterestMonthly.innerHTML = '£' + monthlyInterest.toLocaleString();

    let totalInterest = ((houseCost.value - deposit.value) * ((interestRate.value / 100) /12)) * mortgageTerm.value;
    totalInterestAccrued.innerHTML = '£' + totalInterest.toLocaleString();

    let mMortgageCost = ((((houseCost.value - deposit.value) / mortgageTerm.value) / 12) + monthlyInterest);
    monthlyMortgageCost.innerHTML = '£' + mMortgageCost.toLocaleString();

    let totalAmountPayable = ((houseCost.value - deposit.value) + totalInterest)
    amountPayableOverMortgageTerm.innerHTML = '£' + totalAmountPayable.toLocaleString();

})

