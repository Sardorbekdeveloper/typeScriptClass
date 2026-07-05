// 1-task
class Car {

    model: string
    year: number
    color: string

    constructor(model: string, year: number) {
        this.model = model
        this.year = year
        this.color = "White"
    }

    changeColor(newColor: string): void {
        this.color = newColor
    }

    displayInfo(): void {
        console.log(`Model: ${this.model}`)
        console.log(`Year: ${this.year}`)
        console.log(`Color: ${this.color}`)
    }

}

class Book {

    title: string

    author: string

    pages: number

    constructor(title: string, author: string, pages: number) {
        this.title = title
        this.author = author
        this.pages = pages
    }

}

class Person {
    firstname: string
    lastname: string

    constructor(firstname: string, lastname: string) {
        this.firstname = firstname
        this.lastname = lastname
    }

    sayHello() {
        console.log('hello, + my name is' + this.firstname + this.lastname)
    }
}

const person = new Person("Sardorbek", "Davletboyev")

// 1.2 task Student Classi
class Student {
    firstName: string
    lastName: string
    grade: number
    constructor(firstName: string, lastName: string, grade: number) {
        this.firstName = firstName
        this.lastName = lastName
        this.grade = grade
    }
    fullName(): string {
        return (`${this.firstName}, ' ', ${this.lastName}`)
    }
    updateGrade(newGrade: number): void {
        this.grade = newGrade
    }

}

// 2-task
class BankAccount {

    private balance: number
    public owner: string
    constructor(balance: number, owner: string) {
        this.balance = balance
        this.owner = owner
    }

    deposit(amount: number): void {
        this.balance += amount
    }

    withdraw(amount: number): void {
        if (this.balance >= amount) {
            this.balance -= amount
        }
        else {
            console.log("mablag' yetarli emas")
        }
    }


}

class UserAccount {
    userName: string
    private password: string
    constructor(userName: string, password: string) {
        this.userName = userName
        this.password = password
    }
    changePassword(newPassword: string): void {
        this.password = newPassword
    }
    protected isActive(): boolean {
        return this.password.length > 0
    }

}

