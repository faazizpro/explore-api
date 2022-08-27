const user = {
    id: 1, name: 'Fahad Abdul Aziz', job: 'Web Developer', };
//JavaScript Object Notation(JSON)
const stringified = JSON.stringify(user);
// console.log(user);
// console.log(stringified);

const shop = {
    onwer: 'Fahad Abdul Aziz',
    location: 'Banasree',
    country: 'Bangladesh',
    salary: 135000
}
console.log(shop);
// Convert Shop to JSON String
const shopString = JSON.stringify(shop);
console.log(shopString);

// COnvert JSON String to Object
const shopObject = JSON.parse(shopString);
console.log(shopObject);