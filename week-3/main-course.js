/*

            Title: Assignment 3.2 Restaurant App
            File Name: main-course.js
            Date: 1/19/2023
            Description: Script for johnson-restaurant.html 

            */

            import { Product } from "./product.js"; // Import product class

export class MainCourse extends Product // Export MainCourse class
{
    constructor(name, price)
    {
        super(name, price);
    }
}