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

do {
    responses++,
    console.log(`Custmomer Survey Responses: ${responses}`)
} 
    while (responses < 3)