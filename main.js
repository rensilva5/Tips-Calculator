const generateBillButtom = document.querySelector(".generate-bill");
const billAmount = document.querySelector(".bill-amount");
const discountPercentage = document.querySelector(".discount-percentage");
const tipsPercentage = document.querySelector(".tips-percentage");
const noOfCustomers = document.querySelector(".no-of-customers");
const totalTipPaid = document.querySelector(".total-tip-paid");
const totalAmountToPay = document.querySelector(".total-amount-to-pay");
const totalTipPercentageValue = document.querySelector(".tip-value");
const discountPercentageValue = document.querySelector(".discount-value");
const eachCustomerToPay = document.querySelector(".each-customer-to-pay");
const totalNoOfCustomersValue = document.querySelector(
  ".no-of-customers-value"
);
const updateDiscountValue = document.querySelector(".discount-value");

// Function to update discount value adjusting the sliders
discountPercentage.addEventListener("input", () => {
  discountPercentageValue.textContent = discountPercentage.value + "%";
});

// Function to update tips value when adjusting the sliders
tipsPercentage.addEventListener("input", () => {
  totalTipPercentageValue.textContent = tipsPercentage.value + "%";
});

// Function to update number of customers adjusting the sliders
noOfCustomers.addEventListener("input", () => {
  totalNoOfCustomersValue.textContent = noOfCustomers.value;
});

function calculateBill() {
  const bill = parseFloat(billAmount.value);
  const discount = parseFloat(discountPercentage.value);
  const tips = parseFloat(tipsPercentage.value);
  const customers = parseFloat(noOfCustomers.value);
  // const AmountPerCustomer = parseFloat(eachCustomerToPay.value);

  const billAfterDiscount = bill - (discount * bill) / 100;
  console.log(billAfterDiscount)

  const getTipAmount = (bill * tips) / 100;

  const totalBill = billAfterDiscount + getTipAmount;

  const eachCustomerToPayAmount = totalBill / customers;

  totalTipPaid.textContent = getTipAmount;
  totalAmountToPay.textContent = totalBill;
  discountPercentage.textContent = billAfterDiscount;
  totalTipPercentageValue.textContent = tipsPercentage.value;
  discountPercentageValue.textContent = discountPercentage.value;
  totalNoOfCustomersValue.textContent = noOfCustomers.value;
  eachCustomerToPay.textContent = eachCustomerToPayAmount;
  // updateDiscountValue = document.querySelector(".discount-value");
}

generateBillButtom.addEventListener("click", calculateBill);
