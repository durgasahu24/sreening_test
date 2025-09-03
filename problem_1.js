class Calculater {

    constructor(a, b, operation) {
        this.a = a;
        this.b = b;
        this.operation = operation.toLowerCase();
    }

    calculater() {
        switch (this.operation) {
            case "add":
                return this.a + this.b
            case "subtraction":
                return this.a - this.b
            case "multiply":
                return this.a * this.b
            case "devide":
                if (this.b != 0) {
                    return this.a / this.b;
                }
                else {
                    return "a is not divisible"
                }
            default:
                return "Invalid operation "
        }
    }
}

let obj1 = new Calculater(2, 3, "add");
console.log("addition ", obj1.calculater())

let obj2 = new Calculater(3,2,"subtraction")
console.log("subtration ",obj2.calculater());

let obj3 = new Calculater(2,3,"multiply");
console.log("multification ",obj3.calculater());

let obj4 = new Calculater(3,2,"devide")
console.log("devision ",obj4.calculater());

