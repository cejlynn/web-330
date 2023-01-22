/*

            Title: Assignment 3.2 Restaurant App
            File Name: bill.js
            Date: 1/19/2023
            Description: Script for johnson-restaurant.html 

            */

            export class Bill { // Export Bill class

                _beverages = [];
                _appetizers = [];
                _mainCourse = [];
                _desserts = [];
            
            addBeverage(beverage) { //Function for adding beverages
                this._beverages.push(beverage);
            }
        
            addAppetizer(appetizer) { // Function for adding appetizers
                this._appetizers.push(appetizer);
            }
        
            addMainCourse(mainCourse) { // Function for adding main course
                this._mainCourse.push(mainCourse);
            }
        
            addDessert(dessert) { // Function for adding desserts
                this._desserts.push(dessert);
            }
        
            getTotal() { // Function for adding total
        
                let total = 0;
                
                this._beverages.forEach(function(beverage) {
                    total += parseFloat(beverage.price);
                })
        
                this._appetizers.forEach(function(appetizer) {
                    total += parseFloat(appetizer.price);
                })
        
                this._mainCourse.forEach(function(mainCourse) {
                    total += parseFloat(mainCourse.price);
                })
        
                this._desserts.forEach(function(dessert) {
                    total += parseFloat(dessert.price);
                })
        
                console.log(total);
                return total.toFixed(2); // Return total
            }
        }