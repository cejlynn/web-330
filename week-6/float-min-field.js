

export class FloatMinField {// export class FloatMinField to validator.js 
    constructor(name, field, min) {
        this.name = name;
        this.field = field;
        this.min = min;
    }

    validate() { // validate if field is greater than FloatMinField, return boolean 
        if (parseFloat(this.field) > this.min) {
            return true;
        } else {
            return false;
        }
    }

    getMessage() { // output message
        return this.name + " must be more than " + this.min + ". You entered " + this.field;
    }
}
