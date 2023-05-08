// Задача 1.  Створити клас Client Властивості: ID ПІБ Кількість грошей на рахунку Методи: Додавання грошей Зняття грошей ToString На основі цього класу створити клас GoldenClient Властивості: ID ПІБ Кількість грошей на рахунку Ліміт кредитних коштів Відсоток за використання кредитних коштів Методи: Додавання грошей Зняття грошей Визначення пені за використання кредитних коштів ToString Створити клас Bank, у якому зберігається масив клієнтів.Виконати такі операції: - Вивести усіх простих клієнтів; - Вивести усіх клієнтів GoldenClient; - Знати сумарну кількість грошей на рахунку;-----------------------------

class Client {
	constructor(id, name, balance) {
		this.id = id
		this.name = name
		this.balance = balance
	}

	deposit(amount) {
		this.balance += amount
	}

	withdraw(amount) {
		if (amount > this.balance) {
			console.log("Недостатньо коштів")
		} else {
			this.balance -= amount
		}
	}

	toString() {
		return `ID: ${this.id}, Name: ${this.name}, Balance ${this.balance}`
	}
}

class GoldenClient extends Client {
	constructor(id, name, balance, creditLimits, interestRate) {
		super(id, name, balance)
		this.creditLimits = creditLimits
		this.interestRate = interestRate
	}

	calculateInterest() {
		return this.balance * this.interestRate
	}

	withdraw(amount) {
		if (amount > this.balance + this.creditLimits) {
			console.log("Недостатньо коштів і перевищено кредитний ліміт.")
		} else {
			this.balance -= amount
			if (this.balance < 0) {
				this.balance += this.calculateInterest()
			}
		}
	}


	toString() {
		return `ID: ${this.id}, Name: ${this.name}, Balance ${this.balance}, Credit Limits: ${this.creditLimits},  Interest Rate: ${this.interestRate} `
	}
}


class Bank {
	constructor() {
		this.clients = []
	}

	addClient(client) {
		this.clients.push(client)
	}

	printAllClients() {
		this.clients.forEach(client => {
			console.log(client.toString())
		})
	}

	printAllGoldenClients() {
		this.clients.forEach(client => {
			if (client instanceof GoldenClient) {
				console.log(client.toString())
			}
		})
	}

	getTotalBalance() {
		let total = 0
		this.clients.forEach(client => {
			total += client.balance
		})
		return total
	}
}

// створення об'єкту Bank
const bank = new Bank()

// створення клієнтів
const client1 = new Client(1, "John Doe", 11000500)
const client2 = new Client(2, "Jane Smith", 1000)
const client3 = new GoldenClient(3, "Bob Brown", 1500, 500, 0.05)

// додавання клієнтів до банку
bank.addClient(client1)
bank.addClient(client2)
bank.addClient(client3)

// виведення простих клієнтів
console.log("Прості клієнти:")
bank.printAllClients()

// виведення клієнтів GoldenClient
console.log("Клієнти Golden:")
bank.printAllGoldenClients()

// сумарна кількість грошей на рахунках
console.log("Сумарний баланс на рахунках:", bank.getTotalBalance())
















