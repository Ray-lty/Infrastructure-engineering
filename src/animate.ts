export interface AnimateProps {
    age: number
    type: string
    food: string
}

export class Animate {
    age: number
    type: string
    food: string
    constructor({ age, type, food }: AnimateProps) {
        this.age = age
        this.type = type
        this.food = food
    }
    eat() {
        console.log(`${this.type} eat ${this.food}`);
    }
}