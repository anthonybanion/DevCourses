/*Statement:
Bank Account Manager:

- Create an Account class with owner, balance, and ID.
- Store multiple accounts in an array.

Add methods to:
    - Deposit money
    - Withdraw money
    - Transfer between accounts
    - Display balances of all accounts. */

class Account {
    constructor(owner, balance, id) {
        this.owner = owner;
        this.balance = balance;
        this.id = id;
    }

    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposited $${amount} to ${this.owner}'s account.`);
        } else {
            console.log("Deposit amount must be positive.");
        }
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrew $${amount} from ${this.owner}'s account.`);
        } else {
            console.log("Insufficient funds or invalid amount.");
        }
    }

    transfer(amount, targetAccount) {
        if (amount > 0 && amount <= this.balance) {
            this.withdraw(amount);
            targetAccount.deposit(amount);
            console.log(`Transferred $${amount} from ${this.owner} to ${targetAccount.owner}.`);
        } else {
            console.log("Invalid transfer amount.");
        }
    }

    static displayAllAccounts(accounts) {
        console.log("All Accounts:");
        accounts.forEach(account => {
            console.log(`- ${account.owner}: $${account.balance}`);
        });
    }
}

// Example usage:

const account1 = new Account("Alice", 1000, 1);
const account2 = new Account("Bob", 500, 2);
const account3 = new Account("Charlie", 200, 3);

account1.deposit(200);
account1.withdraw(100);
account1.transfer(300, account2);

Account.displayAllAccounts([account1, account2, account3]);