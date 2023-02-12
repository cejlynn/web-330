

export class FloatMaxField { // Export class FloatMaxField to validator.js
      constructor(name, field, max) {
          this.name = name;
          this.field = field;
          this.max = max;
      }

      validate() { // Validate if field is less than max, return Boolean
        if (parseFloat(this.field) < this.max) {
              return true;
          } else {
              return false;
          }
      }

      getMessage() { // Output message
          return this.name + " must be less than " + this.max + ". You entered " + this.field;
      }
    }
    