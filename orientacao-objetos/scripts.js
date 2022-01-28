class BankAccount {
  constructor(agency, number, type, balance) {
    this.agency = agency;
    this.number = number;
    this.type = type;
    this.balance = balance;
  }

  get balance() {
    return this._balance;
  }

  set balance(value) {
    if (value < 0) {
      throw new Error('Balance cannot be negative');
    }
    this._balance = value;
  }

  deposit(value) {
    this.balance += value;
  }

  withdraw(value) {
    if (value > this.balance) {
      throw new Error('Insufficient funds');
    }
    this.balance -= value;
  }
}

class CheckingAccount extends BankAccount {
  constructor(agency, number, balance, creditCard) {
    super(agency, number, 'Checking Account', balance);
    this.creditCard = creditCard;
  }

  get creditCard() {
    return this._creditCard;
  }

  set creditCard(number) {
    if (number.length !== 16) {
      throw new Error('Invalid credit card number');
    }
    this._creditCard = number;
  }
}

class SavingAccount extends BankAccount {
  constructor(agency, number, balance) {
    super(agency, number, 'Saving Account', balance);
  }
}

class UniverityStudentAccount extends BankAccount {
  constructor(agency, number, balance) {
    super(agency, number, 'University Student Account', balance);
  }

  withdraw(value) {
    if (value > this.balance) {
      throw new Error('Insufficient funds');
    }

    if (value >= 500) {
      throw new Error('Cannot withdraw more than 500');
    }

    this.balance -= value;
  }
}

const checkingAccount = new CheckingAccount(123, 456, 1000, '1234567890123456');

console.log(checkingAccount); // { agency: 123, number: 456, type: 'Checking Account', _balance: 1000, _creditCard: '1234567890123456' }
checkingAccount.deposit(500);
console.log(checkingAccount.balance); // 1500
checkingAccount.withdraw(600);
console.log(checkingAccount.balance); // 900

const savingAccount = new SavingAccount(123, 456, 1000);
console.log(savingAccount); // { agency: 123, number: 456, type: 'Saving Account', _balance: 1000 }
savingAccount.deposit(500);
console.log(savingAccount.balance); // 1500

const universityStudentAccount = new UniverityStudentAccount(123, 456, 1000);
console.log(universityStudentAccount); // { agency: 123, number: 456, type: 'University Student Account', _balance: 1000 }
universityStudentAccount.deposit(500);
console.log(universityStudentAccount.balance); // 1500
// universityStudentAccount.withdraw(600); // Cannot withdraw more than 500
universityStudentAccount.withdraw(400);
console.log(universityStudentAccount.balance); // 1100