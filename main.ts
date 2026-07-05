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

