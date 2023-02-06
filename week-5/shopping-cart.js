/*
Title: Assignment 5.2 Bob's Automotive Repair Shop
File Name: shopping-cart.js
Date: 1/31/2023
Description: Script
*/

export class ShoppingCart { // Export class ShoppingCart
    constructor() {
        
        this.products = [];
    }
    
    count() {
        return this.products.length; // Get length
    }

    addProduct(product) {
        this.products.push(product); // Add product to products array
    }

    *[Symbol.iterator]() { 
        for(let product of this.products) {
            yield product;
        }
    }
}