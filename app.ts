#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

//initialize user balance and pin code
let myBalance = 5000;
let myPin: number = 2704;

//displayoing welcome message
console.log(
  chalk.bold.yellow(
    `\n  \t\t <<<================================================>>>`
  )
);
console.log(
  chalk.bold.blue(
    `<<<=========>>>  ${chalk.blueBright.bold(
      "Welcome To 'Hafeez Siddiqui' - CLI Simple Calculator"
    )}  <<<=========>>>`
  )
);
console.log(
  chalk.bold.yellow(
    `\t\t <<<===============================================>>>\n`
  )
);

let pinAnswer = await inquirer.prompt([
  {
    name: "Pin",
    type: "number",
    message: chalk.magentaBright("Enter Your PIN Code"),
  },
]);
if (pinAnswer.Pin === myPin) {
  console.log(chalk.green(`PIN is Correct, Login Successful`));
  //console.log(`Your Current Balance is ${myBalance}`)

  let operationAnswer = await inquirer.prompt([
    {
      name: "operation",
      type: "list",
      message: chalk.blue("Please Select An Operation To Perform"),
      choices: [`Check Balance`, `Withdraw Amount`],
    },
  ]);

  if (operationAnswer.operation === `Withdraw Amount`) {
    let amountAnswer = await inquirer.prompt([
      {
        name: `amount`,
        type: `number`,
        message: chalk.gray(`Enter An Amount to Withdraw`),
      },
    ]);
    if (amountAnswer.amount > myBalance) {
      console.log(chalk.redBright(`Insufficient Balance`));
    } else {
      myBalance -= amountAnswer.amount;

      console.log(
        chalk.bgBlueBright(`${amountAnswer.amount} Withdraw Sucessfully`),
        console.log(chalk.yellow(`Your Remaining Balance is${myBalance}`))
      );
    }
  } else if (operationAnswer.operation === `Check Balance`) {
    console.log(chalk.magentaBright(`Your Account Balance Is ${myBalance}`));
  }
} else {
  console.log(chalk.redBright(`Pin is Incorrect! Please Try Again.`));
}
console.log(
  chalk.bold.yellow(
    `\n  \t\t <<<================================================>>>`
  )
);
console.log(
  chalk.bold.greenBright(
    `<<<=========>>>  ${chalk.greenBright.bold(
      `Thanks For Using Hafeez Siddiqui - ATM Machine <<<=========>>>`
    )}`
  )
);
console.log(
  chalk.bold.yellow(
    `\t\t <<<===============================================>>>\n`
  )
);
