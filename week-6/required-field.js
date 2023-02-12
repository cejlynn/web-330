

export class RequiredField { // export class RequiredField to validator.js 
    constructor(name, field) { // params 
        this.name = name;
        this.field = field;
    }

    validate() { // validate if string && return boolean 
        if (typeof this.field === "string" || this.field instanceof String) {
            return Boolean(this.field); 
        }

    }
    getMessage() { // return string
        return this.name + "is a required field.";
    }

}
