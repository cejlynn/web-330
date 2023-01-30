/*
Title: Assignment 4.2 Calorie App
File Name: calorie-converter.js
Date: 1/28/2023
Description: Script
*/


import { FoodModel } from "./food-model.js"; // import Food Model

export class CalorieConverter { //  export Calorie Converter 
    static data = [
        new FoodModel(1007, "Egg", 78),
        new FoodModel(1008, "Apple", 95),
        new FoodModel(1009, "Hamburger", 354),
        new FoodModel(1010, "Fries", 400),
        new FoodModel(1011, "Banana", 105),
        new FoodModel(1012, "Soda", 150),
    ]

    static find(string){
        return this.data.filter(foodModel => foodModel.name.toLowerCase() === string); // input field compared against string value
    }
}