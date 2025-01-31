//Task 1: If Statements
var purchaseAmount = 150.99
discount = 0.10
    //Task 1: Customer Discounts using If Statements
if (purchaseAmount > 100){
    purchaseDiscount = purchaseAmount*discount
    purchase_Total = purchaseAmount - purchaseDiscount}
else {}

console.log(`Final amount after discount: $${purchase_Total}`)


//Task 2: For Loop
let sales = [120, 85, 200, 150, 90]
let total_sales = 0
    //Task 2: Sales Report using For Loop
for (sale in sales){
    total_sales = sales.reduce((total_sales, sale) => total_sales + sale, 0)}

console.log(`Total Sales: $${total_sales}`)


//Task 3: While Loop
var stock = 10
    //Task 3: Inventory Depletion using While Loop
while (stock > 0){
    --stock
    console.log(`Stock Level: ${stock}`)}


//Task 4: Do While Loop
var responses = 0
    //Task 4: Customer Survey using Do While Loop
do {
    responses++,
    console.log(`Custmomer Survey Responses: ${responses}`)
} 
    while (responses < 3)


//Task 5: For In Loop
let employee = {
    name: "Jake",
    position: "Manager",
    salary: "75000"}
    //Task 5: Employee Information using For In Loop
for (key in employee){
    console.log(`${key}: ${employee[key]}`)}


//Task 6: For Of Loop
let products = ["laptop", "mouse", "keyboard"]
    //Task 6: Product Listings using For Of Loop
for (product of products){
    console.log(`Product: ${product}`)}


//Task 7: forEach() Method
let orders = [101, 102, 103]
    //Task 7: Order Processing using forEach Method
orders.forEach(orderID => {
    console.log(`Order Number: ${orderID}`)})


//Task 8: Function Declaration
    //Task 8: Tax Calculation
function calculateTax(amount, taxRate) {
    return amount * taxRate;}

let taxAmount = calculateTax(250, 0.30);
console.log(`Tax Amount: $${taxAmount}`)


//Task 9: Function Expressions
    //Task 9: Discount Application using Function Expression
let applyDiscount = function(price) {
    let discountRate = price* 0.10;
    return price - discountRate}

let discountedPrice = applyDiscount(140);
console.log(`Discounted price: $${discountedPrice}`)


//Task 10: Arrow Functions
    //Task 10: Loyalty Points using Arrow Functions 
const calculatePoints = (purchaseAmount) =>  Math.floor(purchaseAmount / 10)

//PurchaseAmount was defined in Task 1: 150.99
console.log(`Points Earned: ${calculatePoints(purchaseAmount)}`)