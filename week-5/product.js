/*
Title: Assignment 5.2 Bob's Automotive Repair Shop
File Name: product.js
Date: 1/31/2023
Description: Script
*/

export class Product { // export Product Class
    constructor(name, price) {
        this.name = name;
        this.price = price;
        this.id = Math.random().toString(16).slice(2); // code provided by Prof Krasso
    }

}