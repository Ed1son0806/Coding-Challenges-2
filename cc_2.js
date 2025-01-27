//Task 1 - Store Inventory
let products = ["Onion", "Carrot", "Garlic", "Shallot", "Celery"];
products.push('Ginger');
prooducts.pop('Ginger');
console.log(products);


//Task 2 - Student Scores
const score = [92, 95, 95, 62, 88];
score[1] = 65;
let totalScore = 0;
for (let i = 0; i < score.length; i++) {
  totalScore += score[i];
}
console.log(totalScore)


//Task 3 - Working with Objects
let employee = {
    name: Josh,
    age: 28,
    department: HR,
    isActive: true
};
employee.department = "Sales";
employee.position = "Worker";
console.log(employee)


//Task 4 - Array of Objects
let customers = [
    { name: "Patrick", email: "part1ck@gmail.com", purchaseAmount: 11 },
    { name: "Metcalf", email: "Metcalf14@gmail.com", purchaseAmount: 14 },
    { name: "Smith", email: "smithjr@gmail.com", purchaseAmount: 20 }
  ];
  customers.push({ name: "Saquan", email: "5aquan2@example.com", purchaseAmount: 25 });
  console.log(customers);


//Task 5 - Object Methods
let order = {
    orderId: 112,
    customerName: "Travis Kelce",
    amount: 30,
    calculateTax: function () {
        let taxRate = 0.1;
        return this.amount * taxRate;
      }
    };
console.log(order)
let taxAmount = order.calculateTax();
console.log(taxAmount)
