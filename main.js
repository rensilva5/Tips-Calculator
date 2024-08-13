const generateBillButtom = document.querySelector(".generate-bill");
const billAmount = document.querySelector(".bill-amount");
const discountPercentage = document.querySelector(".discount-percentage");
const tipsPercentage = document.querySelector(".tips-percentage");
const noOfCustomers = document.querySelector(".no-of-customers");
const totalTipPaid = document.querySelector(".total-tip-paid");
const totalAmountToPay = document.querySelector(".total-amount-to-pay");
const totalTipPercentageValue = document.querySelector(".tip-value");
const discountPercentageValue = document.querySelector(".discount-value");
const totalNoOfCustomersValue = document.querySelector(
  ".no-of-customers-value"
);

function calculateBill() {
  const bill = parseFloat(billAmount.value);
  const discount = parseFloat(discountPercentage.value);
  const tips = parseFloat(tipsPercentage.value);
  const customers = parseFloat(noOfCustomers.value);

  const billAmountAfterDiscountPercentage = bill - (discount * bill) / 100;

  const getTipAmount = (bill * tips) / 100;

  const totalBill = bill + getTipAmount;

  totalTipPaid.textContent = getTipAmount;
  totalAmountToPay.textContent = totalBill;
  totalTipPercentageValue.textContent = tipsPercentage.value;
  discountPercentageValue.textContent = discountPercentage.value;
  totalNoOfCustomersValue.textContent = noOfCustomers.value;
}

generateBillButtom.addEventListener("click", calculateBill);
