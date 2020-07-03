// NOTE: A "users" array is already loaded.
// See the "./data/users.js" script tag in index.html.

// The following line is here just to show you that the
// "users" array has already been loaded and is ready to go.
console.log(users)

// Append the katas to this element:
const main = document.querySelector('main')

function printKata(kataNumber, object) {
    // For the usage of the DETAILS and SUMMARY tags
    // in HTML, see: http://mdn.io/details-element
    const detailsElement = document.createElement('details')
    main.append(detailsElement)
    //
    const summaryElement = document.createElement('summary')
    summaryElement.append("KATA " + kataNumber)
    detailsElement.append(summaryElement)
    //
    // http://mdn.io/json.stringify
    const stringifiedObject = JSON.stringify(object)
    stringifiedObject
    detailsElement.append(stringifiedObject)
}

const greenEyes1 = users.filter(user => user.eyeColor === "green").map(user => user.name)

// OR...
// const greenEyes2 = users.filter(function (user) {
//     return user.eyeColor === "green"
// })
printKata(0, greenEyes1)   // If you don't have this function already, see the "Set up" section above.

//Kata 1: Use the .filter() method
//Filter the users array to show only the users with an isActive property of true.
const userIsActive = users.filter(user => user.isActive).map(user => user.name)

// const userIsActive = users.filter(function (user) {
//     return user.isActive
// })
printKata(1, userIsActive)

// Kata 2: Use the .map() method
// Map over the users array to show only the email addresses of the users.
const userEmails = users.map(user => user.email)
printKata(2, userEmails)

// Kata 3: Use the .some() method
// Check whether at least one user in the users array has a company property of "OVATION".
const userCompany = users.some(user => user.company === "OVATION")
printKata(3, userCompany)

// Kata 4: Use the .find() method
// Find the first user in the array over the age of 38.
const userOver38 = users.find(user => user.age > 38)
printKata(4, userOver38.name)

// Kata 5: Use the .filter() and .find() methods
// Find the first user in the array over the age of 38 who is active.
const userOver38IsActive = users.filter(user => user.isActive).find(user => user.age > 38)
printKata(5, userOver38IsActive)

// Kata 6: Use the .filter() and .map() methods
// Show the balance of every user in the array from the "ZENCO" company.
const userZencoBalance = users.filter(user => user.company === "ZENCO").map(user => user.balance)
printKata(6, userZencoBalance)

// Kata 7: Use the .filter() method with .includes() and the .map() method
// Show the age of every user with the "fugiat" tag.
const userFugiat = users.filter(user => user.tags.includes("fugiat")).map(user => user.age)

// const userFugiat = users.filter(function (user) {
//     return user.tags.includes('fugiat')
// })
//     .map(function (user) {
//         return user.age
//     })

printKata(7, userFugiat)