
export class FloatField { //export class Floatfield to validator.js 
    constructor(name, field) {
        this.name = name;
        this.field = field;
    }

    validate() { // validator  
        if (isNaN(parseFloat(this.field))) {
            return false;
        } else {
            return true;
        }
        }

        getMessage() { // Output message
            return this.name + " must be a float value. You entered " + this.field; 
        }
    }
    