import inquirer from "inquirer";
const airlineTicket = await inquirer.prompt([
    { Message: "enter passenger name", type: "string", name: "passengerName" },
    { Message: "enter age", type: "number", name: "age" },
]);
if (airlineTicket.age <= 2) {
    console.log(`${airlineTicket.passengerName} is an infant (under 2 years old).`);
}
else if (airlineTicket.age >= 2 && airlineTicket.age <= 12) {
    console.log(`${airlineTicket.passengerName} is a Child (under 12 years old).`);
}
else {
    console.log(`${airlineTicket.passengerName} is a adult (above 12 years ).`);
}
