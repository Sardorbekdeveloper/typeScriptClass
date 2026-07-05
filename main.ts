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